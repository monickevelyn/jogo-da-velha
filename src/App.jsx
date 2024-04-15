import Jogo from './components/jogo/Jogo'
import './index.css'

function App() {  
  return (
    <>
    <main 
    style={{ width:"100%", height: "100%", display: "flex", justifyContent:"space-evenly", flexWrap:"nowrap", flexDirection:"column", alignItems:"center", gap:"1em" }}> 
      <h1 style={{ fontSize:"2em", fontWeight:"bold" }}>Jogo da Velha</h1>
      <Jogo />  
    </main>    
    </>
  )
}

export default App