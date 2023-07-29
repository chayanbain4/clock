
let f = setInterval(function (hour, min, second) {

    let a = new Date()
    let x = a.getHours()
    let y = a.getMinutes()
    let z = a.getSeconds()
    let v = a.getDate()
    console.log(x, y, z,v)



    let C = document.getElementById("hour")
    C.innerHTML = x
    let d = document.getElementById("min")
    d.innerHTML = y
    let e = document.getElementById("sec")
    e.innerHTML = z
    let f = document.getElementById("day")
    f.innerHTML = v
 
    
    
},1000)

