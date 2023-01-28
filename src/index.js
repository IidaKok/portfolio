import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'animate.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <React.StrictMode>

<Router> 
<Routes>
 <Route path="/" element={<App />}> 
<Route exact path="/portfolio" element={<Home />} />
 <Route exact path="/portfolio/about" element={<About />} />
<Route exact path="/portfolio/projects" element={<Projects />} />
<Route exact path="/portfolio/contact" element={<Contact />} />

 </Route> 
</Routes> 
</Router>

  </React.StrictMode>,
  document.getElementById('root')
);
