// GLOBALS
// Static
var firebaseConfig = {
    apiKey: "AIzaSyCte7lhLlrSr3m3turhqLQQy3_3YSBymWE",
    authDomain: "trilogy-r-p-s.firebaseapp.com",
    databaseURL: "https://trilogy-r-p-s.firebaseio.com",
    projectId: "trilogy-r-p-s",
    storageBucket: "trilogy-r-p-s.appspot.com",
    messagingSenderId: "545722149214",
    appId: "1:545722149214:web:633cee7329b7a2af"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Dynamic
var searchTerm = 'cat';
var apiURL = 'http://icanhazdadjoke.com/search?term=' + searchTerm;



// FUNCTIONS
// $.ajax({
//     url: apiURL,
//     method: "GET",
//     headers: {
//         "Accept": "application/json"
//     }

// }).then(response => {
//     console.log(response);
// })

$.ajax({
    url: 'http://icanhazdadjoke.com/search',
    headers: {
      "Accept":"application/json"
    },
    crossDomain: true
  }).then(response => {
  
    debugger;
    
  }).catch(error => {
      console.log(error)
  })


// FUNCTION CALLS