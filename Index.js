//console.log("Hello from TypeScript");
/*let mystring:string;
let myNumber:number;
let myStatus:boolean;
mystring="TypeScript";
myNumber=120;
myStatus=true;
console.log(mystring);
console.log(myNumber);
console.log(myStatus);*/
var User = /** @class */ (function () {
    function User(id, name, email, age) {
        this.Id = id;
        this.Name = name;
        this.Email = email;
        this.Age = age;
        console.log("User created");
    }
    User.prototype.register = function () {
        console.log(this.Name + "Successfully created");
        console.log(this.Id + " " + this.Name + " " + this.Email + " " + this.Age);
    };
    User.prototype.getAge = function (id) {
        if (this.Id == id)
            return this.Age;
        else
            return 0;
    };
    return User;
}());
var cUser = new User(1, "ganey", "raj@cts.com", 21);
cUser.register();
console.log(cUser.getAge(1));
