const countdown = () => {
    const countDate = new Date("August 18, 2025 00:00:00").getTime()        // .getTime() converts the time into milliseconds
    const now = new Date().getTime()        // Gets us the current time
    const gap = countDate - now             // Gets the value of (specified time of opening - current time)

    const second = 1000     // 1 second = 1000 ms
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector('.day').textContent = textDay
    document.querySelector('.hour').textContent = textHour
    document.querySelector('.minute').textContent = textMinute
    document.querySelector('.second').textContent = textSecond
}

setInterval(countdown, 1000)