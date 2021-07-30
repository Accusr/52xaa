import {createElement, CSSProperties, useRef} from "react";
import Swipe from 'react-easy-swipe'

export default (props:{
    style:CSSProperties,
    index:number
}) => {
    const {style, index} = props
    return <Swipe style={style} innerRef={e=>{
        console.log(e)}
    }>
        <div style={{
            width: '300px',
            height: '300px',
            border: '1px dashed red',
        }
        }>
            {index}
        </div>
    </Swipe>
}