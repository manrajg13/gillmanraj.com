import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'
import Link from "next/link"

export default function Navbar() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		setInterval(removeDelay, 3200)
		setInterval(showNav, 100)
	}, [])

	if (!mounted) {
		return null
	}

	function showNav() {
		document.getElementById('navbar').classList.remove('-translate-y-12')
	}

	function removeDelay() {
		document.getElementById('navbar').classList.remove('transition-all')
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

	return (
		<nav id='navbar' 
				 className='fixed w-[100vw] z-10 md:ml-[-375px] py-4 md:left-[50%] md:w-[750px] top-0 text-sm 
				 						font-bold text-black bg-light-background/[0.7] dark:text-white dark:bg-dark-background/[0.7]
				 						z-14 transition-all -translate-y-12 delay-[2400ms] duration-500'>
			<div className='float-left'>
				<Link href='/'>
					<span className='p-3 hover:cursor-pointer hover:text-red transition duration-150 hover:ease-in'>
						MANRAJ GILL
					</span>
				</Link>
			</div>

			<div className='float-right'>
				<a className='p-3 hover:cursor-pointer hover:text-red transition' 
					 onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        	 {
        	 	theme == 'dark' 
	        	 ? ( <FaSun className='inline-flex mb-1'/> )
						 : ( <FaMoon className='inline-flex mb-1'/> )
					 }
      	</a>
				<Link href='#contact'>
					<span className='p-3 hover:cursor-pointer hover:text-red transition'>CONTACT</span>
				</Link>
			</div>
		</nav>
	)
}
