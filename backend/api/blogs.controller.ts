import blogsDAO from '../dao/blogDAO';
import { Request, Response, NextFunction } from 'express';

export default class BlogsController {
    static async apiGetBlogs(req:Request, res:Response, next:NextFunction) {
        let filters:any = {}
        if (req.query.name) {
            filters.name = req.query.name;
        } else if (req.query.tag) {
            filters.tag = req.query.tag;
        }

        const { blogsList } = await blogsDAO.getBlogs({
            filters
        })

        let response = {
            blogs : blogsList,
            filters: filters
        }

        res.json(response);
    }
}