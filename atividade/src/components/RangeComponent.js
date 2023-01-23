import { useEffect, useState } from "react";
import "./RangeComponent.css";

function RangeComponent(props) {
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
    function verificaValor(valor) {
      if (valor < 0 || valor > 10) {
        props.onDestroy();
      }
    }
    console.log(`Contador atualizado ${valorLeft}`);
    verificaValor(valorLeft);
  }, [valorLeft, props]);

  useEffect(() => {
    function verificaValor(valor) {
      if (valor < 0 || valor > 10) {
        props.onDestroy();
      }
    }

    console.log(`Contador atualizado ${valorRight}`);
    verificaValor(valorRight);
  }, [valorRight, props]);

  useEffect(() => {
    return () => {
      console.log("Range Component Destruído");
    };
  }, []);

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
