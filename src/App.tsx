import { useEffect, useRef, useState } from 'react'
import Space from './components/space'
import './index.css'

function App() {

	const [image, setImage] = useState('chromatic_cascade')

	return (
		<div className="h-[100vh] overflow-hidden relative">
			<SideBar setImage={setImage} image={image} />
			{window.innerWidth > 450 ?
				<div className="absolute z-20 bottom-2 right-2 cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/pranavsindhanuru/', '_blank')}>
					<div className="py-2 px-4 bg-white/[0.5] backdrop-blur-[8px] rounded border">Made with ❤ by <span className="font-semibold">Pranav</span></div>
				</div>
				:
				<div className="absolute z-20 bottom-1 right-1 cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/pranavsindhanuru/', '_blank')}>
					<div className="py-1 px-4 bg-white/[0.5] backdrop-blur-[8px] rounded border text-sm">Made with ❤ by <span className="font-semibold">Pranav</span></div>
				</div>
			}
			<Space image={image} />
		</div>
	)
}

function SideBar({ setImage, image }: any) {

	const [expand, setExpand] = useState(false)
	const ref = useRef<any>(null);

	useEffect(() => {
		function handleClickOutside(event: any) {
			if (ref.current && !ref.current.contains(event.target)) {
				setExpand(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return (
		<div className={`absolute h-full flex z-10 text-black ${window.innerWidth > 450 ? 'items-center' : ''}`}>
			{window.innerWidth > 450 ?
				<>
					<div className={`transition-all h-full p-2 ${expand ? 'scale-x-0 opacity-0' : 'scale-x-1'}`}>
						<div className="p-5 bg-white/[0.5] backdrop-blur-[8px] rounded border cursor-pointer" onClick={() => setExpand(true)}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>
						</div>
					</div>
					<div ref={ref} className={`transition-all p-2 -ml-[75px] bg-white/[0.5] backdrop-blur-[8px] h-[98%] rounded border ${expand ? 'scale-x-1' : 'scale-x-0 opacity-0'}`}>
						<div className="flex items-center h-[50px] p-2">
							<img src="/logo.svg" alt="" className="h-[30px]" />
							<div className="ml-5 text-lg font-bold">Kaleidoscope</div>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:scale-[1.1] cursor-pointer ml-10" onClick={() => setExpand(false)}>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
							</svg>
						</div>
						<div className="border-t border-black/[0.5]"></div>
						<div className="text-md p-1 flex flex-col gap-1 font-semibold">
							<div className={`p-3 pr-5 rounded hover:bg-white/[0.7] cursor-pointer ${image === 'chromatic_cascade' ? 'bg-white/[0.7]' : ''}`} onClick={() => setImage('chromatic_cascade')}>Chromatic Cascade</div>
							<div className={`p-3 pr-5 rounded hover:bg-white/[0.7] cursor-pointer ${image === 'chromatic_fusion' ? 'bg-white/[0.7]' : ''}`} onClick={() => setImage('chromatic_fusion')}>Chromatic Fusion</div>
							<div className={`p-3 pr-5 rounded hover:bg-white/[0.7] cursor-pointer ${image === 'crimson_riptide' ? 'bg-white/[0.7]' : ''}`} onClick={() => setImage('crimson_riptide')}>Crimson Riptide</div>
							<div className={`p-3 pr-5 rounded hover:bg-white/[0.7] cursor-pointer ${image === 'molten_swirl' ? 'bg-white/[0.7]' : ''}`} onClick={() => setImage('molten_swirl')}>Molten Swirl</div>
							<div className={`p-3 pr-5 rounded hover:bg-white/[0.7] cursor-pointer ${image === 'shimmering_strands' ? 'bg-white/[0.7]' : ''}`} onClick={() => setImage('shimmering_strands')}>Shimmering Strands</div>
							<div className={`p-3 pr-5 rounded hover:bg-white/[0.7] cursor-pointer ${image === 'tidal_gradient' ? 'bg-white/[0.7]' : ''}`} onClick={() => setImage('tidal_gradient')}>Tidal Gradient</div>
						</div>
					</div>
				</>
				:
				<>
					<div className={`transition-all h-full p-2 ${expand ? 'scale-x-0 opacity-0' : 'scale-x-1'}`}>
						<div className="p-5 bg-white/[0.5] backdrop-blur-[8px] rounded border cursor-pointer" onClick={() => setExpand(true)}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>
						</div>
					</div>
					<div ref={ref} className={`transition-all p-2 -ml-[75px] bg-white/[0.5] backdrop-blur-[8px] mt-1 h-fit rounded border ${expand ? 'scale-x-1' : 'scale-x-0 opacity-0'}`} style={{ width: window.innerWidth - 15 }}>
						<div className="flex items-center h-[50px] w-full justify-between p-2">
							<div className="flex items-center">
								<img src="/logo.svg" alt="" className="h-[30px]" />
								<div className="ml-5 font-bold">Kaleidoscope</div>
							</div>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:scale-[1.1] cursor-pointer ml-10" onClick={() => setExpand(false)}>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
							</svg>
						</div>
						<div className="border-t border-black/[0.5]"></div>
						<div className="text-sm p-1 flex flex-col gap-1 font-semibold">
							<div className={`p-2 pr-5 rounded hover:bg-white/[0.7] cursor-pointer ${image === 'chromatic_cascade' ? 'bg-white/[0.7]' : ''}`} onClick={() => setImage('chromatic_cascade')}>Chromatic Cascade</div>
							<div className={`p-2 pr-5 rounded hover:bg-white/[0.7] cursor-pointer ${image === 'chromatic_fusion' ? 'bg-white/[0.7]' : ''}`} onClick={() => setImage('chromatic_fusion')}>Chromatic Fusion</div>
							<div className={`p-2 pr-5 rounded hover:bg-white/[0.7] cursor-pointer ${image === 'crimson_riptide' ? 'bg-white/[0.7]' : ''}`} onClick={() => setImage('crimson_riptide')}>Crimson Riptide</div>
							<div className={`p-2 pr-5 rounded hover:bg-white/[0.7] cursor-pointer ${image === 'molten_swirl' ? 'bg-white/[0.7]' : ''}`} onClick={() => setImage('molten_swirl')}>Molten Swirl</div>
							<div className={`p-2 pr-5 rounded hover:bg-white/[0.7] cursor-pointer ${image === 'shimmering_strands' ? 'bg-white/[0.7]' : ''}`} onClick={() => setImage('shimmering_strands')}>Shimmering Strands</div>
							<div className={`p-2 pr-5 rounded hover:bg-white/[0.7] cursor-pointer ${image === 'tidal_gradient' ? 'bg-white/[0.7]' : ''}`} onClick={() => setImage('tidal_gradient')}>Tidal Gradient</div>
						</div>
					</div>
				</>
			}
		</div>
	)
}

// ❤ 

export default App
