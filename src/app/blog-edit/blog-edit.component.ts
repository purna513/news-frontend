import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router:Router,public toastr: ToastrService) {}

    public currentBlog;
    public possibleCategories =["comeddy", "Drama", "Action", "Technology"];

    
  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log("edit" + myBlogId);
    this.blogHttpService.getSingleBlogInfo(myBlogId).subscribe(

      data => {
        console.log("edit was intialized"+data);
        this.currentBlog = data["data"];
      },
      error =>{
        console.log("some error occured while getting data from edit");
        console.log(error.errorMessage);
      })
  }
   
  public editThisBlog(): any{
    this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      data =>{
        console.log("Blog Edited");
        console.log(data);
        this.toastr.success('blog edited successfully');
        setTimeout(()=>{
          this.router.navigate( ['/blog',this.currentBlog.blogId]);
        },1000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error('blog post have errors heck');
      }
    )
    
  }


}

