import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';




class Projects extends Component {
    constructor(props) {
        super(props) 
        this.state = { activeTab: 1};   
    }

    render() {
        return (
           <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Front-End</Tab>
                    <Tab>Back-End</Tab>
                </Tabs>
                <section>
                    <div className="content">Content for the tab: {this.state.activeTab}</div>
                </section>
            </div>   
        )
    }
}


export default Projects;