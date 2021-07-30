import {useEffect, useState,} from 'react';
import {timer} from "../utils";
import style from './index.module.scss'

export default () => {
    const [time, setTime] = useState({
        day: 0,
        hour: 0,
        min: 0,
        sec: 0,
        year: 0,
    })
    useEffect(() => {
        timer(1451577600000, 1000, (t: any) => {
            console.log('66666', t)
            setTime(t)
        })
    }, [])
    return (
        <span className={style.time}>
            <span>{time.day}</span>天
            (<small>{time.year}</small>年)
            <span>{time.hour}</span>时
            <span>{time.min}</span>分
            <span>{time.sec}</span>秒

        </span>
    )
}