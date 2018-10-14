import React, { Component } from 'react';
import Link from 'next/link';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div class="container">
                    <Link href="/">
                        <a class="navbar-brand">React App</a>
                    </Link>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link href="/trending">
                                    <a class="nav-link">Trending</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/about">
                                    <a class="nav-link">About</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
