const registrationData = new Date('2023-09-17T10:00:00Z');
const options = {
    year: 'numeric' ,
    month: 'long' ,
    day: 'numeric' ,
    timeZone: 'Asia/Bangkok'
};

const formattedDate = registrationData.toLocaleDateString('th-TH', options);
console.log(`Registration Date: ${formattedDate}`)