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

/*let mydata:any;
mydata="Hello"+" "+"Welcome TypeScript";
console.log(mydata);
mydata=12+23;
console.log(mydata);
let mystring:string;
mystring="Raju Honey";
console.log(mystring.slice(0,3));
let myNumber:number;
myNumber=7;
console.log(myNumber.toString()+" my Result");*/

//let mysArray:string[];
//let mynArray:number[];
/*let mysArray:Array<string>;
let mynArray:Array<number>;
mysArray=["Hello","TypeScript"];
mynArray=[1,2,3,4]
console.log(mysArray);
console.log(mynArray);
console.log(mynArray[2]);
for(var n=0;n<mynArray.length;n++)
{
    console.log(mynArray[n]);
}
mysArray.forEach(function(value)
{
    console.log(value);
})*/

/*let myTuple:[number,string,Number]
myTuple=[1,"TypeScript",9];
console.log(myTuple);


//void
let myvar:void;
myvar=undefined;
console.log(myvar);


//null
let myvar1:null;
myvar1=null;
console.log(myvar1);


//push pop
console.log(myTuple.pop());
myTuple.push(23);
console.log(myTuple);*/

//enum
/*
enum myEnum{sunday=0,monday,tuesday,wednesday};
console.log(myEnum.tuesday);

//functions
function myfunction(num1:number,num2:number):number
{
    return(num1+num2);
}
console.log(myfunction(13,45));
function addfunction(num1:any,num2:any):any
{
return(num1+num2);
}
console.log(addfunction(true,"gany"));
function addNumber(num1:any,num2:any):any{
    if(typeof(num1)=='string' && typeof(num2)=='string')
    {
        num1=parseInt(num1);
        num2=parseInt(num2);
        return(num1+num2);
    }
    else
    return(num1+num2);
}
console.log(addNumber('23','34'));
*/

//interface
/*interface myinterface
{
    name:string;
    Title:string;
}
function Ifunction(mydata:myinterface):string
{
    return (mydata.name+""+mydata.Title);
}
let dat={name:"david",Title:"Assosiate"}
console.log(Ifunction(dat));
*/


//class
/*
class User
{
    id:number;
    name:string;
    email:string;
    age:number;
    constructor (id:number,name:string,email:string,age:number)
    {
        this.id=id;
        this.name=name;
        this.email=email;
        this.age=age;
        console.log("User Created");
    }
}
let firstuser=new User(1,"gany","g@gmail.com",22);
console.log(firstuser.id+""+firstuser.name+""+firstuser.email+""+firstuser.age);
*/

//class with functions or methods
/*
class User
{
    private id:number;
    private name:string;
    private email:string;
    private age:number;
    constructor (id:number,name:string,email:string,age:number)
    {
        this.id=id;
        this.name=name;
        this.email=email;
        this.age=age;
        console.log("User Created");
    }
    register()
    {
        console.log(this.id+""+this.name+""+this.email+""+this.age);
        console.log(firstuser.id+""+firstuser.name+""+firstuser.email+""+firstuser.age);
    }
    getAge(id:number):number
    {
        if(this.id=id)return this.age;
        else return 0;
    }
}
let firstuser=new User(1,"gany27","g@gmail.com",22);
firstuser.register();
*/

/*
class User
{
 protected Id:number;
    protected Name:string;
    protected Email:string;
    protected Age:number;
   constructor (id:number,name:string,email:string,age:number)
   {
       this.Id=id;
       this.Name=name;
       this.Email=email;
       this.Age=age;
       console.log("User created");
   }

   register()
   {
       console.log(this.Name+"Successfully created");
       console.log(this.Id+" "+this.Name+" "+this.Email+" "+this.Age);
   }
   getAge(id:number):number
   {
       if(this.Id==id)
       return this.Age;
       else
       return 0;
   }
}
class AdminUser extends User
{
    Type:string;
constructor (id:number,name:string,email:string,age:number,type:string)
{
  
    super(id,name,email,age);
    this.Type=type;
}
displayAdmin()
{
    console.log("You are "+this.Type+" Admin")
    console.log(this.Id+" "+this.Name+" "+this.Email+" "+this.Age);
}

}
let cUser=new AdminUser(1,"gany","raj@cts.com",21,"Accountant");
cUser.displayAdmin();
*/

interface Iuser
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
    register():void;
    getAge(id:number):number;
}

class User implements Iuser
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
    constructor (id:number,name:string,email:string,age:number)
   {
       this.Id=id;
       this.Name=name;
       this.Email=email;
       this.Age=age;
       console.log("User created");
   }
   register()
   {
       console.log(this.Name+"Successfully created");
       console.log(this.Id+" "+this.Name+" "+this.Email+" "+this.Age);
   }
   getAge(id:number):number
   {
       if(this.Id==id)
       return this.Age;
       else
       return 0;
   }
}
let cUser=new User(1,"ganey","raj@cts.com",21);
cUser.register();
console.log(cUser.getAge(1));