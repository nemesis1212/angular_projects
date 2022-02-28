interface user
    {
        userid:string;
        pass:string;
    }
export default class Signin
{
    USER()
    {
        let student:user[]=[
        {
            userid: "nemesis",
            pass: "12345"
        },{
            userid:"ayush pratap",
            pass:"54321"
        },{
            userid:"prateek",
            pass:"asdfjkl"
        },{
            userid:"abhijeet",
            pass:"1234567"
        }];
        let teacher:user[]=[
        {
            userid:"faizan sir",
            pass:"password"
        }];
        for(var s=0;s<=3;s++)
        {
            console.log(student[s]," ");
        }
    }
}
//var obj=new Signin();
//obj.USER();