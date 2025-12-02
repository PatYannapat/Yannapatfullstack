const fullName = " Yannapat Tounpongkai ";

const cleanedName = fullName.trim();
console.log(`trimedname, ${cleanedName}!`);

const nameParts = cleanedName.split(' ');
console.log(`name parts, ${nameParts}!`);

const finalParts = nameParts.filler(Boolean);
//console.log(`filtered name parts, ${finalparts}!`);

const firstName = finalParts[0];
console.log(`HI, ${firstName}!`);