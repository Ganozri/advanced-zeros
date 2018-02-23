module.exports = function getZerosCount(number, base)
{
var S=0;
  var max;
var del;
for(var i=2;i<=base;i++)
{
	if(base%i==0)
		{
        del=0;
        for(var k=2;k<=i;k++)
        	{
        if(i%k==0){del++;}
        	}
        if(del==1)
        	{
        max=i;
        	}
		}
}

     while (number >= max)
     {
       number = Math.floor(number/max);
       S = S + number;
     }
         if(base>(max*max)&&base%(max*max)==0)
    {
    S=S/2;
    }
    if(base>(max*max)&&base%(max*max*max)==0)
    {
    S=S/1.5;
    }
 return (Math.floor(S));
}
