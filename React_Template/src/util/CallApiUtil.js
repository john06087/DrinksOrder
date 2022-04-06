import axios from 'axios';
import swal from 'sweetalert2';

export const callApiPost = (url, vin) => {
    return axios.post(url, vin)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            swal.fire('Error!', '取得資料失敗','error');
            console.error(error)
        })
}