function ValidateEmail(inputText){
    var mailformat=/^\w+([\.*]?\w+)*@\w+([\.*]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)){
        alert("valid email address");
        document.form1.text1.focus();
        return true;
    }
    else{
        alert("invalid email please enter valid email");
        document.form1.text1.focus();
        return false;
    }
}