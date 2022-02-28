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
        for(let s:number=0;s<n;s++)
        {
            student[s]=
            {
                userid:prompt("entre your username: "),
                pass:prompt("enter password: ")
                
            };
            
        }
        for(let s:number=0;s<n;s++)
        {
            console.log(student[s],"   ")
        }
        
    }    

}
var obj=new Login();
obj.USER();