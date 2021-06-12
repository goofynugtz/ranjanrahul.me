import axios from 'axios';

export default axios.create({
    baseURL: "https://webhooks.mongodb-realm.com/api/client/v2.0/app/blog-xtmkd/service/blogs/incoming_webhook/blogs",
    headers: {
        "Content-type": "application/json"
    }
});