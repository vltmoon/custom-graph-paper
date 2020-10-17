import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, ResizeGraph, GroupColorApply, Erase } from './views/Grid'
import { RecentColors } from './views'

export const PaperContext = React.createContext({})
export const defaultGroupColorState = { color: { hex: '' }, enable: false }
export const defaultSize = { rows: 20, cols: 20 }

export default function Paper() {
    const [usedColors, setUsedColors] = useState([])
    const [groupApply, setGroupApply] = useState(defaultGroupColorState)
    const [graphSize, setGraphSize] = useState(defaultSize)
    const [eraseEnabled, setEraseEnabled] = useState(false)

    const contextValue = {
        usedColors,
        setUsedColors,
        groupApply,
        setGraphSize,
        graphSize,
        setGroupApply,
        eraseEnabled,
        setEraseEnabled
    }

    return (
        <PaperContext.Provider value={contextValue}>
            <div style={parentContainer}>
                <div>
                    <ResizeGraph />
                    <Grid />
                    <GroupColorApply />
                    <Erase />
                </div>

               <RecentColors />
           </div>
           <div>
               <a target="_blank" href="https://icons8.com/icons/set/erase">Erase icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
           </div>
        </PaperContext.Provider>
    );
}

const parentContainer = {
    display: 'flex',
}

Paper.propTypes = {
};
