import gsap from "gsap";

// Define an interface for the configuration object
interface HorizontalLoopConfig {
  repeat?: number ;
  paused?: boolean;
  speed?: number;
  snap?: boolean | number | ((value: number) => number);
  paddingRight?: number | string;
  reversed?: boolean;
  // Add any other properties that config might have
}

export interface VerticalLoopConfig {
  speed?: number;          // logical-pixels per second (default = 1 × 100)
  snap?: number | false;   // pixel snapping – false disables
  repeat?: number;         // same as tl.repeat()
  paused?: boolean;        // same as tl.paused()
  reversed?: boolean;      // start reversed
  paddingEnd?: number;     // px padding at the tail
  verticalWriting?: boolean; // true → use offsetLeft / clientWidth
}

export function horizontalLoop(
  itemsInput: gsap.DOMTarget | gsap.DOMTarget[], // GSAP's DOMTarget can be Element, string selector, NodeList, etc.
  configInput?: HorizontalLoopConfig
) {
  const items: Element[] = gsap.utils.toArray(itemsInput); // gsap.utils.toArray returns Element[]
  const config: HorizontalLoopConfig = configInput || {};

  // Ensure gsap and its methods are available and correctly typed
  if (!gsap || !gsap.utils || !gsap.timeline) {
    console.error("GSAP is not properly initialized or imported.");
    return null; // Or throw an error, depending on desired error handling
  }

  const tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
    onReverseComplete: () => {
      // Check if tl is defined before using it, though in this scope it should be
      if (tl) {
        tl.totalTime(tl.rawTime() + tl.duration() * 100);
      }
    }
  });

  // Type other variables as well, for example:
  const length: number = items.length;
  const startX: number = items.length > 0 ? (items[0] as HTMLElement).offsetLeft : 0; // Added check for items[0]
  const times: number[] = [];
  const widths: number[] = [];
  const xPercents: number[] = [];
  let curIndex: number = 0;
  const pixelsPerSecond: number = (config.speed || 1) * 100;
  const snap = config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap as number || 1);
  
  let curX: number, distanceToStart: number, distanceToLoop: number, item: Element, i: number;

  if (items.length === 0) {
    // Handle empty items array to prevent errors like accessing items[0] or items[length-1]
    console.warn("horizontalLoop called with no items.");
    // You might want to return the empty timeline or null
    return tl; 
  }
  
  gsap.set(items, {
    xPercent: (index, el) => {
      const w = widths[index] = parseFloat(gsap.getProperty(el, "width", "px") as string);
      xPercents[index] = snap(parseFloat(gsap.getProperty(el, "x", "px") as string) / w * 100 + (gsap.getProperty(el, "xPercent") as number));
      return xPercents[index];
    }
  });

  gsap.set(items, { x: 0 });

  const lastItem = items[length - 1] as HTMLElement; // Type assertion
  const totalWidth = lastItem.offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + lastItem.offsetWidth * (gsap.getProperty(lastItem, "scaleX") as number) + (parseFloat(config.paddingRight as string) || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    const htmlItem = item as HTMLElement; // Type assertion
    curX = xPercents[i] / 100 * widths[i];
    distanceToStart = htmlItem.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);
    
    tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
      .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }

  function toIndex(index: number, vars?: gsap.TweenVars) { // Add type for vars
    vars = vars || {};
    if (Math.abs(index - curIndex) > length / 2) {
      index += index > curIndex ? -length : length;
    }
    const newIndex = gsap.utils.wrap(0, length, index);
    let time = times[newIndex];
    if (tl && time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl ? tl.tweenTo(time, vars) : null; // Check tl
  }

  if (tl) {
    tl.next = (vars?: gsap.TweenVars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars?: gsap.TweenVars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index: number, vars?: gsap.TweenVars) => toIndex(index, vars);
    tl.times = times;

    tl.progress(1, true).progress(0, true);
    if (config.reversed) {
      if (tl.vars.onReverseComplete) { // Check if onReverseComplete is defined
         tl.vars.onReverseComplete();
      }
      tl.reverse();
    }
  }
  return tl;
}


export function verticalLoop(
  itemsInput: gsap.DOMTarget | gsap.DOMTarget[],
  cfg: VerticalLoopConfig = {}
) {
  // ---------- 1. Setup ----------
  const items = gsap.utils.toArray<Element>(itemsInput);
  if (!items.length) return gsap.timeline(); // nothing to do

  const {
    speed = 1,
    snap = 1,
    repeat,
    paused,
    reversed,
    paddingEnd = 0,
    verticalWriting = false
  } = cfg;

  const axisOffset = verticalWriting ? "offsetLeft"   : "offsetTop";
  const axisSize   = verticalWriting ? "clientWidth"  : "clientHeight";

  const pxPerSec = speed * 100;
  const snapFn   = snap === false ? (v: number) => v : gsap.utils.snap(snap);

  const heights: number[] = [];
  const yPercents: number[] = [];
  const times: number[] = [];

  let curIndex = 0;

  // ---------- 2. Read layout ----------
  items.forEach((el, i) => {
    const h = heights[i] = (el as HTMLElement)[axisSize] as number;
    // initial yPercent (snap to full pixels so it never drifts)
    yPercents[i] = snapFn(
      (parseFloat(gsap.getProperty(el, "y", "px") as string) / h) * 100 +
      (gsap.getProperty(el, "yPercent") as number)
    );
  });

  gsap.set(items, { y: 0, yPercent: (i: number) => yPercents[i] });

  // Starting coordinate (top-most or left-most item)
  const startPos = (items[0] as HTMLElement)[axisOffset] as number;

  // Total visual span of the list
  const last = items[items.length - 1] as HTMLElement;
  const totalSpan =
    last[axisOffset] +
    (yPercents[yPercents.length - 1] / 100) * heights[heights.length - 1] -
    startPos +
    last[axisSize] * (gsap.getProperty(last, "scaleY") as number) +
    paddingEnd;

  // ---------- 3. Build timeline ----------
  const tl = gsap.timeline({
    repeat,
    paused,
    defaults: { ease: "none" },
    onReverseComplete() {
      tl.totalTime(tl.rawTime() + tl.duration() * 100);
    }
  });

  items.forEach((item, i) => {
    const curY      = (yPercents[i] / 100) * heights[i];
    const distStart = ((item as HTMLElement)[axisOffset] as number) + curY - startPos;
    const distLoop  =
      distStart + heights[i] * (gsap.getProperty(item, "scaleY") as number);

    // forward tween (current ➜ next cycle)
    tl.to(
      item,
      { yPercent: snapFn(((curY - distLoop) / heights[i]) * 100),
        duration: distLoop / pxPerSec },
      0
    )
      // wrap-around tween (next cycle ➜ back to original)
      .fromTo(
        item,
        { yPercent: snapFn(((curY - distLoop + totalSpan) / heights[i]) * 100) },
        { yPercent: yPercents[i],
          duration: (curY - distLoop + totalSpan - curY) / pxPerSec,
          immediateRender: false },
        distLoop / pxPerSec
      )
      .add(`label${i}`, distStart / pxPerSec);

    times[i] = distStart / pxPerSec;
  });

  // ---------- 4. Helpers ----------
  function jumpTo(index: number, vars: gsap.TweenVars = {}) {
    if (Math.abs(index - curIndex) > items.length / 2) {
      index += index > curIndex ? -items.length : items.length;
    }
    const newIdx = gsap.utils.wrap(0, items.length, index);
    let time     = times[newIdx];

    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex       = newIdx;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  Object.assign(tl, {
    next    : (v?: gsap.TweenVars) => jumpTo(curIndex + 1, v),
    previous: (v?: gsap.TweenVars) => jumpTo(curIndex - 1, v),
    current : () => curIndex,
    toIndex : (i: number, v?: gsap.TweenVars) => jumpTo(i, v),
    times
  });

  tl.progress(1, true).progress(0, true);
  if (reversed) tl.reverse();

  return tl;
}


export function smoothScrollToId(id: string, offset: number = 0) {
  const element = document.getElementById(id);
  if (element) {
	const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
	const offsetPosition = elementPosition - offset;

	window.scrollTo({
	  top: offsetPosition,
	  behavior: "smooth"
	});
  }
}
