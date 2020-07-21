import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/home"
import Nav from "./components/Layout/Nav/nav";
import Blogoverview from "./components/Posts/Blogoverview/blogoverview";
import BlogPost from "./components/Posts/Blogpost/blogpost";
import Admin from "./components/Admin/admin";

function App() {
  return (
    <div className="App_container">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" exact component={Blogoverview} />
            <Route path="/Blog/:id" exact component={BlogPost} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

/*

<Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Blog" exact component={Blogoverview} />
            <Route path="/Blog/:id" exact component={BlogPost} />
            <Route path="/admin" component={Admin} />
          </Switch>

*/
