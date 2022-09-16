import {useState, useEffect} from 'react'
import Link from "next/link"

export default function Navbar() {
	useEffect(() => {
   	document.getElementById('n').classList.remove('-translate-y-12')
	})

	return (
		<nav id='n' className='fixed ml-[-375px] py-4 left-[50%] top-0 z-10 text-sm font-bold text-white w-[750px] bg-background/[0.8] z-14 transition -translate-y-12 delay-[3000ms] duration-500'>
			<div className='float-left'>
				<Link href='/'>
					<span className='p-3 hover:cursor-pointer hover:text-red transition duration-150 hover:ease-in'>MANRAJ GILL</span>
				</Link>
			</div>

			<div className='float-right'>
				<Link href='#projects'>
					<span className='p-3 hover:cursor-pointer hover:text-red transition'>PROJECTS</span>
				</Link>
				<Link href='#contact'>
					<span className='p-3 hover:cursor-pointer hover:text-red transition'>CONTACT</span>
				</Link>
			</div>
		</nav>
	)
}
