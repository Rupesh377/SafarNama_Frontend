import api from "./api";

export const getPublicUpcomingEvents = () => api.get("/public/upcoming-event");
export const getAllUpcomingEvents = () => api.get("/api/upcoming-events/upcoming-event");
export const getUpcomingEventById = (id) => api.get(`/api/upcoming-events/${id}`);
export const createUpcomingEvent = (data) => api.post("/api/upcoming-events", data);
export const deleteUpcomingEvent = (id) => api.delete(`/api/upcoming-events/${id}`);
