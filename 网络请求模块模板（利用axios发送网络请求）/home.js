import axios from "./http"
function login (params){
	return axios.post(url,params)
	
}
export default {
	login
}