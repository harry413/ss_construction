import React from "react";

import './app.css';
import {Article, Navbar, People } from './components/index';
import { Header, Footer,WhatWeBuild } from './container/index';
function App(){
   
    return(
        <div>
            <div className="main_bg" >
                <Navbar/>
                <Header/>
                <Article/>
                <People/>
                <WhatWeBuild/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;