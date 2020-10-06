import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color'
import { PaperContext } from './Paper'

export default function Column() {
    const { numberOfRows, numberOfCols } = useContext(PaperContext)

    const [isColorPickerOpen, toggleColorPicker] = useState(false)
    const [color, setColor] = useState(false)
    
    return (
        <React.Fragment>
            <div
                style={{...Col, backgroundColor: color.hex}}
                onClick={() => toggleColorPicker(!isColorPickerOpen)}
            />
            {isColorPickerOpen && (
                <SketchPicker color={color} onChange={setColor} />
            )}
        </React.Fragment>
    )

}

const Col = {
    height: 20,
    width: 20,
    border: '.1px solid black'
}