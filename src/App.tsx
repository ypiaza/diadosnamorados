import background from '../public/pexels-iriser-1122639.jpg'
import nos1 from '../public/IMG_1637.jpg'
import nos2 from '../public/IMG-20230302-WA0069.jpg'
import nos3 from '../public/IMG_4149.jpg'
import { useState } from 'react'
import { FaHeart } from "react-icons/fa";


const App = () => {
  const [click, setClick] = useState(false)

  return (
    <div className='flex items-center justify-center w-full h-screen overflow-hidden px-2 py-6 bg-center bg-cover bg-no-repeat'
         style={{
          backgroundImage:`url(${background})`
         }}>
      <div className='flex items-center flex-col justify-center gap-5 w-full bg-transparent backdrop-blur border-2 border-t-white/30 border-r-white/30 border-b-white/20 border-l-white/10 rounded-2xl p-10 transition-all '>
        <div className={`grid-cols-2 gap-2 ${click ? 'hidden' : 'grid'}`}>
          <img src={nos1} className='rounded-md border-2 object-cover border-red-600/20 shadow-2xl shadow-red-500/20' />
          <img src={nos2} className='rounded-md border-2 object-cover border-red-600/20 shadow-2xl shadow-red-500/20' />
          <img src={nos3} className='rounded-md border-2 object-cover border-red-600/20 shadow-2xl shadow-red-500/20' />
          <img src={nos1} className='rounded-md border-2 object-cover border-red-600/20 shadow-2xl shadow-red-500/20' />
          <img src={nos2} className='rounded-md border-2 object-cover border-red-600/20 shadow-2xl shadow-red-500/20' />
          <img src={nos3} className='rounded-md border-2 object-cover border-red-600/20 shadow-2xl shadow-red-500/20' />
        </div>
        <div className={`flex-col justify-center gap-2 ${click === false ? 'hidden' : 'flex'}`}>
          <div className={'flex item-center justify-between'} >
            <img src={nos1} className='rounded-xl border object-cover border-white/20' />
          </div>
          <div>
            <h1 className='text-2xl font-bold text-red-600'>Oi, gatinha!</h1>
            <p className='font-medium text-white/80 text-justify'>Fiz isso aqui só para te lembrar nesse dia dos namorados, que você é muito, muito, muito especial. Eu sou muito feliz de ter você todos os dias comigo, você é a prova do amor e cuidado de Deus para mim e é por você que não desisto e quero cada dia ser melhor. Te amo e te quero para sempre e sempre!</p>
          </div>
        </div>
        <button onClick={() => setClick(true)} className={`bg-red-700/60 shadow-2xl shadow-red-500/50 text-white font-bold p-5 rounded-2xl w-full animate-pulse ${click ? 'hidden' : ''}`}>Clique aqui!</button>
        <button onClick={() => setClick(false)} className={`flex items-center justify-center gap-3 bg-red-700/60 shadow-2xl shadow-red-500/50 text-white font-bold p-5 w-full rounded-2xl ${click ? '' : 'hidden'}`}>
TE AMO!
            <FaHeart className='text-red-500 text-xl animate-bounce delay-75' />

</button>
      </div>
    </div>
  )
}

export default App
