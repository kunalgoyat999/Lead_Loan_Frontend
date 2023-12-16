import {api, apiWithHeader} from './axiosConfig';

export const login = data => {
  return api.post('/api/payers/login', data);
};

export const createUser = (token, data) => {
  return apiWithHeader(token).post('/api/payers/create-user', data);
};










export const signUp = data => {
  return api.post(`/api/v1/users/verifyUserId?userId=${data}`)
}

export const forgotPassword = data => {
  return api.post(`/api/v1/users/forgotPassword?userId=${data}`)
}

export const verifyOtpSetPassword = (userId, otp, password) => {
  console.log("userId, otp, password", userId, otp, password)
  return api.post(`/api/v1/auth/verify-otp-and-set-password?userId=${userId}&otpCode=${otp}&newPassword=${password}`)
}

export const createLead = (data, token) => {
  return apiWithHeader(token).post(`/api/lead/v1/createLead`, data)
}

export const getPincodeData = (token, pincode) => {
  return apiWithHeader(token).get(`/api/v1/master/postalrecord?pincode=${pincode}`)
}

export const getAllLead = (token, page, data) => {
  return apiWithHeader(token).post(`/api/lead/v1/getAllLeads?page=${page}&size=12`, data)
}

export const homeDashboard = (token, data) => {
  return apiWithHeader(token).post(`/los/api/lead/v1/getLeadCounts`, data)
}

export const getLeadById = (token, id) => {
  return apiWithHeader(token).get(`/api/lead/v1/getLeadById?leadId=${id}`)
}

export const addFollowUp = (token, data) => {
  return apiWithHeader(token).post(`/api/lead/v1/addLeadFollowUp`, data)
}

export const getProfile = (token) => {
  return apiWithHeader(token).get(`/user-service/api/users/v1/fetchProfile`)
  .then((res)=> {
    console.log("resskun", res?.data?.data)
    return res?.data.data
  })
}

export const logout = (token) => {
  return apiWithHeader(token).get(`/api/v1/logout`)
}