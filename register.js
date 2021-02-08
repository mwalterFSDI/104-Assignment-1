const salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        number:"192-k"
    },
    hours:{
        open:"8:00 am",
        close:"5:00 pm"
    },
    pets:[
        {name:"Scooby", age:50,breed:"Dane", gender:"Male",owner:"Shaggy", phone:"555-555-555"},
        {name:"Scrapy", age:40,breed:"Dane",gender:"Male",owner:"Shaggy", phone:"555-555-555"},
        {name:"Speedy", age:60,breed:"Mixed",gender:"Male",owner:"Bugs", phone:"444-444-444"},
        {name:"Butch", age:20,breed:"Pitbull",gender:"Male", owner:"Matt", phone:"555-555-555"},
        {name:"Carl", age:22,breed:"Mixed",gender:"Female", owner:"Steve", phone:"333-333-333"}
    ]
}
/*
    name, age, breed, gender, service, owners name, contact phone
*/
document.getElementById("pets").innerHTML=`
 <p> ${salon.pets.name} </p>
 
`;
for(var i=0;i<5;i++){
    document.write(salon.pets[i].name);
}




document.getElementById("footer-text").innerHTML=`
    <p> ${salon.name}  </p>
    <p> ${salon.address.street}, ${salon.address.number} </p>
    <p> It opens from ${salon.hours.open} to ${salon.hours.close}</p>
`;


//create the Pet Class

class Pet{
    constructor(name,age,breed,gender,service,owner,phone){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
    }
}

//create pets using the constructor
var scooby=new Pet("Scooby",50,"Dane","Male","Full Service", "Shaggy","555-555-5555");
var scrapy=new Pet("Scrapy",40,"Dane","Male","Shower","Shaggy","555-555-5555"); 
var speedy=new Pet ("Speedy",80,"Mixed", "Male","Nails cut","Bunny","333-333-3333");

//push the pets into the array
//salon.pets=[scooby,scrapy,speedy];
salon.pets.push(scooby);
salon.pets.push(scrapy);
salon.pets.push(speedy);
console.log(salon.pets);
//create the function register
function register(){
    // get the info from the inputs
    var txtName=document.getElementById("petNameTxt");
    var txtAge=document.getElementById("petAgeTxt");
    var txtBreed=document.getElementById("petBreedTxt");
    var txtGender=document.getElementById("petGenderTxt");
    var txtService=document.getElementById("petServiceTxt");
    var txtOwner=document.getElementById("ownerNametTxt");
    var txtPhone=document.getElementById("ownerPhoneTxt");
    
    console.log(txtName.value);
    console.log(txtAge.value);
    console.log(txtBreed.value);
    console.log(txtGender.value);
    console.log(txtService.value);
    console.log(txtOwner.value);
    console.log(txtPhone.value);
    // create a generic object
    var thePet=new Pet(txtName.value,txtAge.value,txtBreed.value,txtGender.value,txtService.value,txtOwner.value,txtPhone.value);
    console.log(thePet);


    // push the pet into the array
    salon.pets.push(thePet);
}