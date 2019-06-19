// Class Definitons
var Greeting = /** @class */ (function () {
    function Greeting() {
        Greeting.ObjCount++;
    }
    Greeting.prototype.greet = function () {
        console.log("hello " + this.Name);
    };
    Greeting.prototype.setName = function (user) {
        this.Name = user;
    };
    Greeting.ObjCount = 0;
    return Greeting;
}());
// Class Usages
var object = new Greeting();
object.setName("VSS DEV");
object.greet();
console.log(Greeting.ObjCount);
var Name = "Rakib";
var deg = "SE-L1";
console.log(Name + deg);
//Type Casting
var Count = 5;
var StrCount = Count;
console.log(Count * 5);
console.log(StrCount + " Data here");
//Short Expression
Name == "Rakib" ? console.log("if") : console.log("else");
Greeting.ObjCount == 2 ? console.log("true") : console.log("false");
// Function
showUserInfo("Ifte", "efte@enosisbd.com");
showUserInfo("Protap", "protap@enosisbd.com", "Bangladesh");
function showUserInfo(name, email, country) {
    console.log("UserName: " + name);
    console.log("Mail Address: " + email);
    if (country != undefined) {
        console.log(country);
    }
}
//REST parameters
function multiAddition() {
    var Values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Values[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < Values.length; i++) {
        sum += Values[i];
    }
    return sum;
}
console.log(multiAddition(1, 2, 3, 4, 5));
console.log(multiAddition(1, 2, 3));
//Anonymous Function
var genHellowMessage = function () {
    return "This is a generated Message with anonymous function";
};
console.log(genHellowMessage());
// Lembda Function
// Like anonymous -> Syntax (Parameters) => { statements}
var fact_value = function (x) {
    if (x == 1)
        return 1;
    else
        return x * fact_value(x - 1);
};
console.log(fact_value(6));
