import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import PostDetails from "./components/PostDetails";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("profile")) {
      setUser(JSON.parse(localStorage.getItem("profile")));
    } else {
      setUser(null);
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            component={() => user && <Redirect to="/posts" />}
          />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
