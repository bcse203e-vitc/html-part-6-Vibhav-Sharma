
function findSecondMinMax(arr) {
    arr.sort((a, b) => a - b);
    return { secondMin: arr[1], secondMax: arr[arr.length - 2] };
}

console.log(findSecondMinMax([4, 2, 9, 1, 5, 6])); 
