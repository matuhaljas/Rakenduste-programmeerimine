
function findUser(id) {
    if (id === 1) return {name: "Marcus"}
    return undefined
}

function n () {
    let numFive = 5;
    let strFive = "5"

    let undef;
    let nil = null;

    arr = [1, 2, 3, 4];


    console.log(typeof(numFive));
    console.log(typeof(strFive));

    console.log(typeof(undef));
    console.log(typeof(nil));

    user = findUser(2);
    console.log(user);

    console.log(Array.isArray(arr));

}

n();