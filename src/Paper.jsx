import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, ResizeGraph, GroupColorApply, Erase } from './views/Grid'
import { RecentColors, Sidebar, Footer } from './views'

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
            <div style={parent}>
                <Sidebar />

                <div style={body}>
                    <div style={grid}>
                        <ResizeGraph />
                        <Grid />
                        <GroupColorApply />
                        <Erase />
                    </div>

                   <RecentColors />
               </div>
           </div>
        </PaperContext.Provider>
    );
}

const parent = {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Beth Ellen',
    fontSize: '14px',
}

const body = {
    display: 'flex'
}

const grid = {
    fontFamily: 'Commissioner',
    padding: '20px',
    fontSize: '13px',
}

Paper.propTypes = {
};
