$(document).ready(function(){

	DisplayCurrentTimeInBinary(); 	
  	
});


function DisplayCurrentTimeInBinary() {
            //var dt = new Date();
            var refresh = 1000; //Refresh rate 1000 milli sec means 1 sec
            //var cDate = (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
            
            var current_time = new Date();
	
	var hours = current_time.getHours();
  	var minutes = current_time.getMinutes();
  	var seconds = current_time.getSeconds();

	
		
	SetTime(GetBinDigit(String(hours).charAt(0)), "hour-column-1");
  	SetTime(GetBinDigit(String(hours).charAt(1)), "hour-column-2");
		
	
	SetTime(GetBinDigit(String(minutes).charAt(0)), "minute-column-1");
  	SetTime(GetBinDigit(String(minutes).charAt(1)), "minute-column-2");
  	
  	
    SetTime(GetBinDigit(String(seconds).charAt(0)), "second-column-1");
  	SetTime(GetBinDigit(String(seconds).charAt(1)), "second-column-2");        
            
            
            //document.getElementById('cTime').innerHTML = cDate + " - " + dt.toLocaleTimeString();
            
            
            
            
            window.setTimeout('DisplayCurrentTimeInBinary()', refresh);
}

function SetTime(bin_num, divID)
{
	var eighth = $('#' + divID + ' ul').children("li[value='8']:first").children("figure:first");
	var forth = $('#' + divID + ' ul').children("li[value='4']:first").children("figure:first");
	var second = $('#' + divID + ' ul').children("li[value='2']:first").children("figure:first");
	var first = $('#' + divID + ' ul').children("li[value='1']:first").children("figure:first");
	
	for(i = 0; i < bin_num.length; i++)
	{
		if (i == 0)
		{
			SelectedCircle(bin_num, i, eighth);
		}
		if (i == 1)
		{
			
			SelectedCircle(bin_num, i, forth);
		}
		if (i == 2)
		{
			SelectedCircle(bin_num, i, second);
		}
		if (i == 3)
		{
			SelectedCircle(bin_num, i, first);
		}
	}
	
}

function SelectedCircle(bin_num, index, div)
{
	if (bin_num.charAt(index) == "1"){
		div.removeClass("circle");
		div.addClass("highted-circle");
	}
				
	else{
		div.removeClass("highted-circle");
		div.addClass("circle");
	}
}



function GetBinDigit(input)
{
	var bin_digit = dec2Bin(input);
	
	if (bin_digit.length < 4){
		bin_digit = addLeadingZeros(bin_digit);
	}
		
	return bin_digit;
}

function addLeadingZeros(input)
{
	var numOfZerosToAdd = 4 - input.length;

	
	var result = input;
	
	while(numOfZerosToAdd > 0)
	{
		result = "0" + result;
		numOfZerosToAdd = 4 - result.length;
	}
	
	return result;
	
}


function dec2Bin(decimal_number){
    return (decimal_number >>> 0).toString(2);
}