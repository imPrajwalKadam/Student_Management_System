import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor( private http:HttpClient) { }

  postStudent(data:any)
  {
    return this.http.post<any>(' http://localhost:3000/posts/',data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getStudent()
  {
    return this.http.get<any>(' http://localhost:3000/posts/').pipe(map((res:any)=>{
      return res;
    }))
  }

  updateStudent(data:any, ID:number)
  {
    return this.http.put<any>(' http://localhost:3000/posts/'+ID,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteStudent( ID:number)
  {
    return this.http.delete<any>('http://localhost:3000/posts/'+ID).pipe(map((res:any)=>{
      return res;
  }))
  }
}
