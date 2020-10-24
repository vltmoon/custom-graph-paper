import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color'
import { PaperContext } from '../../Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function ColorPicker(props) {
    const { open, color, selectColor, close } = props
    const { usedColors, setUsedColors } = useContext(PaperContext)
    
    const presetColors = usedColors.map((color) => color.hex).reverse().slice(0, 6)

    const closeColorPicker = useCallback((event) => {
        const duplicateColor = usedColors.some((usedColor) => usedColor.hex === color.hex)
        
        if (!duplicateColor) {
            setUsedColors([...usedColors, color])
        }

        close()

    }, [color, close, usedColors, setUsedColors])

    return open && (
        <ClickAwayListener onClickAway={closeColorPicker}>
            <div style={wrapper}>
                <SketchPicker
                    disableAlpha={true}
                    width={150}
                    presetColors={presetColors}
                    color={color}
                    onChange={selectColor}
                />
            </div>
        </ClickAwayListener>
    )
}

const wrapper = {
    position: 'relative'
}

ColorPicker.propTypes = {
    open: PropTypes.bool,
    ref: PropTypes.node,
	color: PropTypes.object,
	selectColor: PropTypes.func,
    close: PropTypes.func,
    useColors: PropTypes.array,
    setUsedColors: PropTypes.func
};