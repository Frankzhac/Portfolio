import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl";

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
          <Layout fixedHeader>
              <Header className="header-color" title={<span><span style={{ color: '#ddd' }}></span><strong>My Portfolio</strong></span>} scroll>
                  <Navigation>
                      <Link to="/about">About</Link>
                      <Link to="/projects">Work</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <Link to="/about">About</Link>
                      <Link to="/projects">Work</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content />
                
          </Layout>
          <Main />
      </div>
    );
  } 
}

export default App;
