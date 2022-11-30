import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  allStudent:any;
  allCity = ["indore", "mumbai", "pune", "delhi", "bhopal"];

  student : FormGroup;
  checkForm = false;
  stu:any;

  constructor(
    private _stu : StudentService,
    private _fb : FormBuilder
  ) {
    
    this.fetchAllStudent();

    this.student = this._fb.group({
      id : null,
      name : ["", Validators.required],
      age : [null, Validators.required],
      city : ["", Validators.required],
    })

   }

  ngOnInit(): void {
  }

  fetchAllStudent(){
    this._stu.getAllStudent().subscribe(result=>{
      this.allStudent = result;
    })
  }


  add(closeBtn:any){

    if(this.student.invalid){
      this.checkForm = true;
      return;
    }

    if(this.stu){
      this._stu.updateStudent(this.student.value, this.stu.id).subscribe(result=>{
        let n = this.allStudent.indexOf(this.stu);
        this.allStudent[n] = result;
        // console.log(result);
        closeBtn.click();
        // this.fetchAllStudent();
      })
    }else{
      this._stu.addStudent(this.student.value).subscribe(result=>{
        this.allStudent.push(result);
        closeBtn.click();
      })
    }


   
    
  }

  clearObj(){
    this.stu = undefined;
  }

  askDelete(obj:any){
    this.stu = obj;
  }
  confDelete(btn:any){
    this._stu.deleteStudent(this.stu.id).subscribe(result=>{
      let n = this.allStudent.indexOf(this.stu);
      this.allStudent.splice(n , 1);
      btn.click();
    })
  }

  askUpdate(obj:any){
    this.stu = obj;
    this.student.setValue(this.stu);
  }
}
