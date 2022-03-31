import axios from 'axios';

export const callApiPost = (apiPathName, vin) => {

  let config = {
    baseURL: 'http://localhost:8081',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      isRest: true,
    },
  };
  axios.post(apiPathName, vin, config)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      /* 不論失敗成功皆會執行 */
    })
};