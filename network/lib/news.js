import { client } from "../apiClient";

export function getBlogs() {
    return client.get('/get/news')
}

export function deleteBlog(id) {
    return client.delete(`/delete/news/${id}`)
}

export function addNews(data) {
    return client.post('/add/news', {
        username: data.username,
        title: data.title,
        content: data.content
    });
}

export function getNewsID(id) {
    return client.get(`/get/news/${id}`)
}