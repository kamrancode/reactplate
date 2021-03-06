// a library to wrap and simplify api calls
import apisauce from 'apisauce'

const options = {
  // here are some default headers
  headers: {
    'Cache-Control': 'no-cache'
  },
  // 10 second timeout...
  timeout: 10000
}

const BaseApi = url => apisauce.create({ baseURL: url, ...options })

export default BaseApi
