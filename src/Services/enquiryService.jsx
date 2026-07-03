import api from "./api";

export const submitEnquiry = (data) => api.post("/public/enquiry", data);
export const getAllEnquiries = () => api.get("/api/enquiries");
export const deleteEnquiry = (id) => api.delete(`/api/enquiries/${id}`);
