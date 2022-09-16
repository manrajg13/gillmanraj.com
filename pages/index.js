import Head from 'next/head'
import Image from 'next/image'
import { FaFolderOpen, FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { Suspense, useEffect, useState } from 'react'
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

	useEffect(() => {
		document.getElementById('h1').classList.remove('opacity-0')
		document.getElementById('h2').classList.remove('opacity-0')
		document.getElementById('links').classList.remove('opacity-0')
		document.getElementById('about').classList.remove('opacity-0')
		document.getElementById('experience').classList.remove('opacity-0')
		document.getElementById('projects').classList.remove('opacity-0')
		document.getElementById('contact').classList.remove('opacity-0')

		document.getElementById('h1').classList.remove('-translate-y-2')
		document.getElementById('h2').classList.remove('-translate-y-2')
		document.getElementById('links').classList.remove('translate-y-2')
		document.getElementById('model').classList.remove('-translate-y-[360px]')
	})

	return (
		<div id='page' className='dark:bg-light-background bg-dark-background'>
			<Head>
				<title>Manraj Gill</title>
				<meta name='description' content='My website portfolio' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />

			<div className='md:w-[720px] w-[340px] mx-auto'>
				<div className='flex relative md:h-[400px] h-[500px] mx-auto'>
					<Canvas id='model' className='transition -translate-y-[360px] duration-[2000ms]' 
									orthographic camera={{ zoom:50, near:-20, far: 20, position:[-0.5, 0.2, 0.2]}} >
						<Suspense fallback={null}>
							<OrbitControls maxPolarAngle={Math.PI/2.0} autoRotate={true} />
							<ambientLight color={'#ccd1cb'} intensity={4.0} />
							<directionalLight color={'#fff'} intensity={2.0} />
							<Model />
						</Suspense>
					</Canvas>

					<div className='absolute mx-auto text-center bottom-0 left-0 right-0'>
						<h1 id='h1' className='dark:text-black text-white font-bold text-xl leading-5 opacity-0 transition duration-[1200ms] -translate-y-2'>Hi there, my name is Manraj Gill.</h1>
						<h1 id='h2' className='font-bold text-red text-sm opacity-0 transition duration-500 delay-[1800ms] -translate-y-2'>SOFTWARE ENGINEER</h1>

						<div id='links' className='flex place-content-center mt-3 font-bold dark:text-black text-white text-xs transition duration-500 delay-[2600ms] opacity-0 translate-y-2'>
							<a className='px-3 py-2 mx-1 rounded-sm border dark:border-gray border-white/[0.15] hover:text-red 
														hover:border-red hover:cursor-pointer transition'
								 			href='https://github.com/manrajg13' target='_blank' rel='noopener noreferrer'>GITHUB</a>
							<a className='px-3 py-2 mx-1 rounded-sm border dark:border-gray border-white/[0.15] hover:text-red 
														hover:border-red hover:cursor-pointer transition'
											href='https://www.linkedin.com/in/gill-manraj/' target='_blank' rel='noopener noreferrer'>LINKEDIN</a>
							<a className='px-3 py-2 mx-1 rounded-sm border dark:border-gray border-white/[0.15] hover:text-red 
														hover:border-red hover:cursor-pointer transition'
											href='Resume.pdf' target='_blank' rel='noopener noreferrer'>RESUME</a>
						</div>
					</div>
				</div>

				<div id='about' className='mt-14 opacity-0 transition duration-500 delay-[2400ms]'>
					<p className='my-1 text-red font-bold'>ABOUT ME</p> 
					<hr className='dark:border-gray border-white/[0.15]'></hr>

					<div className='dark:text-black text-white leading-5'>
						<p className='mt-4'>Currently in my final year as a Computer Science student at the University of 
							Windsor but doing a 4 month internship at BMO. I&apos;m mainly interested in fullstack development but
							entirely open to trying new areas of Computer Science as I further my knowledge of the field.
						</p>
						<p className='mt-4'>In my freetime I enjoy looking at art, listening to music, creating digital/traditional
							drawings, and playing strategy based games.</p>
						<p className='mt-4'>Some technologies I have worked with:</p>
						<div className='grid mt-4 md:grid-cols-4 grid-cols-2 font-bold text-sm'>
							<p><FaChevronRight className='inline-flex mb-[2px] text-red text-xs' />React</p>
							<p><FaChevronRight className='inline-flex mb-[2px] text-red text-xs' />Node.js</p>
							<p><FaChevronRight className='inline-flex mb-[2px] text-red text-xs' />Typescript</p>
							<p><FaChevronRight className='inline-flex mb-[2px] text-red text-xs' />Flask</p>
							<p><FaChevronRight className='inline-flex mb-[2px] text-red text-xs' />Django</p>
							<p><FaChevronRight className='inline-flex mb-[2px] text-red text-xs' />TailwindCSS</p>
							<p><FaChevronRight className='inline-flex mb-[2px] text-red text-xs' />Next.js</p>
							<p><FaChevronRight className='inline-flex mb-[2px] text-red text-xs' />Three.js</p>
						</div>
					</div>
				</div>

				<div id='experience' className='mt-10 opacity-0 transition duration-500 delay-[2400ms]'>
					<p className='my-1 text-red font-bold'>EXPERIENCE</p> 
					<hr className='dark:border-gray border-white/[0.15]'></hr>

					<div className='m-3 mt-8'>
						<div className='group px-2 py-2 font-bold text-sm overflow-hidden hover:cursor-pointer transition hover:opacity-70' onClick={toggle1}>
							<span className='text-red'>BANK OF MONTREAL </span>
							<span className='dark:text-black text-white'>Software Developer</span>
							<span className='-mr-7 dark:text-black/[0.65] text-white/[0.65] float-right transition group-hover:-translate-x-5'>SEP 2022 - DEC 2022 
								&nbsp;&nbsp;<FaChevronDown className='relative inline-flex dark:text-black/[0.65] text-white/[0.65] bottom-0.5' /></span>
						
							<div className='mx-6 mb-1 font-normal text-sm dark:text-black text-white leading-5' style={{display: showMe1?"block":"none"}}>
								<p><FaChevronRight className='inline-flex mb-[2px] text-red text-sm' /> I&apos;ll let you know when I find out </p>
							</div>
						</div>

						<hr className='ml-1 dark:border-gray border-white/[0.15]'></hr>

						<div className='group px-2 py-2 font-bold text-sm overflow-hidden hover:cursor-pointer transition hover:opacity-70' onClick={toggle2}>
							<span className='text-red'>CITY OF WINDSOR </span>
							<span className='dark:text-black text-white'>Database Management</span>
							<span className='-mr-7 dark:text-black/[0.65] text-white/[0.65] float-right transition group-hover:-translate-x-5'>JAN 2021 - SEP 2021 
								&nbsp;&nbsp;<FaChevronDown className='relative inline-flex dark:text-black/[0.65] text-white/[0.65] bottom-0.5' /></span>
						
							<div className='mx-6 mb-1 font-normal text-sm dark:text-black text-white leading-5' style={{display: showMe2?'block':'none'}}>
								<p><FaChevronRight className='inline-flex mb-[2px] text-red text-sm' /> Managed asset data collection of over 200 parks in Windsor</p>
								<p><FaChevronRight className='inline-flex mb-[2px] text-red text-sm' /> Verified and updated over 4000 assets using Citywide Software</p>
								<p><FaChevronRight className='inline-flex mb-[2px] text-red text-sm' /> Regularly performed quality checks on assigned assets in database</p>
							</div>
						</div>

						<hr className='ml-1 dark:border-gray border-white/[0.15]'></hr>
					</div>
				</div>
			
				<div id='projects' className='mt-12 opacity-0 transition duration-500 delay-[2400ms]'>
					<p className='my-1 text-red font-bold'>PROJECTS</p> 
					<hr className='dark:border-gray border-white/[0.15]'></hr>

					<div className='grid md:grid-flow-col grid-flow-row place-content-center mt-10 dark:text-black text-white'>
						<a className='group relative p-6 md:mx-2 md:my-0 my-2 border border-white w-[230px] h-[230px] shadow-lg
													transition hover:border-red hover:text-red hover:-translate-y-1'
							 href='https://github.com/manrajg13/sorting-algorithm-visualizer' target='_blank' rel='noopener noreferrer'>
							<FaFolderOpen className='mb-4 text-4xl' />
							<h1 className='font-bold text-sm leading-3'>SORT VISUALIZER</h1>
							<p className='mt-4 text-sm leading-4'>A visualization of various sorting algorithms with live pseudocode tracing.</p>
							<div className='inline-flex absolute bottom-6 text-xs'>
								<p className='p-[2px] px-1 mr-1 dark:bg-dark-blue/[0.2] dark:text-dark-blue bg-light-blue/[0.2] text-light-blue group-hover:bg-red/[0.2] group-hover:text-red'>Javascript</p>
								<p className='p-[2px] px-1 mr-1 dark:bg-dark-blue/[0.2] dark:text-dark-blue bg-light-blue/[0.2] text-light-blue group-hover:bg-red/[0.2] group-hover:text-red'>ChartJS</p>
							</div>
						</a>

						<a className='group relative p-6 md:mx-2 md:my-0 my-2 border border-white w-[230px] h-[230px] shadow-lg
													transition hover:border-red hover:text-red hover:-translate-y-1'
							 href='https://github.com/manrajg13/threejs-voxel' target='_blank' rel='noopener noreferrer'>
							<FaFolderOpen className='mb-4 text-4xl' />
							<h1 className='font-bold text-sm leading-3'>VOXEL RENDER</h1>
							<p className='mt-4 text-sm leading-4'>A 3D voxel model created in Blender and rendered on the web with WebGL.</p>
							<div className='inline-flex absolute bottom-6 text-xs'>
								<p className='p-[2px] px-1 mr-1 dark:bg-dark-blue/[0.2] dark:text-dark-blue bg-light-blue/[0.2] text-light-blue group-hover:bg-red/[0.2] group-hover:text-red'>Javascript</p>
								<p className='p-[2px] px-1 mr-1 dark:bg-dark-blue/[0.2] dark:text-dark-blue bg-light-blue/[0.2] text-light-blue group-hover:bg-red/[0.2] group-hover:text-red'>NodeJS</p>
								<p className='p-[2px] px-1 mr-1 dark:bg-dark-blue/[0.2] dark:text-dark-blue bg-light-blue/[0.2] text-light-blue group-hover:bg-red/[0.2] group-hover:text-red'>ThreeJS</p>
							</div>
						</a>

						<a className='group relative p-6 md:mx-2 md:my-0 my-2 border border-white w-[230px] h-[230px] shadow-lg
													transition hover:border-red hover:text-red hover:-translate-y-1'
							 href='https://github.com/manrajg13/shoefull' target='_blank' rel='noopener noreferrer'>
							<FaFolderOpen className='mb-4 text-4xl' />
							<h1 className='font-bold text-sm leading-3'>SHOEFULL</h1>
							<p className='mt-4 text-sm leading-4'>A game where you try to hit as many targets as you can before the time runs out.</p>
							<div className='inline-flex absolute bottom-6 text-xs'>
								<p className='p-[2px] px-1 mr-1 dark:bg-dark-blue/[0.2] dark:text-dark-blue bg-light-blue/[0.2] text-light-blue group-hover:bg-red/[0.2] group-hover:text-red'>Rust</p>
								<p className='p-[2px] px-1 mr-1 dark:bg-dark-blue/[0.2] dark:text-dark-blue bg-light-blue/[0.2] text-light-blue group-hover:bg-red/[0.2] group-hover:text-red'>ggez</p>
							</div>
						</a>
					</div>
				</div>

				<div id='contact' className='mt-10 opacity-0 transition duration-500 delay-[2400ms]'>
					<p className='my-1 text-red font-bold'>CONTACT</p> 
					<hr className='dark:border-gray border-white/[0.15]'></hr>

					<div className='md:mx-20'>
						<p className='mt-10 dark:text-black text-white text-center leading-4'>I&apos;m always open to conversations for new opportunities! Feel free to email me at the address below or say hi on LinkedIn.</p>
						<div className='flex mt-10 place-content-center'>
							<a className='px-3 py-2 mx-1 bg-red rounded-sm font-bold dark:text-light-background text-white text-sm hover:opacity-70 hover:cursor-pointer transition' 
									href='mailto:manraj836@gmail.com?body=Hello%20Manraj%2C%0D%0A' >manraj836@gmail.com</a>
						</div>
					</div>
				</div>

				<footer className='relative mt-16 mx-auto bottom-0 p-5 text-center dark:text-black/[0.4] text-white/[0.4] text-xs'> © 2022 Manraj Gill. All Rights Reserved. </footer>
			</div>
		</div>
	)
}
