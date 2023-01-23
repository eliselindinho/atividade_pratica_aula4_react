import { useState } from "react";
import RangeComponent from "./components/RangeComponent";

function App() {
  const [show, setShow] = useState(true);

  const myHandleDestroy = () => {
    setShow(false);
  };

  return (
    <div>{show && <RangeComponent onDestroy={() => myHandleDestroy()} />}</div>
  );
}
export default App;
