import { useState, useEffect } from 'react';
import BlogsDataService from '../../services/blogs';
import './Blogs.scss';

const Blogs : React.FC = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        retrieveBlogs();
    }, []);
    
    
    const retrieveBlogs = () => {
        console.log("Hello");
        BlogsDataService.getAll()
        .then((response) => {
            // console.log(response);
            setBlogs(response.data.blogs);
            ;
        })
        .catch (error => {
            console.error(`Something wrong occured in Blogs FC, ${error}`);
        })
    }

    console.log(blogs);

    return (
        <div className="blog">
            <div className="blog__heading">
                <h1>All Posts</h1>
                <input placeholder="Search Articles"></input>
            </div>
            <div className="blog__posts">
                {blogs.map((blog) => {
                    //@ts-ignore
                    const title = `${blog.title}`
                    //@ts-ignore
                    const description = `${blog.description}`
                    //@ts-ignore
                    const date = `${blog.createdAt}`
                    //@ts-ignore
                    const tags = blog.tags
                    //@ts-ignore
                    const html = blog.sanitizedHtml

                    return (
                    <>
                        <div className="blog__posts--left">
                            {date}
                        </div>
                        <div className="blog__posts--right">
                            {html}
                        </div>
                    </>
                    )
                })}
            </div>
        </div>
    )
}

export default Blogs;