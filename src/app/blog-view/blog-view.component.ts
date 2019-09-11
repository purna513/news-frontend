import { Component, OnInit } from '@angular/core';
//importing activate route for capturing link
import {ActivatedRoute, Router} from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import { Location} from '@angular/common';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private router:Router,public blogservice:BlogService, public blogHttpService: BlogHttpService,public toastr: ToastrService, private location: Location) {
      console.log("constructor is called");
   }
public currentBlog;
  ngOnInit() {
    console.log("ng Initiatd");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInfo(myBlogId).subscribe(

          data => {
            console.log(data);
            this.currentBlog = data["data"];
          },
          error =>{
            console.log("some error occured");
            console.log(error.errorMessage);
          }
    )
    console.log(this.currentBlog);
  }

  public goBackToPreviousPage(){
    this.location.back();
  }

  public deleteThisBlog(): any{
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data=>{
        console.log(data);
        this.toastr.success("Blog Deleted succesfully");
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },2000)
      },
      error=>{
        console.log("some error occured");
        this.toastr.error("Deletetion unsucess",'Error');
      }
    )
  }

  

}
