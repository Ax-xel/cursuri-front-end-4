var persons = [
  {
    name: "Ana",
    gender: "F",
    height: 1.6,
    weight: 60
  },
  {
    name: "Ion",
    gender: "M",
    height: 1.8,
    weight: 180
  }
];

for (var i = 0; i < persons.length; i++) {
  console.log(persons[i]);
  var currentPerson = persons[i]  //optional
  
  var bmi = currentPerson.weight / (currentPerson.height * currentPerson.height);
  
  if (bmi < 18.25) {
      console.log(currentPerson.name + "|" + currentPerson.gender  + "|" + "BMI:" + bmi + "|" + "underweight");
  } else if (bmi < 25) {
      console.log(currentPerson.name + "|" + currentPerson.gender  + "|" + "BMI:" + bmi + "|" + "normal");
  } else if (bmi < 30) {
      console.log(currentPerson.name + "|" + currentPerson.gender  + "|" + "BMI:" + bmi + "|" + "overweight");
  }   else {
      console.log(currentPerson.name + "|" + currentPerson.gender  + "|" + "BMI:" + bmi + "|" + "obese");
      }
    }

//      Truthy
//      Falsy:0, null, undefined, " ", false

//  if("name") => true
//  if("false") => true
//  if(false) => false 



  
  

