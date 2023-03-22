import when from "when"

let p = when(1)
p
    .then((v) => {
        console.log("then")
        console.log(v)
        // throw new Error('oops!');
    })
    // otherwise或catch，都可以
    .otherwise((err) => {
    // .catch((err) => {
        console.log("otherwise")
        console.log(err)
    })
