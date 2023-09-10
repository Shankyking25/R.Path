

import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:9081/api'

/*
export const getUsersAPI =  async () => axios.get('/gameUser')
export const getUserByIdAPI = async (id) => {
    axios.get(`/gameUser/${id}`)
}

export const getUserByWalletAPI = async (walletAddress) => {
    const newAddress = walletAddress && walletAddress.toLowerCase();
    const response = await axios.get(`/gameUser/byWallet/${newAddress}`);

    return response.data;
}

export const createUserAPI = async (user) => {

    axios.post(`/gameUser`, user)
}


export const updateUserAPI = async (id,data) => {
 
    axios.put(`/gameUser/${id}`, data)
}

export const getMasterInventoryAPI =  async (walletAddress) => {
    const newAddress = walletAddress && walletAddress.toLowerCase();
    const response = await axios.get(`/masterInventory?filter[currentOwner]=${newAddress}`);
   
     return response.data


}
*/


////////////////////////////

export const getRegisterAPI = async () => axios.get('/register')

export const getRegisterByIdAPI = async (id) => {
    axios.get(`/register/${id}`)
}



export const createRegisterAPI = async (user) => {

    axios.post(`/register`, user)
    
     console.log(user)
    
}



export const updateRegisterAPI = async (id,data) => {
 
    axios.put(`/register/${id}`, data)
}







