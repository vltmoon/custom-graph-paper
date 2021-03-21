import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { PaperContext } from '../../Paper'
import Toggle from '../Toggle'
import ColorPicker from '../ColorPicker'

export default function BulkColor() {
    const { bulkColor, setBulk } = useContext(PaperContext)
    const [colorPickerOpen, toggleColorPicker] = useState(false)

    const enableGroupApply = () => {
        setBulk({...bulkColor, enable: !bulkColor.enable })
    }

    const setBulkColor = (color) => {
        setBulk({...bulkColor, color })
    }

    const colorPickerProps = {
        color: bulkColor.color,
        open: colorPickerOpen,
        selectColor: setBulkColor,
        close: () => toggleColorPicker(false)
    }

    return (
        <div style={container}>
            <div style={swatchContainer} onClick={() => toggleColorPicker(!colorPickerOpen)}>
                <div style={{ ...sampleSwatch, backgroundColor: bulkColor.color.hex }}/>
            </div>
            
            <ColorPicker {...colorPickerProps} />
            
            <Toggle value={bulkColor} onClick={enableGroupApply} />
            <input type='checkbox' id='bulkColor' value={bulkColor} onClick={enableGroupApply}/>
            <label htmlFor='bulkColor'>Enable group color apply</label>
        </div>
    )
}

const container = {
    display: 'flex',
    alignItems: 'center'
}

const colorSelector = {
    display: 'flex',
}

const swatchContainer = {
    height: 20,
    width: 20,
    borderRadius: 3,
    marginRight: 10,

    cursor: 'pointer',
    boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, .2)',
    border: '3px solid white',

}

const sampleSwatch = {
    borderRadius: '3px',
    height: '100%',
    width: '100%',
}