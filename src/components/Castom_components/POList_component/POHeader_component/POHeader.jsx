import React from 'react';
import classes from './POHeader.module.css'
const POHeader = ({titles}) => {
    return (
        <div className={classes.POHeader}>
            {titles.map((titlesIter) =>
                <strong key={titlesIter.title}>{titlesIter.title}</strong>
            )}
        </div>
    );
};

export default POHeader;