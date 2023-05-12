const showHiddenPass = (inputPass,inputIcon) =>{

    const input = document.getElementById(inputPass);
    const iconEye = document.getElementById(inputIcon);

    iconEye.addEventListener('click',()=>{
        if(input.type === 'password'){
            input.type = 'text';

            iconEye.classList.add('fa-eye');
            iconEye.classList.remove('fa-eye-slash');
        }else{
            input.type = 'password';
            iconEye.classList.add('fa-eye-slash');
            iconEye.classList.remove('fa-eye');
        }
    });

}
showHiddenPass('inputPass','inputIcon');