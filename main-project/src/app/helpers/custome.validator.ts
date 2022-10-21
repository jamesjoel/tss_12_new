import { FormGroup } from '@angular/forms';
export function checkRePass()
{
    return function(abc:FormGroup){
        let a = abc.controls['password'];
        let b = abc.controls['re_password'];

        if(b.errors && !b.errors['passErr'])
        {
            return;
        }

        if(a.value != b.value)
        {
            b.setErrors({ passErr : true });   
        }
    }
}
export function checkNum()
{
    return function(xyz : FormGroup){
        let a = xyz.controls['contact'];

        if(a.errors && !a.errors['numErr'])
        {
            return;
        }

        if(isNaN(a.value))
        {
            a.setErrors({ numErr : true });
        }
    }
}

export function checkLength()
{
    return function(myform : FormGroup){
        let a = myform.controls['contact'];

        if(a.errors && !a.errors['lenErr'])
        {
            return;
        }


        if(a.value.length != 10)
        {
            a.setErrors({ lenErr : true });
        }
    }
}

export function strongPass()
{
    return function(form:FormGroup){
        let a = form.controls['password'];
        let str = /^(?=.*\d)(?=.*[!@#$%^&*-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        // console.log(a.value);
        if(a.errors && ! a.errors['strongErr'])
        {
            return;
        }

        if(str.test(a.value)==false)
        {
            a.setErrors({ strongErr : true})
        }
    }
}




/*
app.listen(3000, function(){

})


*/