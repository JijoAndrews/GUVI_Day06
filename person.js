class person
{
    constructor(name="john doe",gender="male",age="34",ethinicity="cacusian",address="U.S.A",contactinfo="12230453230")//intializing data to the object
    {
        this.name=name;
        this.gender=gender;
        this.age=age;
        this.ethinicity=ethinicity;
        this.address=address;
        this.contactinfo=contactinfo;
    }

    displaybasicdetails(){console.log(`Name:${this.name},Age:${this.age},Contact:${this.contactinfo}`);}
    displayalldetails(){console.log(`Name:${this.name},Age:${this.age},Gender:${this.gender},Etinicity:${this.ethinicity},Address:${address},Contact:${this.contactinfo}`);}
}

//creating objects of person class.
var person1= new person();
var person2 = new person("Arya","Male","39","indian","anna nagar,chennai","9840898898");

//displaying basic details
person1.displaybasicdetails()
person2.displaybasicdetails();

//displaying all details
person1.displayalldetails()
person2.displayalldetails();