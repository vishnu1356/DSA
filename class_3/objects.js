const x = {
    name: "Vishnu",
    work: "Software Engineer",
}

let y = { name: "Prince", work: "Web Developer",}

console.log(x)
console.log(y)
console.log(x["name"])
console.log(y.name)

x["name"] = "Vishal"
y.work = "Graphics Designer"
console.log(x)
console.log(y)

delete x.name;
delete y.work;
console.log(x)
console.log(y)