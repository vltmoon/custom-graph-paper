import React, { useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { PaperContext, defaultGroupColorState } from '../../../Paper'
import ColorPicker from '../../ColorPicker'

export default function Column() {
    const { groupApply, eraseEnabled } = useContext(PaperContext)
    const [colorPickerOpen, toggleColorPicker] = useState(false)
    const [color, setColor] = useState({ hex: ''})

    const openColorPicker = () => {
        if (eraseEnabled) {
            setColor(defaultGroupColorState.color)
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
                setColor(defaultGroupColorState.color)   
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
    height: 20,
    width: 20,
    border: '1px solid black'
}

const fill = {
    width: '100%',
    height: '100%',
}