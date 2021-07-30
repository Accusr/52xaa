import {CSSProperties, useState} from 'react'
import Thumb from './Thumb'
import style from './index.module.scss'

const thumb_styles:CSSProperties[] =[{
    left: '24px',
    top: '0px',
    position:'absolute'
},{
    left: '34px',
    top: '0px',
    position:'absolute'
},{
    left: '44px',
    top: '0px',
    position:'absolute'
},{
    left: '54px',
    top: '0px',
    position:'absolute'
},{
    left: '64px',
    top: '0px',
    position:'absolute'
},{
    left: '64px',
    top: '0px',
    position:'absolute'
},{
    left: '64px',
    top: '0px',
    position:'absolute'
}]
/**
 * carousel
 * 可触摸部分控制当前thumb位置
 * 整体进度调控： thumb位置+触发
 */
export default ()=>{

    const [thumbStyles, setThumbStyles] = useState(thumb_styles)

    return (
        <div className={style.carousel}>
            {[1,1,1,1,1,1,1].map((item,index)=>
                <Thumb style={thumbStyles[index]} index={index}/>
            )}
        </div>
    )
}