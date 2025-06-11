import background from '../public/15375094-uhd_3840_2160_30fps.mp4'
import nos1 from '../public/IMG_1637.jpg'
import nos2 from '../public/IMG-20230302-WA0069.jpg'
import nos3 from '../public/IMG_4149.jpg'
import { useState } from 'react'
import { FaHeart } from "react-icons/fa";


const App = () => {
  const [click, setClick] = useState(false)

  return (
    <div className='relative flex items-center justify-center w-full h-screen overflow-hidden px-10 py-18'>
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover -z-10">
        <source src={background} type="video/mp4" />
      </video>
      <div className='flex items-center flex-col justify-evenly w-full h-full bg-white/30 backdrop-blur border border-white/20 rounded-2xl py-2 px-8 transition-all '>
        <div className={`flex-col gap-2 ${click ? 'hidden' : 'flex'}`}>
          <img src={nos1} className='rounded-md border border-white/20' />
          <img src={nos2} className='rounded-md border border-white/20' />
          <img src={nos3} className='rounded-md border border-white/20' />
        </div>
        <div className={`flex-col gap-5 ${click === false ? 'hidden' : 'flex'}`}>

          <h1 className='text-4xl font-bold text-red-700/60'>Oi, gatinha!</h1>
          <p className='text-xl font-medium text-black/80 text-justify'>Fiz isso aqui só para te lembrar nesse dia dos namorados, que você é muito, muito, muito especial. Eu sou muito feliz de ter você todos os dias comigo, você é a prova do amor e cuidado de Deus para mim e é por você que não desisto e quero cada dia ser melhor. Te amo e te quero para sempre e sempre!</p>
          <div className='flex items-center justify-center mt-12 gap-5 transition-all'>
            <FaHeart className='text-red-500 text-3xl animate-bounce delay-75' />
            <FaHeart className='text-red-500 text-3xl animate-bounce delay-100'/>
            <FaHeart className='text-red-500 text-3xl animate-bounce delay-75'/>
            <FaHeart className='text-red-500 text-3xl animate-bounce delay-100'/>
            <FaHeart className='text-red-500 text-3xl animate-bounce delay-75'/>
            <FaHeart className='text-red-500 text-3xl animate-bounce delay-100'/>
          </div>
        </div>
        <button onClick={() => setClick(true)} className={`bg-blue-700/60 shadow-2xl shadow-blue-500/50 text-white text-2xl font-bold p-5 rounded-2xl ${click ? 'hidden' : ''}`}>Clique aqui!</button>
        <button onClick={() => setClick(false)} className={`bg-red-700/60 shadow-2xl shadow-red-500/50 text-white text-2xl font-bold p-5 rounded-2xl ${click ? '' : 'hidden'}`}>
TE AMO!</button>
      </div>
    </div>
  )
}

export default App
