//creating two classes, one original parent class and one that inherits its methods and properties

// Create a class constructor named User
class User {
  // Create a constructor that takes the properties 'firstName', 'lastName', 'age', and 'emotion' and set them
  constructor(firstName, lastName, age, emotion) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.emotion = emotion;
  }
  // create a getEmotion function getter that returns a string saying how the user is feeling

  getEmotion() {
    console.log(this.firstName + "is feeling" + this.emotion);
  }

  // create a setEmotion function setter that sets the value passed in as the new emotion for the object
  setEmotion(value) {
    this.emotion = value;
  }
}

// Create an instance of the User class, give it the four original properties

let soli = new User("soli", "lotfi", 35, "happy");

// Call the getEmotion method

soli.getEmotion();

// Set a new emotion on the new user

soli.setEmotion("excited");

// Call the getEmotion method ... did your new emotion get console logged?

soli.getEmotion();

// Create a new class called Admin that will inherit properties and methods from the User class
class Admin extends User {
  // Create a constructor that takes the original four  paramaters, but adds 'adminLevel' and 'role' for our Admin class
  // Create a new method called authorizeAccess on the Admin class that returns a string stating the admin's adminLevel.
}

// Create a new isntance of the Admin class, pass in all the necessary properties

// Call the authorizeAccess method on the Admin class

// Call the getEmotion method on the Admin class that is inherited from the User class, this should work even though you didn't define getEmotion in the Admin class
