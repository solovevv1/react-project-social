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
    },
    getProfile(userId) {
        console.log('Obsolete method. Use profile API')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`) 
    },
    updateStatus(status) {
        return instance
            .put(`profile/status/`, {status: status}) 
    }
}

export const authAPI = {
    me() {
        return instance
            .get(`/auth/me`)
    }

}