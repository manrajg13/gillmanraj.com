import Head from 'next/head'
import Image from 'next/image'
import { FaFolderOpen, FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from '../components/model'
import Navbar from '../components/navbar'

export default function Home() {
	const [showMe1, setShowMe1] = useState(false)
	const [showMe2, setShowMe2] = useState(false)

	function toggle1() {
		setShowMe1(!showMe1)
	}

	function toggle2() {
		setShowMe2(!showMe2)
	}

	return (
		<>
			<Head>
				<title>Manraj Gill</title>
				<meta name='description' content='My website portfolio' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />

			<div className='w-[720px] mx-auto my-28'>
				<div className='flex w-[280px] h-[220px] mx-auto'>
					<Canvas orthographic camera={{ zoom:50, near:-20, far:20, position:[-0.5, 0.8, 2]}} >
						<Suspense fallback={null}>
							<OrbitControls maxPolarAngle={Math.PI/2.0} autoRotate={true} />
							<ambientLight color={'#ccd1cb'} intensity={4.0} />
							<directionalLight color={'#fff'} intensity={2.0} />
							<Model />
						</Suspense>
					</Canvas>
				</div>

				<div className='mt-5 text-center'>
					<h1 className='text-white font-bold text-xl leading-5'>Hi there, my name is Manraj Gill.</h1>
					<h1 className='text-red font-bold text-sm'>SOFTWARE ENGINEER</h1>

					<div className='flex place-content-center mt-3 font-bold text-white text-xs'>
						<a className='px-3 py-2 mx-1 rounded-sm border border-white/[0.15] hover:text-red 
													hover:border-red hover:cursor-pointer transition'
							 			href='https://github.com/manrajg13' target='_blank'>GITHUB</a>
						<a className='px-3 py-2 mx-1 rounded-sm border border-white/[0.15] hover:text-red 
													hover:border-red hover:cursor-pointer transition'
										href='https://www.linkedin.com/in/gill-manraj/' target='_blank'>LINKEDIN</a>
						<a className='px-3 py-2 mx-1 rounded-sm border border-white/[0.15] hover:text-red 
													hover:border-red hover:cursor-pointer transition'
										href='Resume.pdf' target='_blank'>RESUME</a>
					</div>
				</div>

				<div className='mt-14'>
					<p className='my-1 text-red font-bold'>ABOUT ME</p> 
					<hr className='border-white/[0.15]'></hr>

					<div className='m-3 mt-8'>
						<p className='text-white text-sm leading-5'>Currently in my final year as a Computer Science student at the University of 
							Windsor but taking some time to do a Software Developer internship at BMO. I'm mainly interested in fullstack development but
							entirely open to trying new areas of Computer Science as I further my knowledge of the field. 
						</p>
						<p className='mt-4 text-white text-sm leading-5'>Some technologies I've worked with:</p>
						<div className='grid mt-4 grid-cols-4 font-bold text-white text-sm'>
							<p><FaChevronRight className='inline-flex mb-1 text-red text-xs' />React</p>
							<p><FaChevronRight className='inline-flex mb-1 text-red text-xs' />Node.js</p>
							<p><FaChevronRight className='inline-flex mb-1 text-red text-xs' />Typescript</p>
							<p><FaChevronRight className='inline-flex mb-1 text-red text-xs' />Flask</p>
							<p><FaChevronRight className='inline-flex mb-1 text-red text-xs' />Django</p>
							<p><FaChevronRight className='inline-flex mb-1 text-red text-xs' />TailwindCSS</p>
							<p><FaChevronRight className='inline-flex mb-1 text-red text-xs' />Next.js</p>
							<p><FaChevronRight className='inline-flex mb-1 text-red text-xs' />Three.js</p>
						</div>
					</div>
				</div>

				<div className='mt-14'>
					<p className='my-1 text-red font-bold'>EXPERIENCE</p> 
					<hr className='border-white/[0.15]'></hr>

					<div className='m-3 mt-8'>
						<div className='group px-2 font-bold text-sm overflow-hidden hover:cursor-pointer transition hover:opacity-70' onClick={toggle1}>
							<span className='text-red'>BANK OF MONTREAL </span>
							<span className='text-white'>SOFTWARE DEVELOPER INTERN</span>
							<span className='-mr-7 text-white/[0.65] float-right transition group-hover:-translate-x-5'>SEP 2022 - DEC 2022 
								&nbsp;&nbsp;<FaChevronDown className='relative inline-flex text-white/[0.65] bottom-0.5' /></span>
						
							<div className='mx-6 mb-2 font-normal text-sm text-white leading-5' style={{display: showMe1?"block":"none"}}>
								<p><FaChevronRight className='inline-flex mb-1 text-red text-xs' /> Managed asset data collection of over 200 parks in Windsor</p>
								<p><FaChevronRight className='inline-flex mb-1 text-red text-xs' /> Verified and updated over 4000 assets using Citywide Software</p>
								<p><FaChevronRight className='inline-flex mb-1 text-red text-xs' /> Regularly performed quality checks on assigned assets in database</p>
							</div>
						</div>

						<div className='group px-2 font-bold text-sm overflow-hidden hover:cursor-pointer transition hover:opacity-70' onClick={toggle2}>
							<span className='text-red'>CITY OF WINDSOR </span>
							<span className='text-white'>DATABASE MANAGEMENT CO-OP</span>
							<span className='-mr-7 text-white/[0.65] float-right transition group-hover:-translate-x-5'>JAN 2021 - SEP 2021 
								&nbsp;&nbsp;<FaChevronDown className='relative inline-flex text-white/[0.65] bottom-0.5' /></span>
						
							<div className='mx-6 mb-2 font-normal text-sm text-white leading-5' style={{display: showMe2?'block':'none'}}>
								<p><FaChevronRight className='inline-flex mb-1 text-red text-xs' /> I'll let you know when I find out </p>
							</div>
						</div>
					</div>
				</div>
			
				<div id='projects' className='mt-14'>
					<p className='my-1 text-red font-bold'>PROJECTS</p> 
					<hr className='border-white/[0.15]'></hr>

					<div className='grid grid-flow-col place-content-center mt-10'>
						<a className='group relative p-6 mx-2 border border-white w-[230px] h-[230px] shadow-lg transition hover:border-red hover:-translate-y-1'
							 href='https://github.com/manrajg13/sorting-algorithm-visualizer' target='_blank'>
							<FaFolderOpen className='mb-4 text-4xl text-white group-hover:text-red' />
							<h1 className='font-bold text-white text-sm leading-3 group-hover:text-red'>ARRAY SORT VISUALIZER</h1>
							<p className='mt-4 text-sm text-white group-hover:text-red leading-4'>A visualization of various sorting algorithms with live pseudocode tracing to follow along.</p>
							<p className='absolute bottom-6 text-xs text-white group-hover:text-red'>Javascript Chart.js</p>
						</a>

						<a className='group relative p-6 mx-2 border border-white w-[230px] h-[230px] shadow-lg transition hover:border-red hover:-translate-y-1'
							 href='https://github.com/manrajg13/threejs-voxel' target='_blank'>
							<FaFolderOpen className='mb-4 text-4xl text-white group-hover:text-red' />
							<h1 className='font-bold text-white text-sm leading-3 group-hover:text-red'>VOXEL RENDER</h1>
							<p className='mt-4 text-sm text-white group-hover:text-red'>A 3D voxel model created in Blender and rendered on the web with the help of WebGL.</p>
							<p className='absolute bottom-6 text-xs text-white group-hover:text-red'>Javascript Three.js Blender</p>
						</a>

						<a className='group relative p-6 mx-2 border border-white w-[230px] h-[230px] shadow-lg transition hover:border-red hover:-translate-y-1'
							 href='https://github.com/manrajg13/shoefull' target='_blank'>
							<FaFolderOpen className='mb-4 text-4xl text-white group-hover:text-red' />
							<h1 className='font-bold text-white text-sm leading-3 group-hover:text-red'>SHOEFULL</h1>
							<p className='mt-4 text-sm text-white group-hover:text-red'>A simple game where you try to hit as many targets as you can before the time runs out.</p>
							<p className='absolute bottom-6 text-xs text-white group-hover:text-red'>Javascript Chart.js</p>
						</a>
					</div>
				</div>

				<div id='contact' className='mt-14'>
					<p className='my-1 text-red font-bold'>CONTACT</p> 
					<hr className='border-white/[0.15]'></hr>

					<div className='mx-20'>
						<p className='mt-10 text-white text-center text-sm leading-4'>I'm always open to conversations for new opportunities! Feel free to email me at the address below or say hi on LinkedIn.</p>
						<div className='flex mt-10 place-content-center'>
							<a className='px-3 py-2 mx-1 bg-red rounded-sm font-bold text-white text-xs hover:opacity-70 hover:cursor-pointer transition' 
									href='mailto:manraj836@gmail.com?body=Hello%20Manraj%2C%0D%0A' >manraj836@gmail.com</a>
						</div>
					</div>
				</div>
			</div>

			<footer className='relative absolute bottom-0 p-5 text-center w-[98vw] text-white text-xs'> © 2022 Manraj Gill. All Rights Reserved. </footer>
		</>
	)
}
