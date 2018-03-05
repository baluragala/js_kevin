/*
object literal
constructor functions
class
*/

let user = { firstName: "bala", lastName: "ragala" };
let user1 = new Object();
user1.firstName = "bala";
user1.lastName = "ragala";

class CUser {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let user3 = new CUser("bala", "ragala");

function FUser(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function CUser(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

let user4 = new FUser("bala", "ragala");
