import PropTypes from 'prop-types';

function Welcome( { name } ) {
    return <h1>{name}</h1>
}

Welcome.propTypes = {
    name: PropTypes.string,
}

export default Welcome;