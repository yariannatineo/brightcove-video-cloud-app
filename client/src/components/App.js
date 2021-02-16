// principal imports
import React, { Component } from 'react';
// react router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//  components
import Menu from './Menu';
import Video from './Video';
import VideoMexico from './VideoMexico';
import Playlist from './Playlist';

class App extends Component {

    render(){
        return(
            <Router>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Video} />                            
                    <Route exact path="/mexico" component={VideoMexico} />                            
                    <Route exact path="/playlist" component={Playlist} />                            
                </Switch>
             </Router>
        );
    }
}

export default App;
