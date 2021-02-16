// principal imports
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        //  Menu
        <div className="ui purple inverted menu">
            <div className="ui container">
            <h3 className="item">
                Video Cloud
            </h3>
            <Link className="item" to="/">Videos</Link>
            <Link className="item" to="/mexico">Tag Mexico</Link>
            <Link className="item" to="/playlist">Playlists</Link>
            </div>
        </div>
    );

}
// exports
export default Menu;
