import { client } from "../apiClient";

export function getForumPosts() {
    return client.get('/get/forum/posts');
}

export function deletePost(id) {
    return client.delete(`/delete/forum/${id}`)
}

export function addPost(data, userID, pic, username) {
    return client.post('/add/forum/post', {
        uid: userID,
        username: username,
        userPic: pic,
        title: data.title,
        content: data.content,
        tag: data.tag
    });
}

export function getPostByID(id) {
    return client.get(`/get/forum/news/${id}`)
}