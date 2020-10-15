import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PaperContext } from '../Paper'
import { Column } from './components'
import eraserIcon from '../styles/imgs/eraser.png'

export default function Grid() {
	const { graphSize, eraseEnabled } = useContext(PaperContext)

	const Columns = [...Array(graphSize.cols)].map((el, i) => <Column key={i} />)

	return (
		<div style={{...grid, cursor: eraseEnabled && `url(${eraserIcon}), auto`}}>
		    {[...Array(graphSize.rows)].map((el, i) => (
		        <div style={row} key={i}>
		            {Columns}
		        </div>
		    ))}
	    </div>
	)
}

const grid = {
    display: 'flex',
    flexFlow: 'column nowrap'
}

const row = {
     display: 'flex',
     flexFlow: 'row nowrap'

}