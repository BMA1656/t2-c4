export function dateformat(i) {
    const baseDate = new Date(i);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayOfWeek = daysOfWeek[baseDate.getDay()];
    const month = months[baseDate.getMonth()];

    const date = baseDate.getDate();
    const hour = baseDate.getHours();
    const minutes = baseDate.getMinutes();
    
    const formattedDate = `${dayOfWeek}, ${month} ${date}, ${hour}:${minutes}`;
    return formattedDate
}