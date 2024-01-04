import { api, apiWithHeader } from "./axiosConfig";

export const login = (data) => {
  console.log("data", data);
  return api.post("/api/payers/login", data);
};

export const createUser = (token, data) => {
  return apiWithHeader(token).post("/api/payers/create-user", data);
};

export const getLeadByEmployee = (token, id) => {
  return apiWithHeader(token).get(`/leads/emp/${id}`)
}

export const getAllLeadByAdmin = (token,offset=1) => {
  return apiWithHeader(token).get(`/leads?limit=10&offset=${offset}`)
}

export const getAllLeadId = (token, id) => {
  return apiWithHeader(token).get(`/leads${id}`)
}

export const getSingleLead = (token, id) => {
  return apiWithHeader(token).get(`/leads/${id}`)
}

export const updateLead = (token, id, data) => {
  console.log("token, id, data", token, id, data)
  return apiWithHeader(token).put(`/leads/${id}`, data)
}

export const assignLead = (token, id, data) => {
  return apiWithHeader(token).post(`/leads/emp/${id}`, data)
}

export const getAllEmployees = (token) => {
  return apiWithHeader(token).get( '/all-employees')
}

export const uploadbulklead = (token,data) => {
  return apiWithHeader(token).post( '/leads/imports',data)
}
