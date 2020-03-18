import React, {Component}  from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions';

import Header from "./Header";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import FeedBack from "./Feedback";

class App extends Component{
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/"  component={Landing} />
                        <Route exact path="/feedback"  component={Dashboard} />
                        <Route path="/feedback/new"  component={FeedBack} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);