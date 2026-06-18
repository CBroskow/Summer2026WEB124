var id = Symbol("id");
main();

function main() {
  let pets = [];
  pets.push(new Pet("Spot", "dog", 2, 1, {name : "Craig"}));
  pets.push(new Pet("Kitty", "cat", 3, 2, {name : "Alexa"}));
  pets.push(new Pet("Maltese", "falcon", 4, 3));
  console.log("List of newly created pets:");
  pets.forEach((pet) => {
    console.log("  " + pet.toString());
  });
  console.log('\n"Spot" has a birthday:');
  console.log("  " + pets[0].getDescription());
  pets[0].haveBirthday();
  console.log("  " + pets[0].getDescription());
  console.log("\nLet's see what time it is:");
  console.log("  " + (new Date()).toString() + "\n ");
}

function Pet(name, type, age, id, owner) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.id = id;
  this.owner = owner;

  this.getDescription = function() {
    return this.name + " is a " + this.type + " and is " + this.age + " years old";
  };

  this.haveBirthday = function() {
    this.age++;
  };

  this.getOwnerName = function() {
    return this.owner?.name ? this.owner?.name : "none";
  };

  this.getID = function() {
    return this.id;
  };

  this.toString = function() {
    return `{name: "${this.name}", type: "${this.type}", age: ${this.age}, ` +
      `owner name: "${this.getOwnerName()}"}`;
  };
}

/*
At the bottom of your .js file, answer the following questions as comments:
      - What does this refer to in your constructor and methods?
      In the constructor and methods, "this" refers to the object containing/owning them.

      - What does optional chaining do in your code?
      It checks to make sure that the owner property "exists" (not null or undefined).

      - Why might the Date object be useful in a JS program?
      Date objects are useful both for determing the date and time, and for 
      measuring "elapsed time" (benchmarking, ages, interest calculations, etc.).      
*/
