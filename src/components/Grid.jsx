import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PaperContext } from './Paper'
import Column from './Column'

export default function Grid() {
	const { graphSize } = useContext(PaperContext)

	const Columns = [...Array(graphSize.cols)].map((el, i) => <Column key={i} />)

	return (
		<div style={grid}>
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