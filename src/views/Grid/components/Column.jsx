import React, { useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { PaperContext } from '../../../Paper'
import ColorPicker from '../../ColorPicker'

export default function Column() {
    const { groupApply, eraseEnabled } = useContext(PaperContext)
    const [colorPickerOpen, toggleColorPicker] = useState(false)
    const [color, setColor] = useState({ hex: ''})

    const openColorPicker = () => {
        if (eraseEnabled) {
            setColor('#fff')
        } else if (groupApply.enable) {
            setColor(groupApply.color)
        } else if (!colorPickerOpen) {
            toggleColorPicker(true)
        } else {
            toggleColorPicker(false)
        }
    }

    const eraseOrApplyColor = useCallback((e) => {
        if (e.nativeEvent.which === 1 && (groupApply.enable || eraseEnabled)) {
            if (groupApply.enable) {
                setColor(groupApply.color)
            }

            if (eraseEnabled) {
                setColor('#fff')   
            }
        }
    }, [groupApply, eraseEnabled])

    const colorPickerProps = {
        color,
        open: colorPickerOpen,
        selectColor: setColor,
        close: () => toggleColorPicker(false)
    }
    
    return (
        <div style={col}>
            <div
                style={{...fill, backgroundColor: color.hex}}
                onClick={openColorPicker}
                onMouseMove={eraseOrApplyColor}
            />
            <ColorPicker {...colorPickerProps} />
        </div>
    )

}

const col = {
    border: '1px solid black',
    height: 15,
    width: 15,
}

const fill = {
    width: 15,
    height: 15,
}