import React from 'react';
import PropTypes from 'prop-types';
import { green } from '@mui/material/colors';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StatusIcon = ({ value, rowData, fieldIndex = 2 }) => {
	const icon = rowData[fieldIndex] ? <CheckCircleIcon style={{ color: green[500] }} /> : <CancelIcon color="warning" />;
	if (value === '') return '-';

	return (
		<>
			{icon} {value}
		</>
	);
};

StatusIcon.propTypes = {
	value: PropTypes.any,
	rowData: PropTypes.array,
	fieldIndex: PropTypes.number,
};

export default StatusIcon;
