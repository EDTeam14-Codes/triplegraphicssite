//Unique Firebase Object
const firebaseConfig = {
  apiKey: "AIzaSyAxFtgI3Qv2V4O3z8ieXFVYTbOlTxQM9Pc",
  authDomain: "robot2guides.firebaseapp.com",
  projectId: "robot2guides",
  databaseURL: "https://robot2guides-default-rtdb.firebaseio.com/",
  storageBucket: "robot2guides.appspot.com",
  messagingSenderId: "555364723062",
  appId: "1:555364723062:web:056bd6fe4d692cd1a6b257"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let first_name = document.getElementById('first_name').value
  let last_name = document.getElementById('last_name').value
  let email = document.getElementById('email').value
  let company = document.getElementById('company').value
  let inquiry = document.getElementById('inquiry').value
  let mess = document.getElementById('mess').value
  console.log(first_name, last_name, email, company, inquiry, mess);

  saveContactInfo(first_name, last_name, email, company, inquiry, mess);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(first_name, last_name, email, company, inquiry, mess) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    first_name: first_name,
    last_name: last_name,
    email: email,
    company: company,
    inquiry: inquiry,
    mess: mess
  });

  //alert
  alert("Success! Your form is submitted. We will be in touch.")
}
