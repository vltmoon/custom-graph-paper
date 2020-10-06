import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Rows from './Rows'

const numberOfRows = 20
const numberOfCols = 20

export const PaperContext = React.createContext({})

export default function Paper() {
    const [usedColors, setUsedColors] = useState([])
    const [groupApply, setGroupApply] = useState(false)
    
    const contextValue = {
        numberOfCols,
        numberOfRows,
        setUsedColors,
        groupApply
    }

    return (
        <PaperContext.Provider value={contextValue}>
            <div style={paperContainer}>
                <Rows />
            </div>
            <div>{usedColors}</div>
            <input type='checkbox' id='groupApply' value={groupApply} onClick={() => setGroupApply(!groupApply)}/>
            <label for='groupApply'>Group color apply</label>
        </PaperContext.Provider>
    );
}

const paperContainer = {
    display: 'flex',
    flexFlow: 'column nowrap'
}

Paper.propTypes = {
};
