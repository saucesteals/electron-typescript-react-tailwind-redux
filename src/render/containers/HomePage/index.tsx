import { store } from '@store';
import ReactLogo from '@assets/icons/react.png';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const HomePage = () => {
  const [show, setShow] = useState(true);

  const currentState = useSelector((state) => state);

  return (
    <div className="flex bg-pink-300 h-screen w-screen justify-center items-center p-6 flex-col">
      <h2>Hello from React!</h2>
      <img src={ReactLogo} width="100" />
      <div className="flex flex-row justify-between mt-6 px-6 w-full">
        <button onClick={window.electron.quit}>Close</button>
        <button onClick={window.electron.hide}>Hide</button>
        <button onClick={window.electron.relaunch}>Relaunch</button>
      </div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} your store!
      </button>
      {show ? <pre>{JSON.stringify(currentState)}</pre> : null}
      <button onClick={() => store.dispatch({ type: 'counter/INCREMENT' })}>
        Increment
      </button>
      <button onClick={() => store.dispatch({ type: 'counter/DECREMENT' })}>
        Decrement
      </button>
    </div>
  );
};

export default HomePage;
