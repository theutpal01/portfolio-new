"use client"
import Image from 'next/image'
import { AButton } from '@/components/ui/buttons'
import { useEffect, useState } from 'react'
import MenuView from './MenuView'
import { ArrowUp, ChevronUp, Instagram, Linkedin } from '@deemlol/next-icons'
import Link from 'next/link'
import { smoothScrollToId } from '@/utils/helpers'
import { useRouter } from 'next/navigation'
import { useDeviceDetect } from '@/hooks/useMobile'

const Navigation = () => {
	const router = useRouter();
	const isMobile = useDeviceDetect();
	const [visible, setVisible] = useState<boolean>(true);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isTop, setIsTop] = useState<boolean>(true);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsTop(false);
		} else {
			setIsTop(true);
		}
	}

	const handleRedirect = (url: string) => {
		window.open(url, '_blank');
		if (isOpen) setIsOpen(false);
	}

	const handleHomeRefresh = () => {
		router.push('/');
		setIsOpen(false);
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	// hide navbar if swcrolled down and show it if scrolled up and optimised for showing back
	useEffect(() => {
		let lastScrollTop = 0;
		const handleHideScroll = () => {
			if (!isMobile) return;
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			if (scrollTop > lastScrollTop && scrollTop > 100) {
				setVisible(false);
			} else if (scrollTop < lastScrollTop) {
				setVisible(true);
			}
			lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
		};
		
		window.addEventListener('scroll', handleHideScroll);
		return () => {
			window.removeEventListener('scroll', handleHideScroll);
		};
	}, [isMobile]);
	
	return (
		<nav className={`${visible ? "top-0" : "-top-20"} duration-200 fixed h-20 left-0 w-full z-50 bg-transparent pointer-events-none p-4 md:p-8`}>
			
			<div id='nav-start' className={`flex justify-between items-center`}>
				<Image onClick={handleHomeRefresh} id='nav-icon' className='cursor-pointer z-50 pointer-events-auto w-10 h-10 md:w-12 md:h-12' src={'/images/logo.png'} alt="Logo" width={50} height={50} />
				<div className='flex h-fit items-center gap-5 z-50'>
				<div className='lg:fixed bottom-0 right-0 flex lg:flex-col lg:p-8 gap-3'>
				<AButton name='instagram redirect' color={isOpen ? "white" : "primary"} className='z-50 pointer-events-auto !text-base md:!text-lg !p-2.5 flex ' disabled={false} onClick={() => handleRedirect('https://www.instagram.com/theutpal01/')}>
					<Instagram />
				</AButton>
				<AButton name='linkedin redirect' color={isOpen ? "white" : "primary"} className='z-50 pointer-events-auto !text-base md:!text-lg !p-2.5 flex ' disabled={false} onClick={() => handleRedirect('https://www.linkedin.com/in/utpal-493b1030b/')}>
					<Linkedin />
				</AButton>
				</div>
				<AButton name='menu toggle' color={isOpen ? "white" : "primary"} className='z-50 h-fit pointer-events-auto !text-base md:!text-lg' disabled={false} onClick={() => setIsOpen((prev) => !prev)}>{!isOpen ? "Menu" : "Close"}</AButton>
				</div>
			</div>

			<MenuView open={isOpen} setOpen={setIsOpen} />
			
			{!isOpen && !isTop && <Link href="" onClick={() => smoothScrollToId('home')} className='hidden lg:flex h-fit fixed gap-3 -right-4 text-primary font-aldrich -rotate-90 top-1/2 -translate-y-1/2 pointer-events-auto z-50 group' scroll={false}>
				Back to Top <ArrowUp className='rotate-90 group-hover:scale-110 duration-150 group-active:scale-95' />
			</Link>}
			{!isOpen && !isTop && <AButton name='back to top' color='primary' className='flex !bg-background lg:hidden !fixed bottom-0 right-0 z-50 pointer-events-auto !text-base !p-1 m-4' disabled={false} onClick={() => smoothScrollToId('home')}>
				<ChevronUp />
			</AButton>}
		</nav>
	)
}

export default Navigation