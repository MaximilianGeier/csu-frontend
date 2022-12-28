import React, { useState, useEffect } from 'react';
import style from './style.less';


const Slide = ({maxIndex, index, currentSlide, previousSLide, title, text, imgSrc}) => {
    const [animationState, setAnimationState] = useState('');
    let translate = ''
    translate = "translateX(" + ((index - 1) * (-120)) + "%)";


    useEffect(() => {
    if(currentSlide > index || animationState === 'anim_1' || animationState === 'anim_2'){
        if(currentSlide < previousSLide){
            setAnimationState('anim_4');
        }else{
            setAnimationState('anim_3');
        }
    }else if(currentSlide < index || animationState === 'anim_1' || animationState === 'anim_2'){
        if(currentSlide < previousSLide ){
            setAnimationState('anim_4');
        }else{
            setAnimationState('anim_3');
        }
    }else{
        if(currentSlide < previousSLide){
            setAnimationState('anim_2');
        }else{
            setAnimationState('anim_1');
        }
    }
    }, [currentSlide])
    return(
    <div onTransitionEnd={() => setFastTransition()} style={{transform: translate}} className={style['slide'] + ' ' + style[animationState]}>
        <div className={style['slider']}>
            <div className={style['slider__content']}>
                <h1 className={style['slider-title']}>
                    {title}
                </h1>
                <p className={style['slider-text']}>
                    {text}
                </p>
                <button className={style['slider-btn']}>Заказать доставку</button>
            </div>
            <img src={imgSrc} alt="Заставка" />
        </div>
    </div>
)};

export default Slide;