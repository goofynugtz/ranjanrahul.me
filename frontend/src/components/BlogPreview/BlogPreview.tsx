import React, { useEffect, useState } from 'react'
import './BlogPreview.scss';
import BlogsDataService from '../../services/blogs';


const BlogPreview: React.FC = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        retrieveBlogs();
    }, []);
    
    
    const retrieveBlogs = () => {
        console.log("Hello");
        BlogsDataService.getAll()
        .then((response) => {
            console.log(response);
            setBlogs(response.data.blogs);
            ;
        })
        .catch (error => {
            console.error(`Something wrong occured in BlogPreview FC, ${error}`);
        })
    }
    
    console.log(blogs);

    return (
        <div className="blog-home">
            <div className="blog-home--bg-heading">
                <h1>Blogs</h1>
            </div>
            {/* <div className="vr"></div> */}
            <div className="blog-home__body">
            
            {blogs.map((blog) => {
            //@ts-ignore
            const title = `${blog.title}`
            //@ts-ignore
            const description = `${blog.description}`
            //@ts-ignore
            const date = `${blog.createdAt}`
            //@ts-ignore
            const tags = blog.tags
                return (
                    <div className="blog-home--cards">
                        <div className="blog-home__title">
                            <h3>{title}</h3>
                        </div>
                        <div className="blog-home__date">
                            {date}
                        </div>
                        <div className="blog-home__description">
                            {description}
                        </div>
                        <div className="blog-home__tags">
                        {tags.map((tag: String) => {
                            return (
                                <span className="blog-home__tags--tag">
                                    {tag}
                                </span>
                            )
                        })}
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default BlogPreview