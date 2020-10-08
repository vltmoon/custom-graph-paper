import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Rows from './Rows'
import ResizeGraph from './ResizeGraph'
import RecentlyUsedColors from './RecentlyUsedColors'
import GroupColorApply from './GroupColorApply'

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
            <div style={{}}>
                
                <ResizeGraph />

                {/*--- Graph paper layout ---*/}
                <div style={grid}>
                    <Rows />
                </div>

                <GroupColorApply />
            </div>

           <RecentlyUsedColors />
        </PaperContext.Provider>
    );
}

const grid = {
    display: 'flex',
    flexFlow: 'column nowrap'
}

Paper.propTypes = {
};
