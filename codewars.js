// You might know some pretty large perfect squares.But what about the NEXT one ?
//  Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
//  Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then - 1 should be returned.You may assume the parameter is non - negative.

//     Examples:
// findNextSquare(121)-- > returns 144
// findNextSquare(625)-- > returns 676
// findNextSquare(114)-- > returns - 1 since 114 is not a perfect square

function findNextSquare(sq) {
    var num = sq ** .5;
    if (num % 1 == 0) {
        return (num + 1) ** 2
    }
    else {
        return -1;
    }
}

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

function removeChar(str) {
    return str.slice(1, -1);
}

// In this simple assignment you are given a number and have to make it negative.But maybe the number is already negative ?

// Example :
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12

function makeNegative(num) {
    return 0 - Math.abs(num);
}


// Implement a method that accepts 3 integer values a, b, c.The method should return true 
// if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) { return true; }
    else return false;
}