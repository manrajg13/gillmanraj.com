import {useState} from 'react'
import Link from "next/link"

export default function Navbar() {
	return (
		<nav className='fixed left-[50%] top-0 ml-[-500px] p-2 text-lg text-white w-[1000px] bg-dark-gray/[0.8] z-10 font-mono'>
			<div className='float-left py-5'>
				<Link href='/'>
					<span className='text-2xl hover:cursor-pointer hover:animate-bounce'>MG</span>
				</Link>
			</div>

			<div className='my-1 float-right py-5'>
				<Link href='#experience'>
					<span className='mx-5 hover:cursor-pointer hover:underline'>Experience</span>
				</Link>
				<Link href='#projects'>
					<span className='mx-5 hover:cursor-pointer hover:underline'>Projects</span>
				</Link>
				<Link href='#contact'>
					<span className='mx-5 hover:cursor-pointer hover:underline'>Contact</span>
				</Link>
			</div>
		</nav>
	)
}
