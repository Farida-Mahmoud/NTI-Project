let name = document.querySelector(".name-input");
let email = document.querySelector(".email");
let phoneNumber = document.querySelector(".phone");
let age = document.querySelector(".age");
let city = document.querySelector(".city");

let form = document.querySelector(".contact-form");

let textRegex = /[A-Z]*\s*[a-z]+\s*$/;

let phoneNumberRegex = /^(01)[0125][0-9]{8}$/;

let emailRegex = /^[a-z][a-z0-9%$+]*(@gmail.com){1}$/;

let ageRegex = /[1-9]{1,2}/;

name.addEventListener("input", () => {
    let nameTest = textRegex.test(name.value);
    let nameDiv = document.querySelector(".name-validation");
    nameDiv.innerHTML = "";
    if (!nameTest) {
        nameDiv.innerHTML += `
            <p class = "validation-message"><i class="fa-solid fa-circle-xmark"></i> You must enter only letters  </p>
        
        `
    }
    else {
        nameDiv.innerHTML +=
            ` <p class = "valid"><i class="fa-solid fa-circle-check"></i> Valid Name</p>`
    }

});

email.addEventListener("input", () => {
    let emailTest = emailRegex.test(email.value);
    let emailDiv = document.querySelector(".email-validation");
    emailDiv.innerHTML = "";
    if (!emailTest) {
        emailDiv.innerHTML = `
            <div class = "validation-message">
                <p><i class="fa-solid fa-circle-xmark"></i> Email must start with small letter</p>
                <p><i class="fa-solid fa-circle-xmark"></i> Have only letter, numbers and special characters as [% $ +]</p>
                <p><i class="fa-solid fa-circle-xmark"></i> Have no space</p>
            </div>
        `
    }
    else {
        emailDiv.innerHTML = `
            <p class = "valid"><i class="fa-solid fa-circle-check"></i> Valid Email</p>
        
        `
    }
});


phoneNumber.addEventListener("input", () => {
    let testPhoneNumber = phoneNumberRegex.test(phoneNumber.value);
    let numDiv = document.querySelector(".phone-validation");
    numDiv.innerHTML = "";
    if (!testPhoneNumber) {
        numDiv.innerHTML = `
        <div class = "validation-message">
            <p><i class="fa-solid fa-circle-xmark"></i> Phone number must start with 010 OR 011 OR 012 OR 015</p>
            <p><i class="fa-solid fa-circle-xmark"></i> Only 11 digits</p>
            <p><i class="fa-solid fa-circle-xmark"></i> Have no space</p>
        
        </div>
        `
    }
    else {
        numDiv.innerHTML = `
           <p class = "valid"><i class="fa-solid fa-circle-check"></i> Valid Phone Number</p>
        `
    }
});

age.addEventListener("input", () => {
    let testage = ageRegex.test(age.value);
    let ageDiv = document.querySelector(".age-validation");
    ageDiv.innerHTML = "";
    if (!testage) {
        ageDiv.innerHTML = `
        <p class = "validation-message"><i class="fa-solid fa-circle-xmark"></i> Your age must be from 1 to 99</p>
        `
    }
    else {
        ageDiv.innerHTML = `
           <p class = "valid"><i class="fa-solid fa-circle-check"></i> Valid Age</p>
        `
    }
});

city.addEventListener("input", () => {
    let testcity = textRegex.test(city.value);
    let cityDiv = document.querySelector(".city-validation");
    cityDiv.innerHTML = "";
    if (!testcity) {
        cityDiv.innerHTML = `
        <p class = "validation-message"><i class="fa-solid fa-circle-xmark"></i> You must enter only letters</p>
        `
    }
    else {
        cityDiv.innerHTML = `
           <p class = "valid"><i class="fa-solid fa-circle-check"></i> Valid City</p>
        `
    }
});

function clear() {
    let validationMessages = document.querySelectorAll(".name-validation,.email-validation,.phone-validation,.city-validation,.age-validation");
    validationMessages.forEach((elem) => {
        elem.innerHTML = "";
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nameTest = textRegex.test(name.value);
    let emailTest = emailRegex.test(email.value);
    let testPhoneNumber = phoneNumberRegex.test(phoneNumber.value);
    let testage = ageRegex.test(age.value);
    let testcity = textRegex.test(city.value);
    if (nameTest && emailTest && testPhoneNumber && testage && testcity) {
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Your info has been sent',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
        form.reset();
        clear();
    }
    else {
        Swal.fire({
            title: "Please check that all fields are valid!!",
            icon: "warning",
            confirmButtonText: "OK"
        });
    }

})