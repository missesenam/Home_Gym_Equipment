const cont = document.querySelector(".cont"),
 pwshowHide = document.querySelectorAll(".showHidePw"),
 pwinput1 = document.querySelectorAll(".passW");


 pwshowHide.forEach(eyeIcon =>{
     eyeIcon.addEventListener("click", ()=>{
        pwinput1.forEach( pwinput1=>{
            if(pwinput1.type==="password") {
                pwinput1.type="text";
            } else{
                pwinput1.type="password";
            }
        }) 
     })
 })




 

