import axios from "axios";

export default {
    searchArticles: (topic, startDate, endDate) => {
        return axios.get(`/api/search/?end=${endDate}&topic=${topic}&start=${startDate}`);
    },

    getArticles: () => {
        return axios.get("/api/article/");
    },

    getArticle: (id) => {
        return axios.get("/api/article/" + id);
    },

    saveArticle: (saveData) => {
        return axios.post("/api/article/" + saveData._id, saveData);
    },

    deleteArticle: (id) => {
        return axios.delete("/api/articles/" + id);
    }
};
