const applicationFormNode = document.getElementById('application-form'); //1

// file - apply.js
    // 1 grab form by id
    // 2 add event listener and preventDefault
        // a. check to make sure that apply.js is hooked up and preventDefault is working
    // 3 grab value of nameNode element within event listener - assign to variable
    // 3a console.log
    // 3b repeat for email and phone
    // 4 create for loop for check boxes
        // a. empty array to push checked into
        // b. exit condition in for loop needs to drill down into what you need to grab (gender.length)
        // c. variable to hold index of gender being looped 
    // 4a console.log
    // 5 grab nodes for radio buttons
    // 6 create event listeners for radio buttons
    // 7 grab positions node
    // 8 create applicant object

    
applicationFormNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameNode = applicationFormNode.elements.name; //3
    const emailNode = applicationFormNode.elements.email.value; //3
    const phoneNode = applicationFormNode.elements.phone.value; //3

    let genderChecked = [];
    for(let i = 0; i < applicationFormNode.gender.length; i++) {
        const gender = applicationFormNode.gender[i];
        if(gender.checked) {
            genderChecked.push(gender);
        }
    }
    console.log('checked:', genderChecked);
});
