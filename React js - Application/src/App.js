import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Link, Outlet, Route,Routes, useLocation} from "react-router-dom";
import Exercise1 from "./exercises/exercise1";
import Exercise2 from './exercises/exercise2/Exercise2';
import Exercise3 from './exercises/exercise3/components/Exercise3';
import Exercise4 from './exercises/exercise4/Exercise4';
import Exercise5 from './exercises/exercise5';
import Exercise6 from './exercises/exercise6/components/Exercise6';
import Exercise7 from './exercises/exercise7';
import Exercise8 from './exercises/exercise8/components/Exercise8';

function App() {
  return (
    <div>
      <Routes>
           <Route path="/" element={ <Layout />}>
              <Route index path="/exercises/exercise1" element={ <Exercise1 />} />
              <Route path="/exercises/exercise2" element={ <Exercise2/> } />
              <Route path="/exercises/exercise3" element={ <Exercise3/>} />
              <Route path="/exercises/exercise4" element={ <Exercise4/> } />
              <Route path="/exercises/exercise5" element={ <Exercise5/>} />
              <Route path="/exercises/exercise6" element={ <Exercise6/>} />
              <Route path="/exercises/exercise7" element={ <Exercise7/>} />
              <Route path="/exercises/exercise8" element={ <Exercise8/>} />
           </Route>
      </Routes>
    </div>
  )
}

function Layout() {

  const location = useLocation();

  const activeCls = 'currently-active';

  return (
    <div>
      <nav>
        <ul className='navbaritems'>
          <li className={`${location.pathname === "/" ? activeCls: "" }`}> <Link to = "/">Home</Link></li>
          <li className={`${location.pathname === "/exercises/exercise1" ? activeCls: "" }`}> <Link to = "/exercises/exercise1">Exercise 1</Link></li>
          <li className={`${location.pathname === "/exercises/exercise2" ? activeCls: "" }`}> <Link to = "/exercises/exercise2">Exercise 2</Link></li>
          <li className={`${location.pathname === "/exercises/exercise3" ? activeCls: "" }`}> <Link to = "/exercises/exercise3">Exercise 3</Link></li>
          <li className={`${location.pathname === "/exercises/exercise4" ? activeCls: "" }`}> <Link to = "/exercises/exercise4">Exercise 4</Link></li>
          <li className={`${location.pathname === "/exercises/exercise5" ? activeCls: "" }`}> <Link to = "/exercises/exercise5">Exercise 5</Link></li>
          <li className={`${location.pathname === "/exercises/exercise6" ? activeCls: "" }`}> <Link to = "/exercises/exercise6">Exercise 6</Link></li>
          <li className={`${location.pathname === "/exercises/exercise7" ? activeCls: "" }`}> <Link to = "/exercises/exercise7">Exercise 7</Link></li>
          <li className={`${location.pathname === "/exercises/exercise8" ? activeCls: "" }`}> <Link to = "/exercises/exercise8">Exercise 8</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );

}

export default App;
