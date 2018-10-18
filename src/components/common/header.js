/**
 * Created by adrian on 27/08/2018.
 */
import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <PageHeader>
                {this.props.text}
            </PageHeader>

        );
    }
}

export default Header;