import './App.css'
import Home from './components/Home'


function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-bold text-5xl text-gray-800 mb-2'>AI Image Enhancer</h1>
        <p className='text-gray-500 text-lg '> AI enhanced image within seconds</p>
      </div>

      <Home/>

      <div className='text-sm mt-6 text-gray-500'>
         Made By @Kartikey
      </div>
    </div>
  )
}

export default App
