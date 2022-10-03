let jam = "19"

let p = new Promise((resolve, reject) => {

        if (jam >= 1 && jam < 12) {
            resolve("pagi")
        }else if (jam >= 12 && jam < 18){
            resolve("siang")
        }else{
            reject("malam")
        }

})

p.then((result) => {
    alert(result)
}).catch((error) => {
    alert(error)
})