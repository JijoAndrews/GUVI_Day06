
class circle
{ 
   
    constructor(_radius=1.0,_color="red")
    {
        this._radius=_radius;
        this._color=_color;
    }

    getradius()
    {
        return this._radius;
    }

    setradius(inputradius)
    {
        this._radius=inputradius;
    }

    getcolor()
    {
        return this._color;
    }

    setcolor(inputcolor)
    {
        this._color=inputcolor;
    }
    getareaofcircle()
    {
        var pi=3.14;
        var area = pi* this._radius * this._radius ;
        return area.toFixed(2);
    }

    getcircumofcircle()
    {
        var pi=3.14;
        var area = 2* this._radius *pi;
        return area.toFixed(2);
    }

    toString()
    {   
        return `circle[${this._radius},${this._color}]`;
    }
}

var value = new circle();//creating circle object with default values.
var value1 = new circle(2.0);//circle object with radius input.
var value2 = new circle(3.0,"white");//circle object with both  inputs.


console.log(value2.getradius(),value2.getcolor());
value2.setradius(25);
value2.setcolor("Yellow");
console.log("setting radius:",value2.getradius(),"area of circle:",value2.getareaofcircle(),"circum of circle:",value2.getcircumofcircle(),value2.toString());
