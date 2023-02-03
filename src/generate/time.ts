const currentTime = new Date();
const currentDate = currentTime.toISOString().split('T')[0]
const hourAndMin = currentTime.toISOString().split('T')[1].substring(0, 5)

export const currentFullTime = `${currentDate}T${hourAndMin}`

// 7 days a head from the current time
const calcSevenDays = new Date(currentTime.getTime() + 7 * 24 * 60 * 60 * 1000)
const maxDate = calcSevenDays.toISOString().split('T')[0]

export const maxTime = `${maxDate}T${hourAndMin}`