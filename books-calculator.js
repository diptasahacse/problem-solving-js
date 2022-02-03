function totalPagesCalculator(book1, book2, book3){
    return "Total "+ (book1*100 + book2*200 + book3*300) + " Pages Needed..";
}
let totalBookPages = totalPagesCalculator(1,1,1);
console.log(totalBookPages);