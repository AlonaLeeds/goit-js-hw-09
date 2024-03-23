import throttle from 'lodash.throttle'

const form = document.querySelector(".feedback-form");
const FORM_KEY = "feedback-form-state";

form.addEventListener("input", throttle(saveFormData, 500));
form.addEventListener("submit", submitForm);



function saveFormData() {
   const dataForm = {
      email: form.email.value.trim(),
      message: form.message.value.trim(),
   }

   localStorage.setItem(FORM_KEY, JSON.stringify(dataForm));
   // console.log(dataForm);
}  

const checkForm = localStorage.getItem(FORM_KEY)
if (checkForm) {
   const parsedData = JSON.parse(checkForm);
   form.email.value = parsedData.email || "";
   form.message.value = parsedData.message || "";
}


function submitForm(event) {
   event.preventDefault();
   const sendDataForm = {
      email: form.email.value.trim(),
      message: form.message.value.trim(),
   }
   if (sendDataForm.email === "" || sendDataForm.message === "") {
      return alert("Both fields must be filled before sending")
   }
   console.log(sendDataForm);

   localStorage.removeItem(FORM_KEY);
   form.reset()
}



