import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color'
import Rows from './Rows'

const numberOfRows = 20
const numberOfCols = 20

export const PaperContext = React.createContext({})

export default function Paper() {
    const [usedColors, setUsedColors] = useState([])
    const contextValue = { numberOfCols, numberOfRows, setUsedColors }

    return (
        <PaperContext.Provider value={contextValue}>
            <div style={paperContainer}>
                <Rows />
            </div>
            <div>{usedColors}</div>
        </PaperContext.Provider>
    );
}

const paperContainer = {
    display: 'flex',
    flexFlow: 'column nowrap'
}

Paper.propTypes = {
};
