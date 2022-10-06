export const userValidation = (str) =>{
    if(
        str.length >= 4 && str.length <= 25 &&
        (/[a-zA-Z]/).test(str.slice(0,1)) &&
        (/^\w+$/).test(str) &&
        (/[a-zA-Z0-9]/).test(str.slice(-1))

    ){
        return true;
    }else{
        return false;
    }

}



/*
    Rules

    The username is beetween 4 and 25 char.
    It must start with a letter.
    It can only contain letters, numbers, and the underscore char.
    It cannot end with an underscore char.

    for example : u__hello_world123

*/