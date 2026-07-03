import api from "./api";

export const getPublicUpcomingTreks = () => api.get("/public/upcoming-trek");
export const getAllUpcomingTreks = () => api.get("/api/upcoming-trek/upcoming-trek");
export const getUpcomingTrekById = (id) => api.get(`/api/upcoming-trek/${id}`);
export const createUpcomingTrek = (data) => api.post("/api/upcoming-trek", data);
export const deleteUpcomingTrek = (id) => api.delete(`/api/upcoming-trek/${id}`);
export const uploadImage = (file) => {
  const form = new FormData();
  form.append("file", file);
  return api.post("/api/admin/upload", form, { headers: { "Content-Type": "multipart/form-data" } });
};
