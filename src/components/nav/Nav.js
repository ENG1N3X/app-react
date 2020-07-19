import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Nav.sass";
import logo from "../../static/logo.svg";

import Home from "../../routes/Home";
import About from "../../routes/About";
import Gallery from "../../routes/Gallery";

function Nav() {
 return (
  <Router>
   <section className="container navigation">
    <div className="row align-items-center">
     <div className="col-10">
      <nav className="nav">
       <Link to="/routes/Home" className="nav-link">
        Home
       </Link>
       <Link to="/routes/About" className="nav-link">
        About
       </Link>
       <Link to="/routes/Gallery" className="nav-link">
        Gallery
       </Link>
      </nav>
     </div>
     <div className="col-2 text-right">
      <div className="logo__img">
       <img src={logo} alt="logo" />
      </div>
     </div>
    </div>
   </section>
   <Switch>
    <Route path="/routes/Home">
     <Home />
    </Route>
    <Route path="/routes/About">
     <About />
    </Route>
    <Route path="/routes/Gallery">
     <Gallery />
    </Route>
   </Switch>
  </Router>
 );
}

export default Nav;
