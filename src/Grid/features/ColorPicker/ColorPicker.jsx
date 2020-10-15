import React, { useContext, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { TwitterPicker } from 'react-color'
import { PaperContext, defaultGroupColorState } from '../../../Paper'

export default function ColorPicker(props) {
    const { open, color, selectColor, close } = props
    const { usedColors, setUsedColors } = useContext(PaperContext)
    const ref = useRef()

    const closeColorPicker = useCallback((event) => {
        if (!ref.current?.contains(event.target)) {
            const duplicateColor = usedColors.some((usedColor) => usedColor.hex === color.hex)
        
            if (!duplicateColor) {
                setUsedColors([...usedColors, color])
            }

            close()
        }

    }, [ref, color, close, usedColors, setUsedColors])

    useEffect(() => {
        document.addEventListener('mousedown', closeColorPicker);
        return () => document.removeEventListener('mousedown', closeColorPicker);
    });

    return open && (
        <div ref={ref} style={twitterContainer}>
            <TwitterPicker color={color} onChangeComplete={selectColor} />
        </div>
    )
}

const twitterContainer = {
    right: '10px',
    position: 'relative',
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