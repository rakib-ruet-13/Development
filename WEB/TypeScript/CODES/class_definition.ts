// Class Definitons
class Greeting{
    Name:string;
    static ObjCount:number=0;  

    constructor(){
        Greeting.ObjCount++;
    }

    greet():void{
        console.log("hello "+ this.Name);
    }
    setName(user:string): void{
        this.Name=user;
    }
}

// Class Usages
var object=new Greeting();
object.setName("VSS DEV");
object.greet();
console.log(Greeting.ObjCount);

const Name: string="Rakib";
var deg: string = "SE-L1";
console.log(Name+deg);

//Type Casting
var Count:number =5;
var StrCount: string = <string><any> Count;
console.log(Count*5);
console.log(StrCount+" Data here");

//Short Expression

Name == "Rakib"? console.log("if"):console.log("else");
Greeting.ObjCount == 2 ? console.log("true"):console.log("false");

// Function

showUserInfo("Ifte","efte@enosisbd.com");
showUserInfo("Protap","protap@enosisbd.com","Bangladesh");

function showUserInfo(name:string, email:string, country?:string):void{
    console.log("UserName: "+name);
    console.log("Mail Address: "+ email);

    if(country!=undefined)
    {
        console.log(country);
    }
}

//REST parameters
function multiAddition(...Values:number[]):number{

    var sum:number=0;
    for(var i=0; i<Values.length; i++)
    {
        sum+=Values[i];
    }
    return sum;
}
console.log(multiAddition(1,2,3,4,5));
console.log(multiAddition(1,2,3));

//Anonymous Function
var genHellowMessage= function():string
{
    return "This is a generated Message with anonymous function";
}
console.log(genHellowMessage());


// Lembda Function
// Like anonymous -> Syntax (Parameters) => { statements}

var fact_value = (x:number) => {
    if(x==1)
     return 1;
    else
     return x*fact_value(x-1);
}

console.log(fact_value(6));