"use client"
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { Divider } from '@/components/ui/dividers'
import { horizontalLoop, smoothScrollToId } from '@/utils/helpers'
import { ArrowLeft } from '@deemlol/next-icons'
import gsap from 'gsap'

const MenuView = ({open, setOpen}: {open: boolean, setOpen : Dispatch<SetStateAction<boolean>>}) => {
	const [active, setActive] = React.useState<"home" | "work" | "info">("home");
	
	React.useEffect(() => {
		const boxes = gsap.utils.toArray(".text-scroll-box") as HTMLElement[];
		const loop = horizontalLoop(boxes, { repeat: -1 });
		
		if (open){
			loop?.play();
			document.body.classList.add("overflow-y-hidden")
		}
		return () => {
			boxes.forEach((box) => {
				gsap.set(box, { xPercent: 0 });
			});
			loop?.kill();
			document.body.classList.remove("overflow-y-hidden");
		}
	}, [open]);

	
	const handleLinkClick = (id: "home" | "work" | "info") => {
		setActive(id);
		setOpen(false); 
		smoothScrollToId(id); 
	}

	React.useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const homeSection = document.getElementById('home');
			const workSection = document.getElementById('work');
			const infoSection = document.getElementById('info');

			if (homeSection && scrollY < homeSection.offsetHeight) {
				setActive("home");
			} else if (homeSection && workSection && scrollY >= homeSection.offsetHeight && scrollY < homeSection.offsetHeight + workSection.offsetHeight) {
				setActive("work");
			} else if (homeSection && workSection && infoSection && scrollY >= homeSection.offsetHeight + workSection.offsetHeight) {
				setActive("info");
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	
	return (
		<div className={`absolute top-0 bottom-0 left-0 -z-20 right-0 ${open ? "h-screen" : "h-0 overflow-hidden"} w-full flex flex-col justify-center items-center bg-secondary duration-200 ease-in-out pointer`}>
			<div className='absolute left-1/2 top-1/2 -translate-1/2 -z-10 flex flex-row gap-1 w-full h-screen self-center items-center overflow-hidden'>
				<p className='text-scroll-box text-[150vh] font-saira font-bold text-background pointer-events-auto'>UTPAL</p>
				<p className='text-scroll-box text-[150vh] font-saira font-bold text-background  pointer-events-auto'>UTPAL</p>
			</div>

			<div className={`absolute w-full top-0 bottom-0 left-0 right-0 flex flex-col gap-5 bg-black/30 backdrop-blur-[2px] px-4 md:px-8 lg:px-20 xl:px-28 -z-10 pointer-events-auto ${open ? "h-screen" : "h-0 overflow-hidden"} duration-200 ease-in-out pointer`}>

				<div className={`flex flex-col *:w-fit pt-32 z-30 ${open ? "h-full" : "h-0 overflow-hidden"} duration-200 ease-in-out pointer text-7xl md:text-8xl lg:text-9xl *:flex *:items-center *:gap-5`}>
					<Link href='/' className='font-nova-round hover:text-white text-slate-200 duration-100 ease-linear font-bold' onClick={() => handleLinkClick("home")} scroll={false}>
						Home
						{active === 'home' && <ArrowLeft className='size-20 md:size-28 lg:size-32' />}
					</Link>
					<Link href='/' className='font-nova-round hover:text-white text-slate-200 duration-100 ease-linear font-bold' onClick={() => handleLinkClick("work")} scroll={false}>
						Work
						{active === 'work' && <ArrowLeft className='size-20 md:size-28 lg:size-32' />}
					</Link>
					<Link href='/' className='font-nova-round hover:text-white text-slate-200 duration-100 ease-linear font-bold' onClick={() => handleLinkClick("info")} scroll={false}>
						Info
						{active === 'info' && <ArrowLeft className='size-20 md:size-28 lg:size-32' />}
					</Link>
				</div>
				<Divider className='block md:hidden !bg-white' />
				<div className='flex flex-col h-fit w-full text-right justify-end pb-4 lg:pr-8 font-aldrich text-sm md:pb-8'>
					<h2>LINKS</h2>
					<Link href='https://www.instagram.com/theutpal01' target='_blank' className='text-lg md:text-2xl font-nova-round hover:text-white text-slate-200 duration-100 ease-linear'>Instagram</Link>
					<Link href='https://www.x.com/theutpal01' target='_blank' className='text-lg md:text-2xl font-nova-round hover:text-white text-slate-200 duration-100 ease-linear'>Twitter</Link>
					<Link href='https://www.github.com/theutpal01' target='_blank' className='text-lg md:text-2xl font-nova-round hover:text-white text-slate-200 duration-100 ease-linear'>Github</Link>

				</div>

			</div>

		</div>
	)
}

export default MenuView