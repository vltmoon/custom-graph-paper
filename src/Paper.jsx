import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, ResizeGraph, GroupColorApply, Erase } from './views/Grid'
import { RecentColors, Sidebar, Footer } from './views'

export const PaperContext = React.createContext({})
export const defaultGroupColorState = { color: { hex: '#000' }, enable: false }
export const defaultSize = { rows: 30, cols: 30 }

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
                {/*<Sidebar />*/}
                <div style={body}>
                    <div style={grid}>
                        <Grid />
                    </div>
                    <div style={features}>
                        <div style={{ fontSize: 30, alignSelf: 'flex-end' }}>
                            gridesigner.
                        </div>
                        <div style={gridFeatures}>
                            <GroupColorApply />
                            <Erase />
                        </div>
                        <RecentColors />
                        <ResizeGraph />
                    </div>
               </div>
               {/*<div style={{width: '100%', display: 'flex', justifyContent: 'flex-end', height: 60}}>
                    
                </div>*/}
           </div>
        </PaperContext.Provider>
    );
}

const parent = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    // backgroundColor: '#ece9d4',
    // backgroundColor: '#ac9600',
    fontFamily: 'Beth Ellen',
    fontSize: '14px',
}

const body = {
    display: 'flex'
}

const grid = {    
    margin: 20,
    fontSize: 13,
    width: 510,
    height: 600
}

const gridFeatures = {
    display: 'flex',
}

const features = {
    display: 'flex',
    flexFlow: 'column nowrap'
}

Paper.propTypes = {
};

// backgroundColor: '#ecd6d0'