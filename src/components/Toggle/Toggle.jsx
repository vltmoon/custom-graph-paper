import React from 'react';
import PropTypes from 'prop-types';

export default function Toggle({ value, onClick }) {
	return (
		<label style={container}>
			<input style={input} type="checkbox" value={value} onClick={onClick} />
			<div style={control} />
		</label>
	)
}

const container = {}
const input = {
	display: 'none',
}
const control = {}

Toggle.propTypes = {
	onChange: PropTypes.func,
	selected: PropTypes.bool
}