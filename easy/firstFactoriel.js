export const firstFactoriel = (num) => {

    let factoriel = 1;

    for(let i = 1; i <= num; i++){
        factoriel *= i;
    }
    return factoriel;
}