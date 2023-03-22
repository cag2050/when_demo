import when from "when"

function whenReturn(val) {
    return when.promise((resolve, reject) => {
        if (val) {
            resolve(val)
        } else {
            reject(val)
        }
    })
}

// whenReturn(1)
whenReturn(false)
    .then(res => {
        console.log("resolve:", res)
    })
    .otherwise(err => {
        // .catch(err => {
        console.error("err:", err)
    })
