import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PaperContext } from '../../Paper'

export default function RecentColors() {
    const { usedColors } = useContext(PaperContext)

    return (
        <div style={parent}>
            <div style={title}>Recent colors</div>
            <div style={colors}>
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
        </div>
    )
}

const parent = {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 20,
    width: 240,
    padding: 20,
    height: 200,
    borderRadius: 3,
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, .2)',
    backgroundColor: '#edefe7'
}

const title = {
    // border: '2px solid black',
    // width: '96%',
    paddingBottom: 10,
    // backgroundColor: '#E8D9D9',
    // backgroundColor: '#c3612c',
    textAlign: 'center',
    // color: 'white',
}

const colors = {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'scroll'
}

const swatchContainer = {
    height: 20,
    width: 65,
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, .2)',
    border: '3px solid white',
    borderRadius: 3,
    margin: '5px 5px 0 0',
    fontSize: 11,
    cursor: 'pointer'
}

const sampleSwatch = {
    borderRadius: 3,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center '
}