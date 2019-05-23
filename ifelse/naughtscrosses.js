let t1 = "x";
let t2 = "o";
let t3 = "x";

let m1 = "o";
let m2 = "o";
let m3 = " ";

let b1 = "x";
let b2 = " ";
let b3 = "o";

console.log("     |     |    ");
console.log(`  ${t1}  |  ${t2}  |  ${t3}  `);
console.log("     |     |    ");
console.log("----------------");
console.log("     |     |    ");
console.log(`  ${m1}  |  ${m2}  |  ${m3}  `);
console.log("     |     |    ");
console.log("----------------");
console.log("     |     |    ");
console.log(`  ${b1}  |  ${b2}  |  ${b3}  `);
console.log("     |     |    ");

if (t1 == t2 && t2 == t3){
    console.log("You win!");
}
else if(m1 == m2 && m2 == m3){
    console.log("You win");
}
else if (b1 == b2 && b2 == b3){
    console.log("You win");
}
else{
    console.log("Better luck next time!");
}