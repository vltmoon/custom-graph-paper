import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PaperContext } from '../../Paper'

export default function RecentlyUsedColors() {
    const { usedColors } = useContext(PaperContext)

    return (
        <React.Fragment>
            <div>Recent colors:</div>
            {usedColors.map((color, i) => {
                return color.hex && (
                    <div key= {i} style={swatchContainer}>
                        <div style={{ ...sampleSwatch, backgroundColor: color.hex }}>
                            <div style={{ color: 'white'}}>{color.hex}</div>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

const swatchContainer = {
    height: 20,
    boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, .2)',
    border: '3px solid white',
}

const sampleSwatch = {
    borderRadius: '3px',
    height: '100%',
    width: '100%',
}