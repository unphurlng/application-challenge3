const applicationFormNode = document.getElementById('application-form'); //1
const fullTimeNode = document.getElementById('full-time'); //5
const partTimeNode = document.getElementById('part-time'); //5

// file - apply.js
    // 1 globals - grab form by id
    // 2 add event listener and preventDefault
        // a. check to make sure that apply.js is hooked up and preventDefault is working
    // 3 grab value of nameNode element within event listener - assign to variable
    // 3a console.log
    // 3b repeat for email and phone
    // 4 create for loop for check boxes
        // a. empty array to push checked into
        // b. exit condition in for loop needs to drill down into what you need to grab (gender.length)
        // c. variable to hold index of gender being looped 
        // d. conditional - if statement - if gender.checked then push gender to empty array
        // e. console.log
    // 5 globals - grab nodes for radio buttons
    // 6 create event listeners for radio buttons (one for each one) - above larger event listener
        // a. assign node.value to iput name (schedule)
        // b. conditional - if statement - if node.checked then schedule = node.value 
    // 7 grab positions value inside event listener
    // 8 create applicant object

let schedule = fullTimeNode.value; //6a
fullTimeNode.addEventListener('change', function() { //6
    if(fullTimeNode.checked) { //6b
        schedule = fullTimeNode.value;
    }
    console.log('schedule:', schedule);
});
partTimeNode.addEventListener('change', function() { //6
    if(partTimeNode.checked) { //6b
        schedule = partTimeNode.value;
    }
    console.log('schedule:', schedule);
});

applicationFormNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameNode = applicationFormNode.elements.name.value; //3
    const emailNode = applicationFormNode.elements.email.value; //3
    const phoneNode = applicationFormNode.elements.phone.value; //3

    let genderChecked = []; //4a
    for(let i = 0; i < applicationFormNode.gender.length; i++) { //4b
        const gender = applicationFormNode.gender[i]; //4c
        if(gender.checked) { //4d
            genderChecked.push(gender.value);
        }
    }
});
