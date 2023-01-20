import { useEffect, useState } from "react";
import "./RangeComponent.css";

function RangeComponent() {
  const [valorLeft, setValorLeft] = useState(0);
  const [valorRight, setValorRight] = useState(0);

  function diminuiValorLeft() {
    setValorLeft(valorLeft - 1);
  }
  function aumentaValorLeft() {
    if (valorLeft === valorRight) {
      return alert(`Valor do botão left não pode ser maior que ${valorRight}`);
    }
    setValorLeft(valorLeft + 1);
  }

  function diminuiValorRight() {
    if (valorRight === valorLeft) {
      return alert(`Valor do botão right não pode ser menor que ${valorLeft}`);
    }
    setValorRight(valorRight - 1);
  }
  function aumentaValorRight() {
    setValorRight(valorRight + 1);
  }

  useEffect(() => {
    console.log(`Contador atualizado ${valorLeft}`);
  }, [valorLeft]);

  useEffect(() => {
    console.log(`Contador atualizado ${valorRight}`);
  }, [valorRight]);

  useEffect(() => {
    return () => console.log("Aqui é quando o componente será desmontado!");
  }, [valorLeft < 0]);

  useEffect(() => {
    return () => console.log("Aqui é quando o componente será desmontado!");
  }, [valorLeft > 10]);

  useEffect(() => {
    return () => console.log("Aqui é quando o componente será desmontado!");
  }, [valorRight < 0]);

  useEffect(() => {
    return () => console.log("Aqui é quando o componente será desmontado!");
  }, [valorRight > 10]);

  return (
    <div className="container">
      <div>
        <button onClick={diminuiValorLeft}>-</button>
        <div className="boxAzul">
          Left <span>{valorLeft}</span>
        </div>
        <button onClick={aumentaValorLeft}>+</button>
      </div>
      <div>
        <button onClick={diminuiValorRight}>-</button>
        <div className="boxAzul">
          Right <span>{valorRight}</span>
        </div>
        <button onClick={aumentaValorRight}>+</button>
      </div>
    </div>
  );
}

export default RangeComponent;
