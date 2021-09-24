import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <div className='navbar-border'></div>
                <span >Habit Tracker</span>
                <div className="navbar-count">{this.props.totalCount}</div>{/* //props로 전달받은 totalCount 전달해줘! -> app.js에서 navbar에 실제로 전달해줘야해!!! */}
            </nav>
        );
    }
}

export default Navbar;