let mainContEl = document.getElementById('mainCont');
let contactDetailsEl = document.getElementById('contactDetails');
let contactDetailsId = document.getElementById('contactId');
let myFormData = document.getElementById('myForm');
/*cartBtn */
let cartBtnEl = document.getElementById('cartBtn');
let cartBtn1El = document.getElementById('cartBtn1');
let cartContainerEl = document.getElementById('cartContainer');
cartBtn1El.addEventListener('click', function() {
    mainContEl.style.display = 'none';
    logInPageFormEl.style.display = 'none';
    faqDetailsContainerEl.style.display = 'none';
    contactDetailsId.style.display = 'none';
    cartContainerEl.style.display = 'block';




    let h1El = document.createElement('h5');
    h1El.textContent = 'Empty Cart';
    h1El.classList.add('text-center', 'mt-4');
    h1El.style.color = 'black';
    h1El.style.fontWeight = 'bold';
    cartContainerEl.appendChild(h1El);

    let pEl = document.createElement('p');
    pEl.textContent = 'Looks Like you have not added anything to your cart.Go ahead & explore top categories..';
    pEl.style.color = 'black';
    pEl.classList.add('pCart');
    cartContainerEl.appendChild(pEl);
})

cartBtnEl.addEventListener('click', function() {
    mainContEl.style.display = 'none';
    logInPageFormEl.style.display = 'none';
    faqDetailsContainerEl.style.display = 'none';
    contactDetailsId.style.display = 'none';
    cartContainerEl.style.display = 'block';



    let h1El = document.createElement('h5');
    h1El.textContent = 'Empty Cart';
    h1El.classList.add('text-center', 'mt-4');
    h1El.style.color = 'black';
    h1El.style.fontWeight = 'bold';
    cartContainerEl.appendChild(h1El);

    let pEl = document.createElement('p');
    pEl.textContent = 'Looks Like you have not added anything to your cart.Go a head & explore top categories..';
    pEl.style.color = 'black';
    pEl.classList.add('pCart')
    cartContainerEl.appendChild(pEl);
})

/*small device */
let logInBtnEl = document.getElementById('logInBtn');
/* large device */
let logInBtn1El = document.getElementById('logInBtn1');
/*login page */
let logInPageFormEl = document.getElementById('sigInPageForm');
/*login page us Input and password */
let userInputEl = document.getElementById('userInput');
let userPswrdEl = document.getElementById('userPswrd');
let userErrMsgEl = document.getElementById('userErrMsg');
let formData = {
    userInput: '',
}
userInputEl.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        userErrMsgEl.textContent = '*Required';
        userErrMsgEl.style.color = 'red';
    } else {
        userErrMsgEl.textContent = '';
    }
});
let userPswdErrMsgEl = document.getElementById('userPswdErrMsg');

userPswrdEl.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        userPswdErrMsgEl.textContent = '*Required';
        userPswdErrMsgEl.style.color = 'red';
    } else {
        userPswdErrMsgEl.textContent = '';
    }
})
/*myFormData.addEventListener('submit', function() {
    event.preventDefault();
})*/
/*Accordation Details FAQ*/
let faqDetailsEl = document.getElementById('faqDetails');
let faqDetailsContainerEl = document.getElementById('faqDetailsContainer');
/*Home Details Button */
let homeDetailsEl = document.getElementById('homeDetails');
homeDetailsEl.onclick = function() {
    mainContEl.style.display = 'block';
    logInPageFormEl.style.display = 'none';
    faqDetailsContainerEl.style.display = 'none';
    contactDetailsId.style.display = 'none';
    cartContainerEl.style.display = 'none';

    let infoCardEl = document.getElementById('infoCard');
    infoCardEl.classList.add('infoCardAnimation');


    homeDetailsEl.style.backgroundColor = '#68FE9A';
    homeDetailsEl.style.color = 'white';

    logInBtn1El.style.backgroundColor = 'black';
    logInBtnEl.style.backgroundColor = 'black';

    logInBtn1El.style.color = 'white';
    logInBtnEl.style.color = 'white';

    shopDetailsEl.style.backgroundColor = 'black';
    shopDetailsEl.style.color = 'white';

    faqDetailsEl.style.backgroundColor = 'black';
    faqDetailsContainerEl.style.color = 'white';

    contactDetailsEl.style.backgroundColor = 'black';
    contactDetailsEl.style.color = 'white';


}
/*Shop Details Button */
let shopContainerEl = document.getElementById('shopContainer');
let shopDetailsEl = document.getElementById('shopDetails');

shopDetailsEl.onclick = function() {
    mainContEl.style.display = 'block';
    logInPageFormEl.style.display = 'none';
    faqDetailsContainerEl.style.display = 'none';
    contactDetailsId.style.display = 'none';
    cartContainerEl.style.display = 'none';


    homeDetailsEl.style.backgroundColor = 'black';
    homeDetailsEl.style.color = 'white';

    logInBtn1El.style.backgroundColor = 'black';
    logInBtnEl.style.backgroundColor = 'black';

    logInBtn1El.style.color = 'white';
    logInBtnEl.style.color = 'white';

    shopDetailsEl.style.backgroundColor = '#68FE9A';
    shopDetailsEl.style.color = 'white';

    faqDetailsEl.style.backgroundColor = 'black';
    faqDetailsContainerEl.style.color = 'white';

    contactDetailsEl.style.backgroundColor = 'black';
    contactDetailsEl.style.color = 'white';

}
/*FAQ DEATILS BUTTON */
faqDetailsEl.onclick = function() {
    mainContEl.style.display = 'none';
    logInPageFormEl.style.display = 'none';
    faqDetailsContainerEl.style.display = 'block';
    contactDetailsId.style.display = 'none';
    cartContainerEl.style.display = 'none';


    logInBtn1El.style.backgroundColor = 'black';
    logInBtnEl.style.backgroundColor = 'black';

    logInBtn1El.style.color = 'white';
    logInBtnEl.style.color = 'white';

    shopDetailsEl.style.backgroundColor = 'black';
    shopDetailsEl.style.color = 'white';

    faqDetailsEl.style.backgroundColor = '#68FE9A';
    faqDetailsContainerEl.style.color = 'white';

    contactDetailsEl.style.backgroundColor = 'black';
    contactDetailsEl.style.color = 'white';

}


/*small Devices Loginpage*/
logInBtnEl.onclick = function() {
    mainContEl.style.display = 'none';
    logInPageFormEl.style.display = 'block';
    faqDetailsContainerEl.style.display = 'none';
    contactDetailsId.style.display = 'none';
    cartContainerEl.style.display = 'none';


    homeDetailsEl.style.backgroundColor = 'black';
    homeDetailsEl.style.color = 'white';

    logInBtn1El.style.backgroundColor = 'black';
    logInBtnEl.style.backgroundColor = '#68FE9A';

    logInBtn1El.style.color = 'white';
    logInBtnEl.style.color = 'white';

    shopDetailsEl.style.backgroundColor = 'black';
    shopDetailsEl.style.color = 'white';

    faqDetailsEl.style.backgroundColor = 'black';
    faqDetailsContainerEl.style.color = 'white';

    contactDetailsEl.style.backgroundColor = 'black';
    contactDetailsEl.style.color = 'white';


}

/* Large Devices Loginpage*/
logInBtn1El.onclick = function() {
    mainContEl.style.display = 'none';
    logInPageFormEl.style.display = 'block';
    faqDetailsContainerEl.style.display = 'none';
    contactDetailsId.style.display = 'none';
    cartContainerEl.style.display = 'none';


    homeDetailsEl.style.backgroundColor = 'black';
    homeDetailsEl.style.color = 'white';

    logInBtn1El.style.backgroundColor = '#68FE9A';
    logInBtnEl.style.backgroundColor = 'black';

    logInBtn1El.style.color = 'white';
    logInBtnEl.style.color = 'white';

    shopDetailsEl.style.backgroundColor = 'black';
    shopDetailsEl.style.color = 'white';

    faqDetailsEl.style.backgroundColor = 'black';
    faqDetailsContainerEl.style.color = 'white';

    contactDetailsEl.style.backgroundColor = 'black';
    contactDetailsEl.style.color = 'white';

}
/* contactDetails Page */

contactDetailsEl.onclick = function() {
    mainContEl.style.display = 'none';
    logInPageFormEl.style.display = 'none';
    faqDetailsContainerEl.style.display = 'none';
    contactDetailsId.style.display = 'block';
    cartContainerEl.style.display = 'none';


    homeDetailsEl.style.backgroundColor = 'black';
    homeDetailsEl.style.color = 'white';

    logInBtn1El.style.backgroundColor = 'black';
    logInBtnEl.style.backgroundColor = 'black';

    logInBtn1El.style.color = 'white';
    logInBtnEl.style.color = 'white';

    shopDetailsEl.style.backgroundColor = 'black';
    shopDetailsEl.style.color = 'white';

    faqDetailsEl.style.backgroundColor = 'black';
    faqDetailsContainerEl.style.color = 'white';

    contactDetailsEl.style.backgroundColor = '#68FE9A';
    contactDetailsEl.style.color = 'white';
}
/*Register btn */
let registerBtnEl = document.getElementById('registerBtn');
let loginPageDetailsEl = document.getElementById('loginPageDetails');
registerBtnEl.onclick = function() {
    loginPageDetailsEl.style.display = 'none';

}

let loginPageBtnEl = document.getElementById('loginPageBtn');
let registerDetailsEl = document.getElementById('registerDetails');

loginPageBtnEl.onclick = function() {
    loginPageDetailsEl.style.display = 'block';
    registerDetailsEl.style.display = 'none';

}

registerBtnEl.onclick = function() {
    loginPageDetailsEl.style.display = 'none';
    registerDetailsEl.style.display = 'block';
}


/*Btn El start's from here */
let topPaidEL = document.getElementById("topPaid");
let topBtnEl = document.getElementById("topBtn");
let topFreeEl = document.getElementById('topFree');
let topFreeBtnEl = document.getElementById("topFreeBtn");
let topEntEl = document.getElementById("topEnt");
let topEntBtnEl = document.getElementById("topEntBtn");
/*Top Free Container ID */
let topFreeContainer = document.getElementById('topFreeId');
let topPaidContainer = document.getElementById('topPaidId');
let topEntContainer = document.getElementById('topEntId');
topFreeBtnEl.onclick = function() {
    topFreeContainer.style.display = 'block';
    topPaidContainer.style.display = 'none';
    topEntContainer.style.display = 'none';

    topFreeEl.style.display = 'block';

    topPaidEL.style.display = 'none';
    topEntEl.style.display = 'none';

    topFreeBtnEl.style.backgroundColor = '#68FE9A';
    topFreeBtnEl.style.color = 'black';

    topEntBtnEl.style.backgroundColor = 'black';
    topEntBtnEl.style.color = 'white';

    topBtnEl.style.backgroundColor = 'black';
    topBtnEl.style.color = 'white';


}
/*top Free Container */
topBtnEl.onclick = function() {
    topFreeContainer.style.display = 'none';

    topPaidContainer.style.display = 'block';
    topEntContainer.style.display = 'none';

    topPaidEL.style.display = 'block';

    topFreeEl.style.display = 'none';
    topEntEl.style.display = 'none';

    topBtnEl.style.backgroundColor = '#68FE9A';
    topBtnEl.style.color = 'black';

    topEntBtnEl.style.backgroundColor = 'black';
    topEntBtnEl.style.color = 'white';

    topFreeBtnEl.style.backgroundColor = 'black';
    topFreeBtnEl.style.color = 'white';

}
/* top Entertaining apps page*/
topEntBtnEl.onclick = function() {
    topEntContainer.style.display = 'block';
    topFreeContainer.style.display = 'none';
    topPaidContainer.style.display = 'none';

    topEntEl.style.display = 'block';

    topFreeEl.style.display = 'none';
    topPaidEL.style.display = 'none';

    topEntBtnEl.style.backgroundColor = '#68FE9A';
    topEntBtnEl.style.color = 'black';

    topFreeBtnEl.style.backgroundColor = 'black';
    topFreeBtnEl.style.color = 'white';
    topBtnEl.style.backgroundColor = 'black';
    topBtnEl.style.color = 'white';

}

let viewMoreEl = document.getElementById('viewMore');
viewMoreEl.a