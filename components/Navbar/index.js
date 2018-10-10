import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <nav>
                <div>
                    <button>NEXT JS APP</button>
                </div>
            </nav>
        );
    }
}

export default Navbar;
