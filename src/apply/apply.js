const applicationFormNode = document.getElementById('application-form'); //1
const nameNode = document.getElementById('name'); //3
const emailNode = document.getElementById('email'); //3
const phoneNode = document.getElementById('phone'); //3
const fullTimeNode = document.getElementById('full-time'); //5
const partTimeNode = document.getElementById('part-time'); //5
const positionsNode = document.getElementById('positions'); //7

// file - apply.js
    // 1 globals - grab form by id
    // 2 add event listener and preventDefault
        // a. check to make sure that apply.js is hooked up and preventDefault is working
    // 3 globals - grab value of nameNode element 
    // 3a console.log
    // 3b repeat for email and phone
    // 4 create for loop for check boxes
        // a. empty array to push checked into
        // b. exit condition in for loop needs to drill down into what you need to grab (gender.length)
        // c. variable to hold index of gender being looped 
        // d. conditional - if statement - if gender.checked then push gender to empty array
        // e. console.log
    // 5 globals - grab nodes for radio buttons
    // 6 need conditional for radio buttons within event listener
        // a. let schedule = null;
        // b. conditional for each button - if node.checked then schedule = node.value 
    // 7 globals - grab node for pull-down
    // 8 create applicant object inside event listener
    // 9 stringify object - assign to variable
    // 10 put stringified object into local storage
// file - applicant-detail.js



applicationFormNode.addEventListener('submit', function(event) { //2
    event.preventDefault();

    let genderChecked = []; //4a
    for(let i = 0; i < applicationFormNode.gender.length; i++) { //4b
        const gender = applicationFormNode.gender[i]; //4c
        if(gender.checked) { //4d
            genderChecked.push(gender.value);
        }
    }

    let schedule = null; //6a
    if(fullTimeNode.checked) { //6b
        schedule = fullTimeNode.value;
    }
    if(partTimeNode.checked) {
        schedule = partTimeNode.value;
    }

    const applicantObject = { //8
        nameKey: nameNode.value,
        emailKey: emailNode.value,
        phoneKey: phoneNode.value,
        genderKey: genderChecked,
        scheduleKey: schedule,
        positionsKey: positionsNode.value
    };

    const applicantObjectString = JSON.stringify(applicantObject); //9
    window.localStorage.setItem('applicantObject', applicantObjectString); //10

});
