import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home/home"
import Nav from "./components/layout/Nav/nav";
import Blogoverview from "./components/Blog/Blogoverview/blogoverview";
import BlogPost from './components/Blog/Blogpost/blogpost'
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/Blog" exact component={Blogoverview} />
            <Route path="/Blog/:id" exact component={BlogPost} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

/*


const [users, setUsers] = useState([]);
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/blog/user", {
        mode: "cors",
        method: "GET",
      });
      const data = await response.json();
      setUsers(data.users_list);
    }
    fetchData();
  }, []);




  <div>Front-End Reader hellothere</div>
      <div>
        {users.map((user) => (
          <div key={user._id}>{user.first_name}</div>
        ))}
      </div>
    



*/
