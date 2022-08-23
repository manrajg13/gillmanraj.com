import Head from 'next/head'
import Image from 'next/image'
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from '../components/model'
import { FaGithub, FaEnvelope, FaLinkedin, FaFileAlt } from 'react-icons/fa'

export default function Home() {
	const [light, setLight] = useState(true);
	return (
		<div>
			<Head>
				<title>Manraj Gill</title>
				<meta name='description' content='My website portfolio' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='w-[1000px] flex place-content-center mx-auto'>
				
				<div className='mx-5 h-50 grid grid-cols-1 content-center'>
					<h1 className='text-8xl font-semibold'>
						Manraj Gill
					</h1>
					<p className='mx-2 mb-10 text-3xl'>Software Engineer</p>
					<p className='mb-5 p-2 text-[15px] text-center font-mono bg-white/[0.08] rounded-md'>Currently working as an intern at BMO</p>
					
					<div className='flex w-[70%] justify-evenly place-self-center'>
						<a href='https://www.linkedin.com/in/gill-manraj/' className='mx-2 text-lg'>
							<button className='p-3 hover:bg-lavender/[0.5]'>LinkedIn</button>
						</a>
						<a href='https://github.com/manrajg13' className='mx-2 text-lg'>
							<button className='p-3 hover:bg-lavender/[0.5]'>GitHub</button>
						</a>
						<a href='' className='mx-2 text-lg'>
							<button className='p-3 hover:bg-lavender/[0.5]'>Resume</button>
						</a>
						<a href="mailto:manraj836@gmail.com?body=Hello%20Manraj%2C%0D%0A" className='mx-2 text-lg'>
							<button className='p-3 hover:bg-lavender/[0.5]'>E-mail</button>
						</a>
					</div>
				</div>

				<div className='w-[500px] h-[600px]'>
					<Canvas orthographic camera={{ zoom:100, near:-20, far:20, position: [-0.5, 0.3, 2]}} >
						<Suspense fallback={null}>
							<OrbitControls maxPolarAngle={Math.PI/2.0} autoRotate={true} />
							<ambientLight color={'#7f7fdb'} intensity={2.5} />
							<directionalLight color={'#ffa1bd'} intensity={0.5} />
							<Model />
						</Suspense>
					</Canvas>
				</div>
			</div>
		</div>
	)
}
