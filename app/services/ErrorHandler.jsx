import api from './config'

function AxiosErrorHandler() {
    api.interceptors.response.use(
        function (response) {
            return response
        },
        function (errors) {
            const { status } = errors.response
            switch (status) {
                case 400:
                    console.log('Something Went Wrong')
                    break
                case 403:
                    console.log('Access Denied')
                    break
                case 404:
                    console.log('Page Not Found')
                    break
                case 429:
                    console.log('Too much Request')
                    break
                case 500:
                    console.log('Something Went Wrong')
                    break
                case 401:
                    localStorage.clear()
                    sessionStorage.clear()
                    console.log('Network Error')
                    break
            }

            return
        },
    )
    return <></>
}

export default AxiosErrorHandler
