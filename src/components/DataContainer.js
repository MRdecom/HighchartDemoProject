import React from 'react';
import PropTypes from 'prop-types';

const DataContainer = (props) => {
    return <div className={`Data-container ${props.className||''}`}>
        <div className='title'>
            {props.title}
        </div>
        <div className='children'>
            {props.children}
        </div>
    </div>
}

export default DataContainer;


DataContainer.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.any
};