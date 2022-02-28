function emp<t>(prod:t):t
{
   return prod;
}
var result=emp<number>(100);
var result1=emp<string>("ayush pradhan");
console.log(result);
console.log(result1);
