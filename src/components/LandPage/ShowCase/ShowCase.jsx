import React from 'react'
import useStyles from './styles'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function ShowCase(props) {
    const { title, description, image} = props.content
    const classes = useStyles();
    console.log(props)
    return (
        <div className={classes.root}>
            <img src={image} className={classes.pic} />
            <br />
            <div className={classes.des}>
                <h1>{title}</h1>
                <h3>{description}</h3>
                <Button component={Link} variant="outlined" to="/products">價格查詢</Button>
            </div>
        </div>
    )
}

export default ShowCase
