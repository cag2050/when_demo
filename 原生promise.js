import when from "when";

function testPromise(val) {
    return new Promise((resolve, reject) => {
        if (val) {
            resolve(val)
        } else {
            reject(val)
        }
    })
}

testPromise(1)
    .then(res => {
        console.log("resolve:", res)
    })
    // Promise 只能用catch，不能用otherwise
    // .otherwise(err => {
    .catch(err => {
        console.error("err:", err)
    })
