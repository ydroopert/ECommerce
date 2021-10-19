import React from 'react';
import { Card, makeStyles } from '@material-ui/core';

export default function CarouselSlide(props) {
    const { backgroundColor, title } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor,
            borderRadius: 10,
            padding: '75px 50px',
            margin: '0px 25px',
            boxShadow: '5px 5px 5px gray',
            display: 'flex',
            justifyContent: 'center',
            flex: '1.0',
            height: '700px',
            alignItems: 'center',
        } 
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <h1>{title}</h1>
        </Card>
    );
}