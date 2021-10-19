import React, { useState } from 'react'
import Slide from '@mui/material/Slide';
import useStyles from './styles'
import CarouselSlide from './Slides/CarouselSlide'
import Arrow from './Arrow'
import MK1 from '../../../assets/MK1.jpg'
import MK2 from '../../../assets/MK2.jpg'
import MK3 from '../../../assets/MK3.jpg'
import MK4 from '../../../assets/MK4.jpg'

const SlideInfo = [
    { pic: MK1 },
    { pic: MK2 },
    { pic: MK3 },
    { pic: MK4 },
]

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
            <Slide in={slideIn} direction={slideDirection} style={{ flex: '1.0' }}>
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
