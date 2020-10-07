import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PaperContext } from './Paper'
import Column from './Column'

export default function Rows() {
	const { graphSize } = useContext(PaperContext)

	const Columns = [...Array(graphSize.cols)].map((el, i) => <Column key={i} />)

    return [...Array(graphSize.rows)].map((el, i) => (
        <div style={Row} key={i}>
            {Columns}
        </div>
    ))
}

const Row = {
     display: 'flex',
     flexFlow: 'row nowrap'

}