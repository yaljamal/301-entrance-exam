'user strict';
var arryNumber = [1, 2, 3, 4];
function greaterThan(arryNumber, number) {
    var counter = 0;
    for (var i = 0; i < arryNumber.length; i++) {
        if (arryNumber[i] > number) {
            counter++;
        }
    }
console.log(counter);
}
greaterThan(arryNumber, 2);
greaterThan([4,2,3,1],3);
greaterThan([2,8,-1],8);