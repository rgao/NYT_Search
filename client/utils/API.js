import axios from "axios";

export default {
    searchArticles: function (queryData) {
        console.log(queryData)
        return axios.get("/api/search/", queryData);
    },

    getArticles: () => {
        return axios.get("/api/article/");
    },

    getArticle: (id) => {
        return axios.get("/api/article/" + id);
    },

    saveArticle: (id, saveData) => {
        return axios.post("/api/article/" + id, saveData);
    },

    deleteArticle: (id) => {
        return axios.delete("/api/articles/" + id);
    }
};
