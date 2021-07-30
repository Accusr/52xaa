import React from 'react';
import style from './index.module.scss'
// import Timer from '../components/Timer'
import Carousel from '../components/Carousel'

export default ()=>{
// console.log('dddd',style)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(
        <div className={style.home}>
            <Carousel/>
            {/*<div>我们在一起的时间：</div>*/}
            {/*<div className={style.time}>*/}
            {/*<Timer></Timer>*/}
            {/*</div>*/}
            <div className={style.footer}>浙ICP备18043990号</div>
        </div>
    )
}