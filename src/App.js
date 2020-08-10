import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //piece of code runs on a specific condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log(user);

  return (
    <Router>
      <Switch>
        <Route path="/thankyou">
          <Header />
          <h1>Thank You</h1>
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
