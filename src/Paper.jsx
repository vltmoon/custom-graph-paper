import React, { useState } from 'react';
import { Grid, ResizeGraph, GroupColorApply, Erase } from './views/Grid'
import { RecentColors, Header, Footer } from './views'
import { BulkColor } from './components'

export const PaperContext = React.createContext({})
export const defaultBulkColor = { color: { hex: '' }, enable: false }
export const defaultSize = { rows: 14, cols: 47 }

export default function Paper() {
    const [usedColors, setUsedColors] = useState([])
    const [bulkColor, setBulk] = useState(defaultBulkColor)
    const [graphSize, setGraphSize] = useState(defaultSize)
    const [eraseEnabled, setEraseEnabled] = useState(false)

    const contextValue = {
        usedColors,
        setUsedColors,
        bulkColor,
        setGraphSize,
        graphSize,
        setBulk,
        eraseEnabled,
        setEraseEnabled
    }

    return (
        <PaperContext.Provider value={contextValue}>
            <div style={container}>
                <div style={body}>
                    <Header />

                    <div style={colorFeatures}>
                        <BulkColor />
                        <Erase />
                    </div>

                    <Grid />

                    <div style={gridFeatures}>
                        <RecentColors />
                        <ResizeGraph />
                    </div>
               </div>
           </div>
        </PaperContext.Provider>
    );
}

const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    // backgroundColor: '#ece9d4',
    // backgroundColor: '#ac9600',
    fontFamily: 'Poppins',
    fontSize: '14px',
}

const body = {
    display: 'flex',
    flexDirection: 'column',
    height: 1280,
    width: 800,
}

const colorFeatures = {
    display: 'flex',
    justifyContent: 'space-between',
    height: 40,
    width: '100%',
    marginTop: 20,
}

const gridFeatures = {
    display: 'flex',
    marginTop: 20
}


// backgroundColor: '#ecd6d0'