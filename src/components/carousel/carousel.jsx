import React, { useEffect, useState } from 'react';
import Marker from './marker';
import Slide from './slide';
import style from './style.less';

const Carousel = (props) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [previouSlide, setPreviouSlide] = useState(0);
    for(let i = 0; i < props.obj.length; i++){

    }
    const slides = [];
    const markers = [];
    for (let i = 0; i < props.obj.length; i++) {
        markers.push(<Marker key={i} index={i + 1} clickHandler={() => changeSlide(i + 1)} currentSlide={currentSlide}/>);
        slides.push(<Slide
            key={i}
            index={i + 1}
            maxIndex={props.obj.length}
            currentSlide={currentSlide}
            previousSLide={previouSlide}
            title={props.obj[i].title}
            text={props.obj[i].text}
            imgSrc={props.obj[i].imgSrc}/>);
    }

    const changeSlide = (slide) => {
        if(currentSlide !== slide){
            setPreviouSlide(currentSlide)
            setCurrentSlide(slide);
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            nextSlide();
        }, 4500);
        return () => {
            clearTimeout(timeout);
        };
    }, [currentSlide]);

    const nextSlide = () => {
      if(previouSlide === 0){
          if(currentSlide < props.obj.length){
              setCurrentSlide(currentSlide + 1)
          }else{
              setCurrentSlide(1)
          }
      }
      setPreviouSlide(0)
    }

    return (
        <div className={style.slides}>
            {slides}
            <div className={style['markers']}>
                {markers}
            </div>
        </div>
    )
};

export default Carousel;