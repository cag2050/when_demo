import when from "when";

function deferTest(val) {
    let deferred = when.defer()
    if (val) {
        deferred.resolve(1)
    } else {
        deferred.reject("err")
    }
    return deferred.promise
}

deferTest(false)
    .then(res => {
        console.log(res)
    })
    .otherwise(err => {
        // .catch(err => {
        console.error(err)
    })
