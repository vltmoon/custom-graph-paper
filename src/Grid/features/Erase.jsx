import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PaperContext, defaultGroupColorState } from '../../Paper'

export default function Erase() {
    const { groupApply, setGroupApply, eraseEnabled, setEraseEnabled } = useContext(PaperContext)

    const toggleEraseEnabled = () => setEraseEnabled(!eraseEnabled)

    return (
        <React.Fragment>
          <button onClick={toggleEraseEnabled}>toggle eraser enabled</button>
        </React.Fragment>
    )
}
