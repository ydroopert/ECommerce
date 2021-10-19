import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
export default function CarouselSlide(props) {
    const { pic } = props.content;
    console.log(props)
    console.log(pic)
    const useStyles = makeStyles(() => ({
        card: {
            borderRadius: 10,
            padding: '75px 50px',
            margin: '0px 25px',
            boxShadow: '5px 5px 5px gray',
            display: 'flex',
            justifyContent: 'center',
            flex: '1.0',
            height: '70vh',
            alignItems: 'center',
            backgroundImage: `url(${pic})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
        } 
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>
        </Card>
    );
}