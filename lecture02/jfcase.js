const status = 200;

if (status === 200) {
    confirm.log("OK")
} else if (status === 400) {
    //Error!
} else {
    //Unknown
}

switch (status) {
    case 200:
        break;
    case 400:
        console.log("Bad Request");
        break;
    default:
        console.log("Unknown Status");
        break;
}

const statuMessage = (istatus === 200) ? "OK" :"Bad  Request";
console.log(statuMessageS)