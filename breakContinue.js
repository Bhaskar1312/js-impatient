
const arr = [[1,2,3], [0, 0, 0]]
let i=0;
//labelled breaks
outer:
while(i< arr.length) {
    let j=0;
    while(j<arr[i].length) {
        if(arr[i][j] === 0) {
            console.log("Found", i, j)
            break outer
        }
        j++;
    }
    i++;
}
console.log(i)

//there is even labelled continue
