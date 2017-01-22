const Kir = process.argv;
let nar=[];

nar.push(Number(Kir[2]));
nar.push(Number(Kir[3]));

console.log(nar);

let sum =[];
sum = Number(Kir[2])+ Number(Kir[3]);


if(sum < 10)
    { console.log(' sum is less than 10');}
else if((sum > 10) && (sum < 100))
    { console.log('sum is greater than 10 but less than 100'); }
else if((sum > 100) && (sum < 1000))
    { console.log('sum is greater than 100 and less than 1000'); }
else
    { console.log("sum is greater than  1000");}