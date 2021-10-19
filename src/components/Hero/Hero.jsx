import React, { useState } from 'react'
import Slide from '@mui/material/Slide';
import useStyles from './styles'
import CarouselSlide from './Slides/CarouselSlide'
import Arrow from './Arrow'

const SlideInfo = [{ backgroundColor: '#ff7c7c', title: 'Slide 1' },
{ backgroundColor: '#ffb6b9', title: 'Slide 2' },
{ backgroundColor: '#8deaff', title: 'Slide 3' },
{ backgroundColor: '#ffe084', title: 'Slide 4' },
{ backgroundColor: '#d9d9d9', title: 'Slide 5' },]




function Hero() {
    const [index, setIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState('down');
    const content = SlideInfo[index];
    const numSlides = SlideInfo.length;
    const classes = useStyles();

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;

        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 500);
    };

    return (
        <div className={classes.root}>
            <Arrow
                direction='left'
                clickFunction={() => onArrowClick('left')}
            />
            <Slide in={slideIn} direction={slideDirection} style={{flex: '1.0'}}>
                <div>
                    <CarouselSlide content={content} />
                </div>
            </Slide>
            <Arrow
                direction='right'
                clickFunction={() => onArrowClick('right')}
            />
        </div>
    )
}

export default Hero
