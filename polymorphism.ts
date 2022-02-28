class Employee
{
   public firstname:string;
    public lastname:string;
    public id:number;
    public print():void
    {
        console.log(`First name:${this.firstname},Last name:${this.lastname}, Employee id:${this.id}`);
    }
}
class Developer extends Employee
{
    public firstname="Ayush";
    public lastname="Pradhan";
    public id=111;
    public print()
    {
        super.print();
        console.log("Executing Developer's print...");
    }
}
class Admin extends Employee
{
    public firstname="Satya prakash";
    public lastname="Pradhan";
    public id=100;
    public print()
    {
        super.print();
        console.log("Executing Admin's print().....");
    }
    
}
