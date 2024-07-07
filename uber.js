class uber
{
    constructor(pickuploc,destinationloc,dist)
    {
        this.dist=dist;
        this.pickuploc=pickuploc;
        this.destinationloc=destinationloc;
    }

    calcualte()
    {

        if(!this.pickuploc|| !this.destinationloc)
        {
            return "enter missing location to calculate price amount";
        } 
        else if(this.pickuploc===this.destinationloc)
        {
            return " pickup location and drop location are same.";
        }  
        else if(this.dist<=0)
        {
            return "the distance is too small to calculate price,provide higher distance.";
        }
       
        let amountpermile =this.dist<100?10.0:15.0;// if distance is greater than 100 kms the price will increased from 10 to 15 per km.
        let  price=this.dist *amountpermile;
        return ` The price from ${this.pickuploc} to ${this.destinationloc} is ${price} Rs.`;
    }
}


var ubercal = new uber("ashoknagar","Annagar",200);//enter--> pickup location, drop location and distance to calculate price.
console.log(ubercal.calcualte());

