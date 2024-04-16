import Jogo from './components/jogo/Jogo'
import './index.css'

const App = () => {  
  return (
    <>
      <body className='flex flex-nowrap flex-col items-center justify-evenly'>
        <h1 className="text-4xl font-bold">Jogo da Velha</h1>
        <Jogo />
      </body>
    </>
  );
}
export default App