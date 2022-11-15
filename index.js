//Variable use to calculate total number of months included in the dataset
//Initialize variable with first amount on array to improve for
var total_profit_losses = finances[0][1];

//Variables used to calculate average change total 
var average_change_total = 0;
var current_change_amount = 0;
var current_change_date = ''

//Variables used to calculate calculates greatest increase in profits(date and amount)
var greatest_increase_date = '';
var greatest_increase_amount = 0;

//Variables used to calculate calculates greatest decrease in losses (date and amount)
var greatest_decrease_date = '';
var greatest_decrease_amount = 0;

// Use of only 1 for to improve efficiency and do less operations
for (var index = 1; index < finances.length; index++) {

    //Calculation of the total amount of Profit/Losses over the entire period
    total_profit_losses += finances[index][1];

    //Store current change amount and current date to simplify code reading.
    // For this solution : 
    //  -The current amount was calculated doing a substraction between current and previous months in each round
    //  -The current date will be the date of the current month we are analizing in each round
    current_change_amount = finances[index][1] - finances[index - 1][1];
    current_change_date = finances[index][0];

    //Calculates average change total using each current average change 
    average_change_total += current_change_amount;

    // Calculates greatest increase in profits and greatest decrease in losses (date and amount) based on current amount change
    if ((current_change_amount) > greatest_increase_amount) {

        greatest_increase_amount = current_change_amount;
        greatest_increase_date = current_change_date;
    }
    else if (current_change_amount < greatest_decrease_amount) {

        greatest_decrease_amount = current_change_amount;
        greatest_decrease_date = current_change_date;
    }

}


//Prints on console log

//Title and divider
console.log('Financial Analysis\n----------------');

//The total number of months included in the dataset.
console.log('Total Months: ' + finances.length);

//The net total amount of Profit/Losses over the entire period.
console.log('Total: $' + total_profit_losses);

//The average of the changes in Profit/Losses over the entire period.
console.log('Average Change: $' + (average_change_total / finances.length).toFixed(2));

//The greatest increase in profits (date and amount) over the entire period.
console.log('Greates Increase: ' + greatest_increase_date + ': $' + greatest_increase_amount )

//The greatest decrease in losses (date and amount) over the entire period.
console.log('Greates Decrease: ' + greatest_decrease_date + ': $' + greatest_decrease_amount)