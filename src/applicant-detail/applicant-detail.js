const detailNameNode = document.getElementById('name'); //13
const detailEmailNode = document.getElementById('email');
const detailPhoneNode = document.getElementById('phone');
const detailScheduleNode = document.getElementById('schedule');
const detailPositionNode = document.getElementById('position');


const jsonObject = window.localStorage.getItem('applicantObject'); //14
const hydratedApplicant = JSON.parse(jsonObject); //15

console.log('what the what:', hydratedApplicant);

detailNameNode.textContent = hydratedApplicant.name;
detailEmailNode.textContent = hydratedApplicant.email;
detailPhoneNode.textContent = hydratedApplicant.phone;
detailScheduleNode.textContent = hydratedApplicant.schedule;
detailPositionNode.textContent = hydratedApplicant.position;
