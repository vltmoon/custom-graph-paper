import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer'
import Logo from '../Logo'
import GetAppIcon from '@material-ui/icons/GetApp';

export default function Sidebar() {
    return (
        <div style={parent}>
            <Logo />
            <GetAppIcon />
            <Footer />
        </div>
    )
}

const parent = {
 	width: '150px',
    height: '100vh',
    position: 'relative',
    backgroundColor: '#ac9600',
    boxShadow: '0px 0px 1px 0px gray',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
}