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
              <Header title={<span><span style={{ color: '#ddd' }}></span><strong>My Portfolio</strong></span>}>
                  <Navigation>
                      <a href="/">Resume</a>
                      <a href="/">Link</a>
                      <a href="/">Link</a>
                      <a href="/">Link</a>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <a href="/">Link</a>
                      <a href="/">Link</a>
                      <a href="/">Link</a>
                      <a href="/">Link</a>
                  </Navigation>
              </Drawer>
              <Content />
                <Main />
          </Layout>
      </div>
    );
  } 
}

export default App;
