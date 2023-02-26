// In a new file called date.js, write a function that returns today’s date and the amount of time left from now until the next holiday, additionally display what holiday that is. Export this function.

const whenIsTheHoliday = async () => {
    const res1 = await fetch('https://date.nager.at/api/v3/publicholidays/2023/RU')
    const res = await res1.json()
    const now = new Date()
    const closestHoliday = res.find(holiday => (new Date(holiday.date)).getTime() > now.getTime())
    const difference = new Date(closestHoliday.date).getTime() - now.getTime();
    const differenceInDays = Math.ceil(difference / (1000 * 3600 * 24));
    const differenceInTime = new Date(difference % (1000 * 3600 * 24)).toISOString().slice(11, 19)
    const result = `${closestHoliday.name} is in ${differenceInDays} days and ${differenceInTime}`
    return result
}

module.exports = whenIsTheHoliday