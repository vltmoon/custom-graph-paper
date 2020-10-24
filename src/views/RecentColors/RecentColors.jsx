import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PaperContext } from '../../Paper'

export default function RecentColors() {
    const { usedColors } = useContext(PaperContext)

    return (
        <div style={parent}>
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
        </div>
    )
}

const parent = {
    display: 'flex',
    flexDirection: 'column'
}

const swatchContainer = {
    height: 20,
    width: 70,
    boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, .2)',
    border: '3px solid white',
    borderRadius: '3px',
    margin: '5px 0',
    fontSize: '11px'
}

const sampleSwatch = {
    borderRadius: '3px',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center '
}