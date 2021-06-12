import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
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
            <hr />
            
                {blogs.map((blog) => {
                    //@ts-ignore
                    const title = `${blog.title}`
                    //@ts-ignore
                    const description = `${blog.description}`
                    //@ts-ignore
                    const date = `${blog.createdAt}`
                    //@ts-ignore
                    const tags = blog.tags

                    // console.log(html);

                    return (
                    <div className="blog__posts">
                        <div className="blog__posts--left">
                            {date}
                        </div>
                        <div className="blog__posts--right">
                            <span className="blog__posts__title">
                                <h3>{title}</h3>
                            </span>
                            <span className="blog__posts__description">
                                {description}
                            </span>
                        </div>
                    </div>
                    )
                })}
            
        </div>
    )
}

export default Blogs;