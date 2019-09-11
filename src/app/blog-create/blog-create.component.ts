import { Component, OnInit } from '@angular/core';
import { BlogHttpService} from '../blog-http.service';
import { ActivatedRoute, Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router:Router,public toastr: ToastrService) {
      
  }
    public blogTitle : string;
    public blogBodyHtml : string;
    public blogdescription : string;
    public blogCategory : string;
    public possibleCategories =["comeddy", "Drama", "Action", "Technology"];

    
  ngOnInit() {
  }
   
  public createBlog(): any{
    let blogData = {

      title : this.blogTitle,
      description : this.blogdescription,
      blogBody : this.blogBodyHtml,
      category : this.blogCategory
    }
    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(
      data =>{
        console.log("Blog Created");
        console.log(data);
        this.toastr.success('blog posted successfully');
        setTimeout(()=>{
          this.router.navigate( ['/blog',data.blogId]);
        },1500)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error('blog post have errors heck');
      }
    )
    
  }


}

