import React, { Component } from 'react';
import { BrowserRouter , Route, Link } from "react-router-dom";
import home from './home';
import admin from './admin';

export default ()=>(
    <BrowserRouter>
    <div>
    <Route path ="/" exact component={home}/>
    <Route path ="/admin" exact component={admin}/>
    </div>
    </BrowserRouter>
)