// 日期格式轉換 input Date, output YYYYMMDD
export const dateFormatPattern1 = (date) => {
    var formatDate = ''

    if (date instanceof Date) {
        let monthString = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()
        let dayString = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString()
        formatDate = date.getFullYear().toString() + monthString + dayString;
    }
    
    return formatDate;
};