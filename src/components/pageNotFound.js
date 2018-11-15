import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import Image from '../images/oops.jpg'

class PageNotFound extends Component {
    render() {
        return (
            <main>
                <div className="row orderMessageRow marginZero">
                    <div className="container">
                        <div className="col s12">
                            <div className="center-align">
                                <img src={Image} alt="Page Not Found" />
                            </div>
                            <div className="center-align">
                                <Link to="" className="btn waves-effect waves-light deep-purple darken-2 hoverable" style={{ marginTop: "20px" }}>go to homepage</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default PageNotFound;