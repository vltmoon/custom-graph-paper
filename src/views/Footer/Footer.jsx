import React, { useContext } from 'react';
import PropTypes from 'prop-types';

export default function Footer() {

    return (
    	<div style={parent}>
    		<div style={content}>
	           <a target="_blank" href="https://icons8.com/icons/set/erase">Erase icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
           	</div>
       </div>
	)
}

const parent = {
 	position: 'absolute',
    width: '100%',
    bottom: 0,
    color: 'white',
    fontFamily: 'Commissioner',
}

const content = {
	fontSize: '11px',
	padding: '20px',
}	