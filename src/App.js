import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from "react-router-dom";
import Pagemain from './Pages/Pagemain/Pagemain';
import Chat from './Pages/Chat/Chat';

function App() {
  return (
    <>
     <BrowserRouter>
      <Pagemain />
    </BrowserRouter>
    
    </>
  )
}

export default App