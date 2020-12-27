import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <i className ="navbar-logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                {/* //props로 전달받은 totalCount 전달해줘! -> app.js에서 navbar에 실제로 전달해줘야해!!! */}
                <span className ="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;