// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23
// Find the sum of all the multiples of 3 or 5 below 1000;

function findSumofGivenMultiples(target, multiples) {
    if (multiples?.length !== 2) {
        console.log(`multiples length can not be more than or les than 2`)
    }

    const nFirst = Math.floor(target/multiples[0])
    const firstMultiplesSum = (nFirst * (nFirst + 1) * multiples[0])/2
    const nSecond = Math.floor(target/multiples[1])
    const secondMultiplesSum = (nSecond * (nSecond + 1) * multiples[1])/2
    const nIntersection = nFirst*nSecond/target; //Math.floor(target/(multiples[0]*multiples[1]))
    const intersectionSum = (nIntersection * (nIntersection + 1) * multiples[0] * multiples[1])/2
    
    return firstMultiplesSum + secondMultiplesSum - intersectionSum
};

console.log(findSumofGivenMultiples(1000, [3, 5]));