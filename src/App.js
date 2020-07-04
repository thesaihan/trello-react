import React, { useState, useEffect } from 'react';
import './App.css';
import NavTop from './component/NavTop';
import NavBottom from './component/NavBottom';
import Wrapper from './component/Wrapper';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  const  limitWrapperHeight = () => {
    const body = document.documentElement.clientHeight;
    const nav1 = document.getElementById("first-nav").clientHeight;
    const nav2 = document.getElementById("second-nav").clientHeight;
    const wrapper = document.getElementById("wrapper");
    wrapper.style.maxHeight = (body - nav1 - nav2 - 5) + "px";
    wrapper.style.minHeight = (body - nav1 - nav2 - 5) + "px";
  };

  useEffect(() => {
    limitWrapperHeight();
  }, []);

  return (
    <div className="App">
      <NavTop isLoading={isLoading} />
      <NavBottom />
      <Wrapper setIsLoading={setIsLoading} />
    </div>
  );
}

export default App;
