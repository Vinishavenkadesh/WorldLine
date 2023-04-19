const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phonenumber");
const dob = document.getElementById("dob");
const qualification = document.getElementById("qualification");
const yearofexperience = document.getElementById("yearofexperience");
const dateofjoining = document.getElementById("dateofjoining");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validityform()) {
    postData();
  }
});

function validityform() {
  const nameval = name.value.trim();
  const dobval = dob.value.trim();
  const dateofjoiningval = dateofjoining.value.trim();
  const emailval = email.value.trim();
  const phonenumberval = phonenumber.value.trim();
  const qualificationval = qualification.value.trim();
  const yearofexperienceval = yearofexperience.value.trim();
  let success = true;

  if (nameval === "") {
    setError(name, "*Required");
    success = false;
  } else {
    setSuccess(name);
  }
  if (dobval === "") {
    setError(dob, "*Required");
    success = false;
  } else {
    setSuccess(dob);
  }
  if (emailval === "") {
    setError(email, "*Required");
    success = false;
  } else if (!emailval.includes("@") || !emailval.includes(".com")) {
    setError(email, "*Include @ and .com");
    success = false;
  } else {
    setSuccess(email);
  }
  if (phonenumberval.length != 10) {
    setError(phonenumber, "*Must be 10 digits");
    success = false;
  } else if (
    phonenumberval[0] != 9 &&
    phonenumberval[0] != 6 &&
    phonenumberval[0] != 8 &&
    phonenumberval[0] != 7
  ) {
    setError(phonenumber, "*Check your phone Number");
    success = false;
  } else {
    setSuccess(phonenumber);
  }
  if (dateofjoiningval === "") {
    setError(dateofjoining, "*Required");
    success = false;
  } else {
    setSuccess(dateofjoining);
  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}
function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}
}

async function postData() {
  const data = {
    name: name.value,
    email: email.value,
    phonenumber: phonenumber.value,
    dob: dob.value,
    gender: gender.value,
    qualification : qualification.value,
    yearofexperience : yearofexperience.value,
    dateofjoining : dateofjoining.value,
  };

  await axios
    .post("http://16.16.76.81/post-forms", data)
    .then((res) => console.log(res.data))
    .then((res)=>{
     window.location.href = "/data"
    })
    .catch((err)=>alert(err));
  }