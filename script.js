var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    //countries from asia contient
    var data= JSON.parse(this.response);
    var casia =data.filter((x)=>x.region==="Asia"); 
    console.log(casia);
//countries with population less than 2 lacs

var population=data.filter((x)=>x.population<200000);
console.log(population);

//total population of the countries
var total=data.reduce((sum,cv)=>sum+cv.population,0);
console.log("total population:" +total);

//  country which use US Dollars as currency

var usd=data.filter((x)=>{
   for(var i in x.currencies){
       if(x.currencies[i].code==="USD"){
       return true;
}
   }
}).map((ele)=>console.log(ele.name));


//for each

data.forEach(element=>{
    console.log(`${element.name}-${element.capital}-${element.flag}`);
})
}