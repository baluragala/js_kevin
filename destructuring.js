//array destructuring
let memebers = ["m1", "m2", "m3", "m4"];
var [tm1, tm2, , tm4, tm5 = "NA"] = memebers;

//merging arrays
var one = [1, 2, 3];
var two = [4, 5, 6];
var three = [...one, ...two];

//object destructurnig
let apiReponse = {
  firstName: "jim",
  lastName: "Kim",
  address: {
    city: "ny",
    state: "ny",
    zip: 1234
  }
};

// var firstName = apiReponse.firstName;
// var lastName = apiReponse.lastName;
// var city = apiReponse.address.city;

var { lastName, firstName, address: { city, state, zip } } = apiReponse;

//deep copy
var a1 = { name: "a1" };
var a2 = { age: 20, address: { city: "", state: "" } };
var a3 = Object.assign({}, a1, a2, { address: Object.assign({}, a2.address) });
