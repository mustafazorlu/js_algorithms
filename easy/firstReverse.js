export const firstReverse = (str) =>{
    let arr = [];
    let reversedWord = "";
    for(let i = 0; i < str.length; i++){
        arr[i] = str[(str.length -1 ) - i];
        reversedWord += arr[i];
    }
    return reversedWord;
}