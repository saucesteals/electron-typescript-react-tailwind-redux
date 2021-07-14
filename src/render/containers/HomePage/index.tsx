import { store } from "@redux/index";
import ReactLogo from "@assets/icons/react.svg";
import { useSelector } from "react-redux";
import { useState } from "react";
import { incrementCounter, decrementCounter } from "@redux/reducers/count";
import { incrementChar, decrementChar } from "@redux/reducers/characters";

const HomePage = () => {
  const [show, setShow] = useState(true);

  const currentState = useSelector((state) => state);

  const increment = () => {
    store.dispatch(incrementChar());
    store.dispatch(incrementCounter(1));
  };

  const decrement = () => {
    store.dispatch(decrementChar(1));
    store.dispatch(decrementCounter());
  };

  return (
    <div
      style={{ fontFamily: "Open Sans" }}
      className="flex flex-col w-screen h-screen bg-black items-center justify-center p-12 text-white"
    >
      <img
        onClick={() => window.electron.openUrl("https://reactjs.org/")}
        src={ReactLogo}
        className="mb-12 cursor-pointer"
        height={69}
        width={69}
      />

      <div className="font-bold mb-4">
        React + Tailwind + Electron + Redux = ♥
      </div>

      <div className="flex flex-row text-pink-300">
        By&nbsp;
        <div
          className="cursor-pointer hover:text-blue-400 hover:underline"
          onClick={() =>
            window.electron.openUrl("https://github.com/saucesteals/")
          }
        >
          <strong>Daniel</strong>
        </div>
        &nbsp;&&nbsp;
        <div
          className="cursor-pointer hover:text-blue-400 hover:underline"
          onClick={() =>
            window.electron.openUrl("https://github.com/fourwadu/")
          }
        >
          <strong>Noah</strong>
        </div>
      </div>

      {show ? (
        <pre className="bg-blue-500 p-4 text-center rounded-md m-5">
          {JSON.stringify(currentState)}
        </pre>
      ) : null}

      <div className="cursor-pointer p-4" onClick={() => setShow(!show)}>
        Click here to {show ? "hide" : "show"} your <strong>Redux</strong> store
      </div>

      <div className="flex flex-row text-pink-300">
        <button className="mr-4" onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <div className="text-pink-300 p-2">
        <button
          onClick={async () => {
            window.electron.openPath(await window.store.getPath());
          }}
        >
          Open Store
        </button>
      </div>

      <div className="flex justify-center w-72">
        <button
          className="mac-red mr-auto w-24 text-right"
          onClick={window.electron.quit}
        >
          Exit / Quit
        </button>
        <button className="mac-orange w-24" onClick={window.electron.minimize}>
          Minimize
        </button>
        <button
          className="mac-green ml-auto w-24 text-left"
          onClick={window.electron.maximize}
        >
          Maximize
        </button>
      </div>
    </div>
  );
};

export default HomePage;
