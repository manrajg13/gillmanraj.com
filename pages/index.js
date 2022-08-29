import Head from 'next/head'
import Image from 'next/image'
import { FaFolderOpen, FaExternalLinkAlt } from 'react-icons/fa'
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from '../components/model'
import Navbar from '../components/navbar'

export default function Home() {
	return (
		<>
			<Head>
				<title>Manraj Gill</title>
				<meta name='description' content='My website portfolio' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />

			<section className='flex place-content-center w-auto h-[100vh] text-white'>
				<div className='mx-5 h-50 grid grid-cols-1 content-center'>
					<h1 className='text-8xl font-bold'>Manraj Gill</h1>
					<p className='mx-2 mb-5 text-3xl text-gray'>Software Engineer</p>
					<p className='mx-auto mb-5 p-2 w-[100%] text-center font-mono bg-lavender/[0.1] rounded-md'>Currently a Software Developer at BMO</p>
					
					<div className='flex font-mono'>
						<a href='https://www.linkedin.com/in/gill-manraj/' className='mx-1 text-lg'>
							<button className='p-2 hover:underline'>LinkedIn</button>
						</a>
						<a href='https://github.com/manrajg13' className='mx-1 text-lg'>
							<button className='p-2 hover:underline'>GitHub</button>
						</a>
						<a href='' className='mx-1 text-lg'>
							<button className='p-2 hover:underline'>Resume</button>
						</a>
					</div>

				</div>

				<div className='flex w-[480px] h-[400px] my-auto'>
					<Canvas orthographic camera={{ zoom:100, fov:20, near:-20, far:20, position:[-0.5, 0.3, 2]}} >
						<Suspense fallback={null}>
							<OrbitControls maxPolarAngle={Math.PI/2.0} autoRotate={true} />
							<ambientLight color={'#7f7fdb'} intensity={2.5} />
							<directionalLight color={'#ffa1bd'} intensity={0.5} />
							<Model />
						</Suspense>
					</Canvas>
				</div>
			</section>

			<section id='experience' className='flex pt-[100px] place-content-center text-white h-[600px]'>
				<div className='w-[900px] font-mono text-lg'>
					<h1 className='text-3xl'>Experience</h1>
					
					<div className='text-[14px] mt-10 ml-5'>
						<span className='text-lavender text-xl'>City of Windsor </span>
						<span className='text-lg'>| Database Management Co-op</span>
						<p className='text-lg text-gray mb-3'>Jan 2021 - Aug 2021</p>
						
						<div className='bg-lavender/[0.1] ml-10 p-4 rounded-md w-[800px]'>
							<p><span className='text-lavender text-xl'>&#8250;</span> Managed asset data collection of over 200 parks in Windsor</p>
							<p><span className='text-lavender text-xl'>&#8250;</span> Verified and updated over 4000 assets using Citywide Software</p>
							<p><span className='text-lavender text-xl'>&#8250;</span> Regularly performed quality checks on assigned assets in Database</p>
						</div>
					</div>

					<div className='text-[14px] mt-10 ml-5'>
						<span className='text-lavender text-xl'>Bank of Montreal </span>
						<span className='text-lg'>| Software Developer Internship</span>
						<p className='text-lg text-gray mb-3'>Sep 2022 - Dec 2022</p>

						<div className='bg-lavender/[0.1] ml-10 p-4 rounded-md w-[800px]'>
							<p><span className='text-lavender text-xl'>&#8250;</span> I&apos;ll let you know when I find out</p>
						</div>
					</div>
				</div>
			</section>

			<section id='projects' className='flex pt-[100px] place-content-center h-[600px] text-white'>
				<div className='w-[900px] font-mono text-lg'>
					<h1 className='text-3xl'>Projects</h1>

					<div className="grid grid-flow-col place-content-center mt-10">

						<a href='https://github.com/manrajg13/sorting-algorithm-visualizer' className="overflow-hidden p-8 mx-2 bg-lavender/[0.1] w-[260px] h-[280px] shadow-lg hover:text-lavender hover:cursor-pointer">
							<FaFolderOpen className='text-5xl mb-5' />
							<h1 className='text-xl'>Sorting Algorithm Visualizer</h1>
							<p className='mt-2 text-sm text-gray'>A visualization of sorting algorithms with pseudocode tracing</p>
							<p className='mt-10 text-xs text-gray'>Javascript Chart.js</p>
						</a>

						<a href='https://github.com/manrajg13/threejs-voxel' className="overflow-hidden p-8 mx-2 bg-lavender/[0.1] w-[260px] h-[280px] shadow-lg hover:text-lavender hover:cursor-pointer">
							<FaFolderOpen className='text-5xl mb-5' />
							<h1 className='text-xl'>Voxel Render</h1>
							<p className='mt-2 text-sm text-gray'>I decided to make a voxel model using Blender and rendered it with the help of Three.js</p>
							<p className='mt-12 text-xs text-gray'>Javascript Three.js</p>
						</a>

						<a href='https://github.com/manrajg13/shoefull' className="overflow-hidden p-8 mx-2 bg-lavender/[0.1] w-[260px] h-[280px] shadow-lg hover:text-lavender hover:cursor-pointer">
							<FaFolderOpen className='text-5xl mb-5' />
							<h1 className='text-xl'>Shoefull</h1>
							<p className='mt-2 text-sm text-gray'>A 2D game where your objective is to hit as many targets as possible before the time runs out</p>
							<p className='mt-12 text-xs text-gray'>Rust ggez</p>
						</a>
					</div>				
				</div>
			</section>

			<section id='contact' className='flex pt-[100px] place-content-center h-[600px] text-white text-center'>
				<div className='w-[600px] font-mono text-lg'>
					<h1 className='text-3xl'>Contact</h1>

					<p className='mx-auto mb-5 mt-10 p-2 w-[100%] text-sm text-center font-mono bg-lavender/[0.1] rounded-md'>I&apos;m always open to conversations for new opportunities! Feel free to email me at the address below or say hi on LinkedIn.</p>
					<a href="mailto:manraj836@gmail.com?body=Hello%20Manraj%2C%0D%0A" className='text-lg'>
						<button className='p-2 hover:underline'>manraj836@gmail.com</button>
					</a>
				</div>
			</section>

			<footer className='absolute p-5 text-center w-[100vw] text-gray text-xs'> © 2022 Manraj Gill. All Rights Reserved. </footer>
		</>
	)
}
