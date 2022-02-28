interface user
    {
        userid:string;
        pass:string;
    }
export default class Signin
    {
        USER()
        {
            
            let teacher:user[]=[
            {
                userid:"faizan sir",
                pass:"password"
            },{
                userid:"anurag sir",
                pass:"qwerty"
            },{
                userid:"priya ma'am",
                pass:"qwerty"
            }];
            for(let t=0,s=0;t<=2||s<=3;t++,s++)
            {
                console.log("Teacher->",teacher[t]," ");
            }    
        }
    
    }
  //  var obj=new Signin();
   // obj.USER();