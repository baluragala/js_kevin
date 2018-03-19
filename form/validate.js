let fname = document.querySelector("[name='fname']");
let lname = document.querySelector("[name='lname']");
let email = document.querySelector("[name='email']");

let currentErrorEle;
fname.addEventListener("blur", function() {
  if (fname.value == "") {
    fname.style.border = "1px solid red";
    currentErrorEle = showErrors("First Name is required");
  }
});

fname.addEventListener("input", function() {
  if (currentErrorEle) {
    clearErrors(currentErrorEle);
    currentErrorEle = null;
  }
});

let errorsDiv = document.querySelector("#errors");

function showErrors(errorMessage) {
  let error = document.createElement("li");
  error.innerText = errorMessage;
  error.style.color = "red";
  errorsDiv.appendChild(error);
  return error;
}

function clearErrors(ele) {
  errorsDiv.removeChild(ele);
}

document.forms[0].addEventListener("submit", async function validateAndSubmit(
  eventArgs
) {
  eventArgs.preventDefault();
  let fname1 = fname.value;
  let lname1 = lname.value;
  let email1 = email.value;

  try {
    let response = await axios.post("http://localhost:3000/usersfasd", {
      fname: fname1,
      lname: lname1,
      email: email1
    });
    let userInfo = await response.json();
    console.log(userInfo);
  } catch (err) {
    console.error(err);
  }
});

//   axios
//     .post(
//       "http://localhost:3000/users",
//       {
//         fname: fname1,
//         lname: lname1,
//         email: email1
//       },
//       { headers: { "X-Token": "asdd31311421" } }
//     )
//     .then(res => console.log(res));

//   let response = await axios
//     .post("http://localhost:3000/usersfasd", {
//       fname: fname1,
//       lname: lname1,
//       email: email1
//     })
//     .then(response => response.json())
//     .then(user => console.log(user))
//     .catch(err => console.error(err));
// });
