import axios from "axios";

// const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "3602aab4-42b1-40e7-96b3-b6ea6c6a9bae"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance
            .post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance
            .delete(`follow/${userId}`)
    }
}