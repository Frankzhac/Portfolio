import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from '../images/logo.png';



class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={logo}
                            alt="logo"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>

                            <hr/>

                            <p>JavaScript | React | Bootstrap | HTML/LESS | NodeJS | Express | SQLite | PHP | MongoDB | Python</p>

                            <div className="social-links">
                                
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/frank-hemle-bb18a871/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/Frankzhac" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true" />
                                </a>

                                {/* Twitter */}
                                <a href="https://twitter.com/undefined_FH?s=03" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square"  aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Landing;