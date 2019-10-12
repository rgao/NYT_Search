import axios from "axios";

export default {
    searchArticles: (topic, startDate, endDate) => {
        return axios.get(`/api/search/?end=${endDate}&topic=${topic}&start=${startDate}`);
    },

    getArticles: () => {
        return axios.get("/api/article/");
    },

    saveArticle: saveData => {
        console.log(saveData);
        return axios.post("/api/article/", saveData);
    },

    deleteArticle: id => {
        return axios.delete("/api/article/" + id);
    },

    getArticle: id => {
        return axios.get("/api/article/" + id);
    }
};
