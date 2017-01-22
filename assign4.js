// tip calculator program
const kir= process.argv;

let nk=[];

const Mealcost = nk.push(Number(kir[2]));
const TiPercent = nk.push(Number(kir[3])); 


const tipAmount = (Number(kir[3]) / 100) * Number(kir[2]);
const totalOwing = tipAmount + Number(kir[2]);
const Stat = `your meal was $${Number(kir[2])} + a ${Number(kir[3])}% tip = ${totalOwing}`;

console.log(Stat);