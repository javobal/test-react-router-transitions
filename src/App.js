import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route render={({ location }) => (
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} timeout={1000} classNames='fade'>
            <Switch location={location}>
              <Route path="/" exact component={Index} />
              <Route path="/about/" component={About} />
              <Route path="/users/" component={Users} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        )} />
      </div>
    </Router>
  );
}

function Index() {
  return <div className="page" style={{ background: 'white'}}>Home</div>;
}

function About() {
  return <div className="page" style={{ background: 'red'}}>About</div>;
}

function Users() {
  return <div className="page" style={{ background: 'blue'}}>Users</div>;
}

function Header() {
  return (
    <ul className="header">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  );
}
