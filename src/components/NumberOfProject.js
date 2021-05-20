import React from "react";
import PropTypes from 'prop-types';

const NumberOfProject = (props) => {
    return <div className='Number-of-project flex-setting'>
        <span className='text'>{props.includedProject}/{props.totalNumberOfProject} </span>
    </div>
}

export default NumberOfProject;

NumberOfProject.propTypes = {
    includedProject: PropTypes.number,
    totalNumberOfProject: PropTypes.number
};

NumberOfProject.defaultProps = {
    includedProject: 0,
    totalNumberOfProject: 0
}