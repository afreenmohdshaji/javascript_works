var year=2023;
if((year %100==0 && year %400==0) || (year %100!=0 && year %4==0)){
    console.log(`${year} is leap year`);
}
else{
    console.log(`${year} is not a leap year`);
}