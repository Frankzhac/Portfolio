import React from 'react';
import LandingPage from './LandingPage';
import Resume from './Resume';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />       
    </Switch>
)

export default Main;