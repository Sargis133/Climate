export const getFirstDate = (): string => {
    let date: Date = new Date()
    let year: number = date.getFullYear()
    let month: string = date.getMonth()+1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1 + ''
    let day: string = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + ''
    return day + '.' + month + '.' + year
}