// Form Validation

//First Function
function validateForm(){
    let a=document.forms["myForm"]["fname"].value;
    if (a == "") {
        alert("Enter First Name");
        return false;
    }
    let b=document.forms["myForm"]["lname"].value;
    if (b == "") {
        alert("Enter Last Name");
        return false;
    }
    let c=document.forms["myForm"]["email"].value;
    if (c == "") {
        alert("Enter Email");
        return false;
    }

    let d=document.forms["myForm"]["password"].value;
    if (d == "") {
        alert("Enter Password");
        return false;
    }
}
//Second Function
function message1(){
    let fname=document.getElementById('fname');
    fname.placeholder="Enter First Name e.g Masooma";
}
function message2(){
    let lname=document.getElementById('lname');
    lname.placeholder="Enter First Name e.g Rubab";
}
function message3(){
    let email=document.getElementById('email');
    email.placeholder="rubab.masooma@gmail.com";
}
function message4(){
    let password=document.getElementById('pass');
    password.placeholder="testing123";
}   

//Third Function
function passwordDisplay() {
    let x = document.getElementById('pass');
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function openMenu() {
    var asideNav = document.getElementsByClassName('nav__left')[0];
    var style = getComputedStyle(asideNav);
    if (style.display == "none") {
        var faceIcon = document.getElementsByClassName('faceIcon')[0];
        faceIcon.style.display = "none";
        asideNav.style.display = "block";
    }
    else
        asideNav.style.display = "none";
}

var ctx = document.getElementById('totalResponses').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Numeric', 'Multiple Choice', 'Text', 'Optional', 'Compulsory'],
        datasets: [{
            label: '# of Responses',
            data: [12, 19, 3, 5, 28],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

var ctx = document.getElementById('questionByResponseType').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Numeric', 'Multiple Choice', 'Text', 'Optional', 'Compulsory'],
        datasets: [{
            label: 'Questions By Response Type',
            data: [17, 28, 35, 2, 21],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})
var ctx = document.getElementById('answerByResponseType').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Numeric', 'Multiple Choice', 'Text', 'Optional', 'Compulsory'],
        datasets: [{
            label: 'Answers By Response Type',
            data: [5, 9, 11, 121, 9],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var ctx = document.getElementById('completionRate').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Numeric', 'Multiple Choice', 'Text', 'Optional', 'Compulsory'],
        datasets: [{
            label: 'Questions By Response Type',
            data: [11, 21, 31, 94, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})