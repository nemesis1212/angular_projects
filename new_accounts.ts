const ps = require("prompt-sync");
const prompt=ps();
interface user
{
        userid:string;
        pass:string;
}
export class Login
{
    USER()
    { 
        let student:user[]=new Array();
        let teacher:user[]=new Array();
        let n:number=Number(prompt("Enter the number of students:"));
        let nt:number=Number(prompt("Enter the number of teachers:"));
        console.log("Enter the values for students: ");        
        for(let s:number=0;s<n;s++)
        {
            student[s]=
            {
                userid:prompt("entre your username: "),
                pass:prompt("enter password: ")
                
            };
            
        }
        console.log("Enter the values for teachers: ");        
        for(let t:number=0;t<nt;t++)
        {
            teacher[t]=
            {
                userid:prompt("entre your username: "),
                pass:prompt("enter password: ")
                
            };
            
        }
        console.log("Information for students:");
        for(let s:number=0;s<n;s++)
        {
            console.log(student[s],"   ")
        }
        console.log("Information for teachers:");
        for(let t:number=0;t<nt;t++)
        {
            console.log(teacher[t],"   ")
        }
        
    }    

}
var obj=new Login();
obj.USER();