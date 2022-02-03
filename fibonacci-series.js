let a = 0, b = 1;
for (let index = 0; index <= 20; index++) {
    let c = a + b;
    console.log("F"+index+"= "+a);
    a = b;
    b = c;
}