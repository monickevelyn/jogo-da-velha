import { useState } from "react";
import VerificaVencedor from "../../logic/VerificaVencendor";
import Button from "../button/Button"

const Jogo =() => {
    const [isX, setIsX] = useState(true);
    const [btn, setBtn] = useState(Array(9).fill(null));
  
    const clickButton = (i) => {
      // se já existe um valor (X/O) então ele continuará.
      if (btn[i] || VerificaVencedor(btn)) {
        return;
      }
  
      const botoes = btn.slice();
  
      // X ou O
      if (isX) {
        botoes[i] = "X";
      } else {
        botoes[i] = "O";
      }
  
      setBtn(botoes);
      setIsX(!isX);
    }
  
    const vencendor = VerificaVencedor(btn);
    let status;
    if (vencendor) {
      status = "Vencendor: " + vencendor;
    } else {
      status = "Sua vez: " + (isX ? "X" : "O");
    }
  
    const Zerar = () => {
      let zerar = btn.map(() => {
        btn.value = " ";
      });
      setBtn(zerar);
    }
  
    return (
      <>
      <div>
        <div className="flex items-center gap-2 pb-2">
            <Button value={btn[0]} onClick={() => clickButton(0)} />
            <Button value={btn[1]} onClick={() => clickButton(1)} />
            <Button value={btn[2]} onClick={() => clickButton(2)} />
        </div>
        <div className="flex items-center gap-2  pb-2">
            <Button value={btn[3]} onClick={() => clickButton(3)} />
            <Button value={btn[4]} onClick={() => clickButton(4)} />
            <Button value={btn[5]} onClick={() => clickButton(5)} />
        </div>
        <div className="flex items-center gap-2  pb-2">
            <Button value={btn[6]} onClick={() => clickButton(6)} />
            <Button value={btn[7]} onClick={() => clickButton(7)} />
            <Button value={btn[8]} onClick={() => clickButton(8)} />
        </div>
      </div>
          
      <div className="font-bold text-xl">{status}</div>
  
      <button onClick={Zerar} className="w-24 p-2 rounded-sm">Zerar</button>
      </>
    );
}
export default Jogo;