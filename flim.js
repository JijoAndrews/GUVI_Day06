
class movie
{

 constructor(title,studio,rating="PG")
 {
    this.title=title;
    this.studio=studio;
    this.rating=rating;
 }

    getPG(moviearr)
    {
       if(moviearr.length===0)    
        return "the given movie arry is empty.";

        var ratedmovies= moviearr.filter((element)=>element.rating==="PG");
      
        if(ratedmovies.length===0)
        {
            return "pg movies are not present in the given movie list.";
        }else
        {
            return ratedmovies;
        }

    }
}

//creating objects of movie class.
var filim = new movie("mango","foxstudio","PG"); 
var filim1 = new movie("mango1","foxstudio","PG"); 
var filim2 = new movie("mango2","foxstudio","PG"); 
var filim3 = new movie("mango3","foxstudio","PG"); 
var filim4 = new movie("mango4","foxstudio","PG"); 

//generic method-1
function createmovie()
{
    return new movie("Casino Royale","Eon Productions","PG13");
}
//generic method-2
function createmoviefunc(name,productionhouse,rate)
{
    return new movie(name,productionhouse,rate);
}

//ananymous function
var createanymovie = function(name,productionhouse,rate){return new movie(name,productionhouse,rate)}

console.log( "movies:",filim.getPG([filim,filim1,filim2,filim3,filim4]));//provieds the list of films which comes under rating PG.
console.log(createmovie());
console.log(createmoviefunc("Casino Royale","Eon Productions","PG13"));
console.log(createanymovie("Casino Royale","Eon Productions","PG13"));




