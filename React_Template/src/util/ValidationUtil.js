

// 驗證不為空值
export const notEmpty = (val) => {
    return typeof val !== 'undefined' && val != null && val.toString().trim() != '';
};