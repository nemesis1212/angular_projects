class genericClass<f,k>
{
    userid:f;
    tech:k;
    constructor(id:f,technology:k)
    {
        this.userid=id;
        this.tech=technology;
    }
    showinfo():void
    {
        console.log(`Userid:${this.userid},talk on technology:${this.tech}`);
    }
}
let obj=new genericClass(111,"asp.net");
console.log(obj.showinfo());
