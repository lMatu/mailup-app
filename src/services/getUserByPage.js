const axios = require("axios")

const getUserByPage = async (uri, currentPage, limit) => {

    let status = null;
    let data = null;
    let dataFetched = null;

    await axios
        .get(`https://dummyapi.io/data/v1${uri}`, {
            headers: {
                "app-id": "62a131828f0d1dccf73b78d7"
            },
            params:{
                "page": currentPage,
                "limit": limit
            }
        })
        .then((response) => {
            if (response) {
                status = response.status
                data = response.data
            }
        })
        .catch(function (error) {
            if (error.response) {
                status = error.response.status
                data = error.response.data
            }
        })

    switch (status) {
        case 200:
        case 201:
            dataFetched = {
                code: status,
                flag: true,
                result: data,
            }
            break
        default:
            dataFetched = {
                code: status,
                flag: false,
                result: data
            }
            break
    }
    return dataFetched
}

export default getUserByPage