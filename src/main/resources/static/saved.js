const data = document.getElementById("data");
let arr = [];

axios.get("http://16.16.76.81/get-forms")
.then((res) => {
  arr = res.data;
  showdata();
});

function showdata() {
  console.log("showing data");
  console.log(arr);
  arr.forEach((val, index) => {
    data.innerHTML += `<div class="styles">
        <span>${index + 1}</span>
        Employee Name : <h3>${val.name}</h3>
        Date of Birth :<h3>${val.dob}</h3>
        Email : <h3>${val.email}</h3>
        Gender : <h3>${val.gender}</h3>
        Qualifications : <h3>${val.qualification}</h3>
        Year of Experience : <h3>${val.yearofexperience}</h3>
        Date of Joining : <h3>${val.dateofjoining}</h3>
        </div>`;
  });
}

// console.log("showing data");