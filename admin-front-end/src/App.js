import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/home"
import Nav from "./components/Layout/Nav/nav";
import Blogoverview from "./components/ManagePosts/Blogoverview/blogoverview";
import BlogPost from "./components/ManagePosts/Blogpost/blogpost";
import Admin from "./components/Admin/admin";
import Createpost from "./components/CreatePosts/createpost"
import Blogpostedit from "./components/ManagePosts/Blogpost/Blogpostedit/blogpostedit"

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" exact component={Blogoverview} />
            <Route path="/createpost" exact component={Createpost} />
            <Route path="/Blog/:id" exact component={BlogPost} />
            <Route path="/admin" component={Admin} />
            <Route path="/Blog/:id/edit"component={Blogpostedit} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
