import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [{

    "blogId": "1",
    "lastModified": "2019-10-11",
    "created": "2019-09-10",
    "tags": [],
    "author": "admin",
    "category": "comedy",
    "isPublished": true,
    "views": 0,
    "bodyHTML": "this is blog body",
    "description": "description",
    "title": "this is blog1"
  },
  {
    "blogId": "2",
    "lastModified": "2019-10-11",
    "created": "2019-09-10",
    "tags": [],
    "author": "admin",
    "category": "horror",
    "isPublished": true,
    "views": 90,
    "bodyHTML": "this is blog body 2",
    "description": "description",
    "title": "this is blog1"
  },
  {
    "blogId": "3",
    "lastModified": "2019-10-11",
    "created": "2019-09-10",
    "tags": [],
    "author": "admin",
    "category": "fiction",
    "isPublished": true,
    "views": 900,
    "bodyHTML": "this is blog body3",
    "description": "jfjff",
    "title": "this is blog3"
  }
]

public currentBlog;

public getAllBlogs():any{
  return this.allBlogs;

}

public getSingleBlogInfo(currentBlogId):any{

  for(let blog of this.allBlogs){
    if(blog.blogId==currentBlogId){
      this.currentBlog=blog;
    }
  }
  return this.currentBlog;
}

  constructor() { 
    console.log("Blog srvice is intialized")
  }
  }
