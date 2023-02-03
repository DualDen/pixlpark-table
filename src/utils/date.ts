export const normalDate = (date: string) => {
    const newDate = Number(date.slice(6, date.length - 2));
    return new Date(newDate).toLocaleString();
}