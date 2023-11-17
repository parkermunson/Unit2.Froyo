const flavors = window.prompt("enter some flavors", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
console.log(flavors);

const flavorsArr = flavors.split(',');

function countFlavor(flavorsArr){
    let count = [];
    for(let key in flavorsArr){
        const flavor = flavorsArr[key]
        if(count[flavor] === undefined){
        count[flavor] = 1
        } else{
            count[flavor]++
        }
    }
    return count
}
console.log(countFlavor(flavorsArr))


