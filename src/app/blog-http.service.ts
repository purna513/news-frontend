import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {  

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = 'OWQ5NjQ2MmU4ZWVhNTI4MjczZTllN2VkMWVmNGM0NGFiODUxZDNjMTFlOTBmNTMwYmQ1MmUxNmQzMWEwYzQ5MzAyNTM2YTNhNmNhOGQ5YjNhYzIzYWJiOGQ4Nzk3NGM0NDc3Y2VjOWY4MTI2ZTU2YTA2NDFlZjU1YWJjOGIzMzA1OQ==';

  constructor(private _http:HttpClient) { 
    console.log('blog-http-service was callled')
  }
  public getAllBlogs():any{
    
    let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authToken);
    console.log(myResponse);
    return myResponse;
  
  }
  
  public getSingleBlogInfo(currentBlogId):any {
    console.log(this.baseUrl+'/view/'+currentBlogId+'?authToken='+ this.authToken)

    let myResponse = this._http.get(this.baseUrl+'/view/'+currentBlogId+'?authToken='+ this.authToken);
    return myResponse;
  }

  public createBlog(blogData): any{
    let myResponse = this._http.post(this.baseUrl+'/create/'+''+'?authToken='+ this.authToken,blogData);
    return myResponse;

  }
  
  public deleteBlog(blogId): any{
    let data={};
    let myResponse = this._http.post(this.baseUrl+'/'+ blogId+'/delete/'+'?authToken='+ this.authToken,data);
    return myResponse;

  }
  
  public editBlog(blogId,blogData): any{
    console.log(this.baseUrl+'/'+'edit/'+'?authToken='+ this.authToken + "edit"+blogData)
    let myResponse = this._http.put(this.baseUrl+'/'+blogId+'/edit/'+'?authToken='+ this.authToken,blogData);
    return myResponse;

  }
}
