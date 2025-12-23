const names = ["Alice", "Bod", "Charlie"];
for (let i = 0; i <names.length; i++) { 
    console.log(names)
}

names.forEach((name) => {
    console.log(name);
});

for (const name of names) {
    console.log(name);
}

names.forEach(myFunction);

function myFunction(name){
    console.log(name);
}