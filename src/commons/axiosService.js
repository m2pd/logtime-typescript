import axios from 'axios'

class axiosService {
    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError);
        this.instance = instance;
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        return error;
    }

    postAuth(url, data) {
        return this.instance.post(url, data)
    }
}

export default new axiosService();