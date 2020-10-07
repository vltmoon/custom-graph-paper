import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color'
import { PaperContext } from './Paper'

export default function Column() {
    const { groupApply, setUsedColors, usedColors } = useContext(PaperContext)
    const colorPickerRef = useRef()

    const [colorPickerOpen, toggleColorPicker] = useState(false)
    const [color, setColor] = useState({ hex: ''})

    const openColorPicker = () => {
        if (groupApply.enable) {
            setColor(groupApply.color)
        } else {
            !colorPickerOpen && toggleColorPicker(true)
        }
    }

    const closeColorPicker = useCallback((event) => {
        if (!colorPickerRef.current?.contains(event.target)) {
            const duplicateColor = usedColors.some((usedColor) => usedColor.hex === color.hex)
        
            if (!duplicateColor) {
                setUsedColors([...usedColors, color])
            }

            toggleColorPicker(false)
        }
    }, [colorPickerRef, color, usedColors])

    useEffect(() => {
        document.addEventListener('mousedown', closeColorPicker);
        return () => document.removeEventListener('mousedown', closeColorPicker);
    });
    
    return (
        <div style={col} ref={colorPickerRef}>
            <div
                style={{...fill, backgroundColor: color.hex}}
                onClick={openColorPicker}
            />
            {colorPickerOpen && (
                <ChromePicker color={color} onChangeComplete={setColor}/>
            )}
        </div>
    )

}

const col = {
    height: 20,
    width: 20,
    border: '1px solid black'
}

const fill = {
    width: '100%',
    height: '100%',
}