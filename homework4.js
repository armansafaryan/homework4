
// 3) Exercise

const combiner = function(arg)  {
         return arg[0].concat(arg[1])
};

// 4) Exercise
const findMinMax = function(array, biggest) {
	if(biggest){ return Math.max.apply(null, array)};
	else if(!biggest){ return Math.min.apply(null, array)};
};

// 5) Exercise
const forEach = function(array, func)
{
	
	let juice = 0; 
	while (juice < array.length)
	{
        func(array[juice]);
        juice++; }
};

// 6) Exercise
const SumUp = function(array)
{
	
	let Sum888 = 0; 
	let lngth = 0; 
	while(lngth < array.length)
	{
		Sum888 += array[lngth]; 
		lngth++; 
	};
	return Sum888;
}

// 7) Exercise  
const reverse = function(str)
{
	let Str888 = ""; 
	let loop777 = 0; 
	while(loop777 < str.length)
	{
		Str888 += str[str.length - loop777 - 1];
		loop777++; 
	}
    return Str888;
};

// 8) Exercise
const checkerBoard = function(n)
{
	const checkerBlack = "⬛"; 
	const checkerWhite = "⬜";
	let row = "";


	let loop777 = 0; 
	while(loop777 < n) 
	{
		row += checkerBlack + checkerWhite; 
		loop777++; 
	};

	
	let loop999 = 0; 
	while(loop999 < n)
	{
		if(loop999 % 2){console.log(reverse(row))}
		else{console.log(row)}
		loop999 += 1; 
	}
};


// End
