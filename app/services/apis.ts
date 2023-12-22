import api from "./config";

export const getAllPosts = () => api.get('posts')

export const getPostDetail = (id: number) => api.get(`posts/${id}`)