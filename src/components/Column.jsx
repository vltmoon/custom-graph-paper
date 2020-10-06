import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color'
import { PaperContext } from './Paper'

export default function Column() {
    const { numberOfRows, numberOfCols } = useContext(PaperContext)
    const colorPickerRef = useRef()

    const [isColorPickerOpen, openColorPicker] = useState(false)
    const [color, setColor] = useState(false)

    const toggleColorPicker = () => {
        if (!isColorPickerOpen) {
            openColorPicker(true)
        }
    }

    const closeColorPicker = useCallback((event) => {
        if (!colorPickerRef.current?.contains(event.target)) {
            openColorPicker(false)
        }
    }, [colorPickerRef])

    useEffect(() => {
        document.addEventListener('mousedown', closeColorPicker);
        return () => document.removeEventListener('mousedown', closeColorPicker);
    });
    
    return (
        <div style={col} ref={colorPickerRef}>
            <div
                style={{...fill, backgroundColor: color.hex}}
                onClick={toggleColorPicker}
            />
            {isColorPickerOpen && (
                <SketchPicker color={color} onChange={setColor} />
            )}
        </div>
    )

}

const col = {
    height: 20,
    width: 20,
    border: '.1px solid black'
}

const fill = {
    width: '100%',
    height: '100%',
}