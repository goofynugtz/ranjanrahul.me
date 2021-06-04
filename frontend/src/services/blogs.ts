import http from "../http-common";

class BlogsDataService {
    getAll() {
        return http.get(``);
    }

    get(slug: String) {
        return http.get(`/:${slug}`);
    }

    find(query:any, by = "name"){
        return http.get(`?${by}=${query}`);
    }
}

export default new BlogsDataService();