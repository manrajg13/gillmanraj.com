import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from "next/link"

export default function Navbar() {
	const { theme, setTheme } = useTheme()

	function removeDelay() {
		document.getElementById('navbar').classList.remove('transition')
		document.getElementById('navbar').classList.remove('delay-[2400ms]')
		document.getElementById('navbar').classList.remove('duration-500')
		document.getElementById('h1').classList.remove('transition')
		document.getElementById('h1').classList.remove('duration-[1200ms]')
		document.getElementById('h2').classList.remove('duration-500')
		document.getElementById('h2').classList.remove('delay-[1800ms]')
		document.getElementById('links').classList.remove('transition')
		document.getElementById('links').classList.remove('duration-500')
		document.getElementById('links').classList.remove('delay-[2600ms]')
	}

	useEffect(() => {
   	document.getElementById('navbar').classList.remove('-translate-y-12')
		setInterval(removeDelay, 3200)
	},[])

	return (
		<nav id='navbar' className='fixed w-[100vw] z-10 md:ml-[-375px] py-4 md:left-[50%] md:w-[750px] top-0 text-sm font-bold text-black dark:text-white z-14 transition -translate-y-12 delay-[2400ms] duration-500'>
			<div className='float-left'>
				<Link href='/'>
					<span className='p-3 hover:cursor-pointer hover:text-red transition duration-150 hover:ease-in'>MANRAJ GILL</span>
				</Link>
			</div>

			<div className='float-right'>
				<a id='mode' className='p-3 hover:cursor-pointer hover:text-red transition' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        	DARK MODE
      	</a>
				<Link href='#contact'>
					<span className='p-3 hover:cursor-pointer hover:text-red transition'>CONTACT</span>
				</Link>
			</div>
		</nav>
	)
}
