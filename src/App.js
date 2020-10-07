import React from 'react';
import { Paper } from './components'

export default function App() {
    return (
    	<div style={appContainer}>
	    	<Paper/>
    	</div>
	);
}

const appContainer = {
    display: 'flex'
}