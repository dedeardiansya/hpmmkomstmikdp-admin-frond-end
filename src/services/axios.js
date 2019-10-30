import axios from 'axios'
import { baseApiUrl } from '../../config'

axios.defaults.baseURL = baseApiUrl

export default axios
