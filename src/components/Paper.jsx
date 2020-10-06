import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color'
import Rows from './Rows'

const numberOfRows = 20
const numberOfCols = 20

export const PaperContext = React.createContext({})

export default function Paper() {

    const [usedColors, setUsedColors] = useState([])
    const [colorPickerOpen, toggleColorPicker] = useState(false)
    const [groupApply, setGroupApply] = useState({ color: '#fff', enable: false })

    
    const contextValue = {
        numberOfCols,
        numberOfRows,
        setUsedColors,
        groupApply
    }

    const enableGroupApply = () => {
        setGroupApply({...groupApply, enable: !groupApply.enable })
    }

    const setGroupApplyColor = (color) => {
        setGroupApply({...groupApply, color })
    }

    return (
        <PaperContext.Provider value={contextValue}>
            <div style={paperContainer}>
                <Rows />
            </div>
            
            <div>{usedColors}</div>
            
            {/* Bulk apply colors to grid without having to toggle each item */}
            <input type='checkbox' id='groupApply' value={groupApply} onClick={enableGroupApply}/>
            <label for='groupApply'>Group color apply</label>


            <button onClick={() => toggleColorPicker(!colorPickerOpen)}>select group color</button>
            {colorPickerOpen && (
                <ChromePicker color={groupApply.color} onChange={setGroupApplyColor} />
            )}
        </PaperContext.Provider>
    );
}

const paperContainer = {
    display: 'flex',
    flexFlow: 'column nowrap'
}

Paper.propTypes = {
};
