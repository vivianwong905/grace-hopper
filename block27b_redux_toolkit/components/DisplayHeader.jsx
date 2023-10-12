import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';

const DisplayHeader = ({value}) => {
    return (
        <Typography variant="h2">{value}</Typography>
    );
}

DisplayHeader.propTypes = {
    value: PropTypes.string.isRequired
}

export default DisplayHeader;