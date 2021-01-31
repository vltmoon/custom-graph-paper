import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PaperContext } from '../../Paper'
import { Column } from './components'
import eraserIcon from '../../styles/imgs/eraser.png'

export default function Grid() {
	const { graphSize, eraseEnabled } = useContext(PaperContext)

	const Columns = [...Array(graphSize.cols)].map((el, i) => <Column key={i} />)
	const cursor = eraseEnabled && `url(${eraserIcon}), auto`

	return (
		<div style={container}>
			<div style={{cursor}}>
			    {[...Array(graphSize.rows)].map((el, i) => (
			        <div style={row} key={i}>
			            {Columns}
			        </div>
			    ))}
		    </div>
	    </div>
	)
}

const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 800,
    height: 250,

    cursor: 'pointer',
    overflow: 'scroll',
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, .2)',
    marginTop: 20,
    fontSize: 13,	
}

const row = {
    display: 'flex',
    flexFlow: 'row nowrap',
	width: '100%',
}