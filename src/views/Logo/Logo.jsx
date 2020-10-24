import React, { useContext } from 'react';
import PropTypes from 'prop-types';

export default function Logo() {
    return (
    	<div style={header}>
            <div style={grid}>Gri<span style={d}>d</span></div>
            <div style={designer}>esigner</div>
        </div>
	)
}

const grid = {
    fontFamily: 'nnoinoi',
    fontSize: '28px',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const d = {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Beth Ellen',
    fontSize: '28px',
    marginTop: '-7px'
}

const designer = {
    fontSize: '13px',
    fontFamily: 'Beth Ellen',
}

const header = {
    margin: '20px',
    marginTop: '30px',
    width: '80px',
    height: '80px',

    fontSize: '20px',
    lineHeight: '1em',
    textAlign: 'center',

    border: '2px solid black',
    backgroundColor: 'white',
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}
