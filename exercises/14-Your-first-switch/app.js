function getColor(selection)
{
// console.log(selection);
// console.log(selection);
	switch(selection){
        //Add more options here
        case "red":
            return true;
        case "green":
            return true;
        case "blue":
            return true;
	    default :
	    	return false;//returns false because the user picked an unavailable color
	}
} 

var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname.trim());
if(isAvailable) console.log('Good news! That color is available');
else console.log('We are sorry, that color is not available');