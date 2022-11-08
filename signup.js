/* Form Validation */
function formValidation()
{
        var uid = document.registration.userid;
        var passid = document.registration.passid;
        var uname = document.registration.username;
        var uadd = document.registration.address;
        var ucountry = document.registration.country;
        var uzip = document.registration.zip;
        var uemail = document.registration.email;
        var umsex = document.registration.msex;
        var ufsex = document.registration.fsex; 



        if(passid_validation(passid,7,12))
            {


                if(countryselect(ucountry))
                    {
                        if(allnumeric(uzip))
                        {
                            if(ValidateEmail(uemail))
                            {
                                if(validsex(umsex,ufsex))
                                {
                                
                                }
                            } 
                        }
                    } 

            }
            return false;

} 


/* function to make sure password is long enough/checking if password is empty  */
function passid_validation(passid,mx,my)
{
        var passid_len = passid.value.length;
        
        if (passid_len == 0 ||passid_len >= my || passid_len < mx)
            {
                alert("Password should not be empty / length be between "+mx+" to "+my);
                passid.focus();
                return false;
            }
        return true;
}

/* Function to select country from the options available */
function countryselect(ucountry)
    {
        if(ucountry.value == "Default")
            {
                alert('Select your country from the list');
                ucountry.focus();
                return false;
            }
        else{
            return true;
            }
    }
/* Function to make sure the zipcode is all numeric values*/
    function allnumeric(uzip)
    { 
        var numbers = /^[0-9]+$/;
        if(uzip.value.match(numbers))
            {
                return true;
            }
        else
            {
                alert('ZIP code must have numeric characters only');
                uzip.focus();
                return false;
            }
    }

/* Function to validate the email */
    function ValidateEmail(uemail)
        {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(uemail.value.match(mailformat))
        {
            return true;
        }
        else
            {
                alert("You have entered an invalid email address!");
                uemail.focus();
                return false;
            }
} 


/* Function to make sure user selcts either male or female and also to submit the form */
function validsex(umsex,ufsex)
{
    var x=0;

    if(umsex.checked) 
        {
            x++;
        } 
    if(ufsex.checked){
            x++; 
        }
    if(x==0){
            alert('Select Male/Female');
            umsex.focus();
            return false;
        }
    else
    {
        alert('Form Succesfully Submitted!...........Click on the login button to sign in');
        window.location.reload()
        return true;
    }
}