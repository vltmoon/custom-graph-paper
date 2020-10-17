import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PaperContext, defaultGroupColorState } from '../../../Paper'

export default function Erase() {
    const { eraseEnabled, setEraseEnabled } = useContext(PaperContext)

    const toggleEraseEnabled = () => setEraseEnabled(!eraseEnabled)

    return <button onClick={toggleEraseEnabled}>toggle eraser enabled</button>
}
