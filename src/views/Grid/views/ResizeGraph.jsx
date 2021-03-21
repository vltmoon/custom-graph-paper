import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash'
import { PaperContext } from '../../../Paper'

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
    const disableBtn = isEqual(graphSize, resize)

    return (
        <div style={parent}>
            <div style={inputs}>
                <div style={initialInput}>
                    <input
                        {...defaultInputProps}
                        value={resize.rows}
                        onChange={changeNumOfRows}
                        style={{marginRight: 5}}
                        />
                    Rows
                </div>
                <div>
                    <input
                        {...defaultInputProps}
                        value={resize.cols}
                        onChange={changeNumOfCols}
                        style={{marginRight: 5}}
                        />
                    Cols
                </div>
            </div>
            <button onClick={resizeGraph} disabled={disableBtn}>resize</button>
        </div>
    );
}

const parent = {
    display: 'flex',
    alignItems: 'center',
    marginRight: 20,
    padding: 20,
    height: 70,
    width: 240,

    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, .2)',
    backgroundColor: '#f7f7f7'

}

const inputs = {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 10
}

const initialInput = {
    marginBottom: 10
}