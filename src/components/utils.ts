export const timer = (start: number, interval: number, call: Function) => {

    const itv = setInterval(() => {
        const current = new Date().getTime()
        const delta = (current - start) / 1000
        console.log('ddd', current, start, delta)
        const time = {
            year:0,
            day: Math.floor(delta / 86400),
            hour: Math.floor((delta % 86400) / 3600),
            min: Math.floor((delta % 86400 % 3600) / 60),
            sec: Math.floor(delta % 86400 % 3600 % 60),
        }
        time.year = Number((time.day /365).toFixed(2))
        call(time)
    }, interval)
}