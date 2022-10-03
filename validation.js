document.addEventListener("DOMContentLoaded", () => {
    
    const phoneForm = document.querySelector("#phone");
    const Errorvar = document.querySelector("#error");
    const Alert = document.querySelector(".alert")
    const password = document.querySelector("#pass")
    const PanNumber = document.querySelector("#pan")

    if (!phoneForm || !Errorvar) {
        return;
    }

    
    let phoneIsValid = false;


    const validatePan = (value) => {
        const PanNumbervalidate = /^[A-Z]{3}[C,H,F,A,T,B,L,J,G,P]{1}[0-9]{4}[A-Z]{1}/;
        if(value.match(PanNumbervalidate)){
            return true;
        }
        return false;
    };
    const validatePhone = (value) => {
        // const phoneValidation = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

        if (value.length > 10) {
            return true;
        }
        return false;
    };
    const validatePhonecrt = (value) => {
        // const phoneValidation = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

        if (value.length == 10) {
            return true;
        }
        return false;
    };
    const validatePass = (value) => {
        const passvalidate = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;
        if(value.match(passvalidate) && value.length >= 8){
            return true;
        }
        return false;
    };
    const applyValidStyle = (el) => {
        
        el.innerText = "Phone number should contain 10 digits only..."
        el.style.display = "block"
        Alert.style.display = "flex"
        
    };
    const applyValidStylecrt = (el) => {
        
        el.style.display = "none"
        Alert.style.display = "none"
    };
    const applyvaliditePass = (el) => {
        el.innerText = "Invalid Password"
        el.style.display = "block"
        Alert.style.display = "flex"
    }
    const applyValidStylepan = (el) => {

        el.innerText = "Invalid Pan Please Recheck Again"
        el.style.display = "block"
        Alert.style.display = "flex"
    };
    phoneForm.addEventListener("input", (event) => {
        const phoneFormValue = event.target.value;
        if (validatePhone(phoneFormValue)) {
            applyValidStyle(Errorvar);
        }
    });
    phoneForm.addEventListener("input", (event) => {
        const phoneFormValue = event.target.value;
        if (validatePhonecrt(phoneFormValue)) {
            applyValidStylecrt(Errorvar);
        }
    });
    password.addEventListener("input", (event) => {
        const passfromValue = event.target.value;
        if(validatePass(passfromValue)) {
            applyvaliditePass(Errorvar)
        }
    });
    password.addEventListener("input", (event) => {
        const passfromValue = event.target.value;
        if(validatePass(passfromValue) == passfromValue) {
            applyValidStylecrt(Errorvar)
        }
    });
    PanNumber.addEventListener("input", (event) => {
        const pancardValue = event.target.value;
        if( validatePan(pancardValue) && pancardValue.length == 10){
            applyValidStylepan(Errorvar)
        }
    });

});