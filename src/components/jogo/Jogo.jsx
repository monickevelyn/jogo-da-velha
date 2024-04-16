import { useState } from "react";
import VerificaVencedor from "../../logic/VerificaVencendor";
import Button from "../button/Button"
import Status from "../status/Status";

const Jogo =() => {
    const [isX, setIsX] = useState(true);
    const [btn, setBtn] = useState(Array(9).fill(null));
    const vencendor = VerificaVencedor(btn);
  
    const clickButton = (i) => {
      if (btn[i] || VerificaVencedor(btn)) {
        return;
      }  
      const buttons = btn.slice();
      isX ? buttons[i] = "X" : buttons[i] = "O";  
      setBtn(buttons);
      setIsX(!isX);
    }   
  
    const Zerar = () => {
      let zerar = btn.map(() => { btn.value = " " });
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

        <div>
          {vencendor ? (
            <Status
              status={"Vencendor: " + vencendor}
              className="text-green-400 font-bold text-xl"
            />
          ) : (
            <Status
              status={"Sua vez: " + (isX ? "X" : "O")}
              className="font-bold text-xl"
            />
          )}
        </div>

        <button onClick={Zerar} className="w-24 h-10 p-1 rounded-md border-2">
          Zerar
        </button>
      </>
    );
}
export default Jogo;