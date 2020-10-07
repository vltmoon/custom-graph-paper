import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { PaperContext } from './Paper'


const confirmationText = 'Are you sure you want to change this graph?\nYou might lose some your current work.'

export default function ResizeGraph() {
    const { graphSize, setGraphSize } = useContext(PaperContext)
    const [resize, setResize] = useState(graphSize)

    const resizeGraph = () => {
        const confirmation = window.confirm(confirmationText)
        
        if (confirmation) {
            setGraphSize(resize)
        }
    }

    const changeNumOfRows = (e) => {
        setResize({...resize, rows: parseInt(e.target.value)})
    }

    const changeNumOfCols = (e) => {
        setResize({...resize, cols: parseInt(e.target.value)})
    }

    const defaultInputProps = { type: 'number', min:'1', max: '100' }

    return (
        <div style={{}}>
            <input
                {...defaultInputProps}
                value={resize.rows}
                onChange={changeNumOfRows}/>
                Rows
            <input
                {...defaultInputProps}
                value={resize.cols}
                onChange={changeNumOfCols}/>
                Cols
            <button onClick={resizeGraph}>resize my paper</button>
        </div>
    );
}
