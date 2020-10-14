import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid'
import { ResizeGraph, RecentlyUsedColors, GroupColorApply } from './Grid/features'

export const PaperContext = React.createContext({})

export default function Paper() {
    const [usedColors, setUsedColors] = useState([])
    const [groupApply, setGroupApply] = useState({ color: { hex: '' }, enable: false })
    const [graphSize, setGraphSize] = useState({ rows: 20, cols: 20 })

    const contextValue = {
        usedColors,
        setUsedColors,
        groupApply,
        setGraphSize,
        graphSize,
        setGroupApply
    }

    return (
        <PaperContext.Provider value={contextValue}>
            <div style={appContainer}>
                <div>
                    <ResizeGraph />
                    <Grid />
                    <GroupColorApply />
                </div>

               <RecentlyUsedColors />
           </div>
        </PaperContext.Provider>
    );
}

const appContainer = {
    display: 'flex'
}

Paper.propTypes = {
};
