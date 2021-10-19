import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useStyles from './styles'


function Arrow({ direction, clickFunction }) {
    const classes = useStyles();

    const icon = direction === 'left' ? <ArrowBackIosNewIcon className={classes.svg}/>: <ArrowForwardIosIcon className={classes.svg}/>;
    return <div onClick={clickFunction}>{icon}</div>;
}

export default Arrow
