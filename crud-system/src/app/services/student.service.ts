import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl = "http://localhost:3000/student/";
  constructor(
    private _http : HttpClient
  ) { }


  getAllStudent(){
    return this._http.get<Student>(this.apiUrl);
  }
  addStudent(obj:Student){
    return this._http.post<Student>(this.apiUrl, obj);
  }
  deleteStudent(id:number){
    return this._http.delete<Student>(this.apiUrl+id);
  }
  updateStudent(obj:Student, id:number){
    return this._http.put<Student>(this.apiUrl+id, obj);
  }
  getStudent(id:number){
    return this._http.get<Student>(this.apiUrl+id);
  }

}
