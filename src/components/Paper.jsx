import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color'
import Rows from './Rows'
import ResizeGraph from './ResizeGraph'
import RecentlyUsedColors from './RecentlyUsedColors'

export const PaperContext = React.createContext({})

export default function Paper() {
    const [usedColors, setUsedColors] = useState([])
    const [colorPickerOpen, toggleColorPicker] = useState(false)
    const [groupApply, setGroupApply] = useState({ color: { hex: '' }, enable: false })
    const [graphSize, setGraphSize] = useState({ rows: 20, cols: 20 })

    const contextValue = {
        usedColors,
        setUsedColors,
        groupApply,
        setGraphSize,
        graphSize
    }

    const enableGroupApply = () => {
        setGroupApply({...groupApply, enable: !groupApply.enable })
    }

    const setGroupApplyColor = (color) => {
        setGroupApply({...groupApply, color })
    }

    return (
        <PaperContext.Provider value={contextValue}>
            <div style={{}}>
                
                <ResizeGraph />

                {/*--- Graph paper layout ---*/}
                <div style={grid}>
                    <Rows />
                </div>

                {/*--- Bulk apply colors to grid without having to toggle each item ---*/}
                <input type='checkbox' id='groupApply' value={groupApply} onClick={enableGroupApply}/>
                <label htmlFor='groupApply'>Enable group color apply</label>

                <div style={groupApplyContainer}>
                    {/*--- Set bulk apply color with sample swatch ---*/}
                    <div style={swatchContainer}>
                        <div style={{ ...sampleSwatch, backgroundColor: groupApply.color.hex }}/>
                    </div>
                    <button
                        style={{ marginLeft: '10px'}}
                        disabled={!groupApply.enable}
                        onClick={() => toggleColorPicker(!colorPickerOpen)}>
                        Select group color
                    </button>
                </div>

                {colorPickerOpen && (
                    <ChromePicker color={groupApply.color} onChange={setGroupApplyColor} />
                )}
            </div>

           <RecentlyUsedColors />
        </PaperContext.Provider>
    );
}

const groupApplyContainer = {
    display: 'flex',
    marginTop: '10px'
}

const grid = {
    display: 'flex',
    flexFlow: 'column nowrap'
}

const swatchContainer = {
    height: 20,
    width: 20,
    boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, .2)',
    border: '3px solid white',
}

const sampleSwatch = {
    borderRadius: '3px',
    height: '100%',
    width: '100%',
}

Paper.propTypes = {
};
