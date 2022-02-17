const buyChocolate = () => {
    let baseProduct = {
        type: "Milk chocolate"
    }
    return baseProduct
}
let chocolate = buyChocolate();

const addFlavoring = (chocObject) => {
    chocObject.flavor = "Vanilla"
    return chocObject;
}

const makeBarkMixture = (chocObject) => {
    if (chocObject.flavor.toLowerCase() === "mint"){
        chocObject.mixed = true
        return chocObject;
    } else {
        chocObject.mixed = false
        return chocObject;
    }
    
}

const bakeCandy = (chocObject) => {
    if (chocObject.mixed === true){
        chocObject.baked = true
        return chocObject;
    } else {
        chocObject.baked === false
        return chocObject;
    }
    
}


const breakBark = (chocObject) => {
    if (chocObject.baked = true){
        chocObject.pieces = [
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
    ];
    return chocObject;
    }
}
let ch = buyChocolate();

const completeChoc = (chObject) => {
    const result = addFlavoring(chObject); makeBarkMixture(chObject); bakeCandy(chObject); breakBark(chObject)
    return console.log(result);
}

completeChoc(ch);