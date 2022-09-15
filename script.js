const form = document.getElementById('form');
const name = document.getElementById('name');
const number = document.getElementById('number');
const email = document.getElementById('email');
const enquiry = document.getElementById('enquiry');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
      const inputControl = element.parenteElement;
      const errorDisplay = inputControl.querySelector('.error');

      errorDisplay.innerText = message;
      inputControl.classList.add('error');
      inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
}

const isValidEmail = email => {
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase()); 
}
const validateInputs = () => {
    const name = name.value.trim();
    const number = number.value.trim();
    const email = email.value.trim();
    const enquiry = enquiry.value.trim();

    if(nameValue === '') {
        setError(name, 'name is required');
    } else{
        setSuccess(name);
    }
    if(numberValue === '') {
        setError(number, 'number is required')
    }else if(!0-9) {
        setError(number, 'provide numeric values') 
    } else{
        setSuccess(number);
    }
    if(emailValue === '') {
        setError(email, 'email is required')
    } else if(!isValidEmail(emailValue)) {
        setError(email, 'provide a valid emial address')
    }else{
        setSuccess(email);
    }
    if(enquiryValue === '') {
        setError(enquiry, 'enquiry is required');
    } else{
        setSuccess(enquiry);
    }
};