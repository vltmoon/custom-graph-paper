import React, { useContext, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color'
import { PaperContext } from '../../Paper'

export default function ColorPicker(props) {
    const { open, color, selectColor, close } = props
    const { usedColors, setUsedColors } = useContext(PaperContext)
    const ref = useRef()
    
    const presetColors = usedColors.map((color) => color.hex).reverse().slice(0, 6)

    const closeColorPicker = useCallback((event) => {
        const duplicateColor = usedColors.some((usedColor) => usedColor.hex === color.hex)
        
        if (!duplicateColor) {
            setUsedColors([...usedColors, color])
        }

        close()

    }, [color, close, usedColors, setUsedColors])

     useEffect(() => {
        document.addEventListener('mousedown', closeColorPicker);
        return () => document.removeEventListener('mousedown', closeColorPicker);
    });

    return open && (
        <div style={wrapper} ref={ref}>
            <SketchPicker
                disableAlpha={true}
                width={150}
                presetColors={presetColors}
                color={color}
                onChange={selectColor}
            />
        </div>
    )
}

const wrapper = {
    position: 'absolute'
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