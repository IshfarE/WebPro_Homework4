var employeeNum = 0, cumulativePay = 0;
var employees, hour, employeeSalary;
var hourPay = [];
var weeklyPay = [];
var emp = 1;
while (emp < 50) 
{
	hour = prompt("Enter Hours from " + (emp));
	if (hour == -1 && employeeNum == 0) 
	{
		alert("Error. Enter one or more employee hours");
		break;
	}
	else 
	{
		if (hour < 0) 
		{
			break;
		}
		else
		{
			hourPay[emp-1] = hour;
			employeeNum++;
			if (hourPay[emp-1] < 40) 
			{
				employeeSalary = hourPay[emp-1] * 15;
				weeklyPay[emp-1] = employeeSalary;
			}
			else 
			{
				employeeSalary = 40 * 15 + (hourPay[emp-1] - 40) * (15 + 15 / 2);
				weeklyPay[emp-1] = employeeSalary;
			}
			cumulativePay += weeklyPay[emp-1];
			emp++;
		}
	}
}
	
var newRow, newColumn;
var chart = document.createElement("Table");
chart.setAttribute("border", "3px")
newRow = chart.insertRow(i);
newColumn = newRow.insertCell(0);
newColumn.innerHTML = "Employee Number";
newColumn.setAttribute("class", "th");
newColumn = newRow.insertCell(1);
newColumn.innerHTML = "Hours";
newColumn.setAttribute("class", "th");
newColumn = newRow.insertCell(2);
newColumn.innerHTML = "Week pay";
newColumn.setAttribute("class", "th");
    
for (var i = 0; i < employeeNum; i++) 
{
	newRow = chart.insertRow(i + 1);
	newColumn = newRow.insertCell(0);
	newColumn.innerHTML = (i + 1);
	newColumn = newRow.insertCell(1);
	newColumn.innerHTML = hourPay[i];
	newColumn = newRow.insertCell(2);
	newColumn.innerHTML = weeklyPay[i];
}
var div = document.getElementById("importer");
div.appendChild(chart);
document.getElementById("cumulativePay").innerHTML = cumulativePay;