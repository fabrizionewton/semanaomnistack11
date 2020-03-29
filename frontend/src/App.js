import React, {useState}from 'react';

import './global.css';

import Routes from './routes.js';

function App() {
  return(
    <Routes/>
  );
}

export default App;

/**
 *  <Header title="Vai"/>
 * ************************************** 
 * export default function Header(props){
 *     return(
 *         <header>
 *             <h1>{props.title}</h1>
 *         </header>
 *     );
 *  }
 * **************************************
 * 
 * 
 *  <Header>
 *     Vai
 *  </Header>
 * ************************************** 
 * export default function Header(props){
 *     return(
 *         <header>
 *             <h1>{props.children}</h1>
 *         </header>
 *     );
 *  }
 * **************************************
 * 
 * //useState - Array [valor,funcaoDeAtualizacao]
 * const [counter, setCounter] = useState(0);
 *
 *  function increment(){
 *    setCounter(counter+1)
 * }
 *
 *  return (
 *    <div>
 *      <Header>
 *        Contador: {counter}
 *        
 *     </Header>
 *      <button onClick={increment}>Adicionar</button>
 *    </div>
 *  );
 * 
 * 
 * 
 * 
 * 
 * 
 */