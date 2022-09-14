export const formatCurrentDate = (currentMonth: string): string => {
    let [year, month, day, hour] = currentMonth.split('/')
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return `${months[parseInt(month) - 1]} de ${year}`
}
export const now = () => {
    let dt = new Date();
    let dateNOW = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getHours();
    let dateNOWSTRING = dateNOW.toString()
    return dateNOWSTRING
}
export const getDifferenceDate = (currentDate: string, postDate: string): string => {
    let [year, month, day, hour] = currentDate.split('/')
    let [yearP, monthP, dayP, hourP] = postDate.split('/')
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    if(month > monthP) {
        let monthh = parseInt(month)
        let monthhP = parseInt(monthP)
        let rest = monthh - monthhP
        return `about ${rest} month ago`
    }

    let dayy = parseInt(day)
    let dayyP = parseInt(dayP)
    let res = dayy - dayyP
    return `about ${res} days ago`
}


const addZeroToDate = (n:number): string => {
    if(n<10) {
        return `0${n}`
    } else {
        return `${n}`;
    }
}

export const genreArray = [
    'adventure',
    'casual',
    'early',
    'gore',
    'horror',
    'indie',
    'racing',
    'rpg',
    'simulation',
    'sports',
    'strategy'
]