import React from "react";
import {Switch,Route}from 'react-router-dom'
import "./styles/Auth.css";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import DetailPost from "./pages/DetailPost";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UpdatePost from "./pages/UpdatePost";
function App() {
  return (
    <div className="App">
      <h1> Franca's Blog</h1>
      <Switch>
            <Route path={'/'} exact={true} component={Home} />
            <Route path={'/login'} exact={true} component={Login} />
            <Route path={'/signup'} exact={true} component={SignUp} />
            <Route path={'/addpost'} exact={true} component={AddPost} />
            <Route path={'/detail-post'} component={DetailPost} />
            <Route path={'/update-post'} exact={true} component={UpdatePost} />
        </Switch>
      
    </div>
  );
}
export default App;
