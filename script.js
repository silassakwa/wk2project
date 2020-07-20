function getAkanName () {
    var yearOfBirth = document.getElementById("year-input").value;
    var monthOfBirth = Number(document.getElementById("month-input").value);
    var dayOfBirth = Number(document.getElementById("day-input").value);
    var genders = document.getElementsByName("gender");
  
    // function to get gender
    function getGender () {
      for (let gender of genders){
        if (gender.checked){
          return gender.value;
        }
      }
    }
  
    let myGenderValue = getGender();
    console.log(myGenderValue);
  
    // validation functions
    function monthValidator () {
      if (monthOfBirth < 1 || monthOfBirth > 12) {
        return false;
      } else {
        return true;
      }
    }
  
    function dayValidator () {
      if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
        if (dayOfBirth > 28 || dayOfBirth < 1) {
          return false;
        } else if (monthOfBirth === 2 && dayOfBirth > 29) {
          return false;
        } else if (monthOfBirth === 2 && dayOfBirth < 1) {
          return false;
        } else {
          return true;
        }
      } else if (dayOfBirth < 1 || dayOfBirth > 31){
        return false;
      } else {
        return true;
      }
    }
  
    //get values from function of months and day
    var monthValid = monthValidator();
    var dayValid = dayValidator();
  
    //akan name generator formula
    var dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
            ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);
  
    //creating arrays of Akan names for males & females and days of the week
    var daysOfWeek = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
  
    var maleAkanNames = [
      "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];
  
    var femaleAkanNames = [
      "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];
  
    //generating and index value to select items on arrays
    var index;
    // fix formula bug
    if (dayOfWeekNumber == 0){
      index = 6;
    } else {
      index = dayOfWeekNumber - 1;
    }
  
    console.log(index);
  
    if (myGenderValue == "male" && monthValid && dayValid) {
      document.getElementById('result').textContent = " your Akan name is " + maleAkanNames[index];
      document.getElementById('display-name').textContent = "Here is your Akan name: ";
    
     
      return false;
    } else if (myGenderValue == "female" && monthValid && dayValid) {
      document.getElementById('result').textContent = " your Akan name is " + femaleAkanNames[index];
      document.getElementById('display-name').textContent = "Here is your Akan name: ";
      
      
      return false;
    } else {
      alert("You entered an invalid day or month, please try again");
    }
  }