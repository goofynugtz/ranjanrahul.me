import mongodb from "mongodb";

let blogs : mongodb.Collection;

export default class PersonalBlogDAO {
    //For injecting db into app
    static async injectDB(conn: mongodb.MongoClient) {
        if (blogs) return ;
        try {
            // console.log(process.env.DB_URI);
            // console.log(conn);
            blogs = await conn.db("blog").collection("personal");
            // console.log("injected:" , blogs);
        } catch (error) {
            console.error("Unable to inject Database.", error);
        }
    }

    static async getBlogs({
        filters = null
    } = {}) {
        let query

        if (filters) {
            //@ts-ignore
            if ("name" in filters) {//@ts-ignore
                query = { $text: { $search: filters["name"] } }
            }//@ts-ignore 
            else if ("tag" in filters) {//@ts-ignore
                query = { "tag": { $all: filters["tag"]} }
            }
        }

        let cursor

        try {
            cursor = await blogs
            .find(query)
        } catch (error) {
            console.error(`Unable to issue find command, ${error}`)
            return { blogsList: [] }
        }
        
        try {
            const blogsList = await cursor.toArray();
            // console.log(blogsList);
            return { blogsList }
        } catch (error) {
            console.error("Unable to convert cursor to array or problem counting documents which ofc I'm not!");
            return { blogsList: [] }
        }
    }

}