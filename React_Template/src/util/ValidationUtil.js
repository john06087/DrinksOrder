
// 驗證為空值
export const isEmpty = (val) => {
    return !notEmpty(val);
};

// 驗證不為空值
export const notEmpty = (val) => {
    return typeof val !== 'undefined' && val != null && val.toString().trim() != '';
};