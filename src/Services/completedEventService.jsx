import api from "./api";

export const getPublicCompletedEvents = () => api.get("/public/completed-event");
export const getAllCompletedEvents = () => api.get("/api/completed-events/completed");
export const getCompletedEventById = (id) => api.get(`/api/completed-events/${id}`);
export const createCompletedEvent = (data) => api.post("/api/completed-events", data);
export const deleteCompletedEvent = (id) => api.delete(`/api/completed-events/${id}`);
