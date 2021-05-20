import React from "react";
import PropTypes from 'prop-types';

const RequiredCapacity = (props) => {
    return <div className='Required-capacity flex-setting'>
        <span>{props.requiredCapacity}</span>
    </div>
}

export default RequiredCapacity;

RequiredCapacity.propTypes = {
    requiredCapacity: PropTypes.string,
};

RequiredCapacity.defaultProps = {
    requiredCapacity: 0,
}