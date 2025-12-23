const book = {
    title:"1984",
    author: "George Orwell",
    isAvailable: false
};

bookJSON = JSON.stringify(objBook);
console.log(JSON.stringify(book));
console.log(typeof bookJSON)