let budget = 2000;
let expensesArray = [];

class Expense {
  constructor ( name, cost ) {
    this.name = name;
    this.cost = cost;
  }// end constructor
}//end Expense class



$ ( document ).ready (function() {
  $( '#addExpenseButton' ).on('click', function () {
      console.log('in addExpenseButton on click');
      // get user inputs
      //create a new expense
      let newExpense = new Expense ( $( '#nameIn' ).val(), $( '#costIn' ).val() );
      //push new expense into expenses array
      expensesArray.push( newExpense );
      updateExpenses();

  });//end addExpenseButton on click
  //init page
  $( '#budgetDiv' ).append( '<h2>Budget: $' + budget.toFixed ( 2 ) + ' </h2>' );
});//end doc readys

function updateExpenses() {
  console.log( 'in updateExpenses' );
  //start totalExpenses at 0
  let totalExpenses = 0;
  //loop through and display expensesArray on DOM
  let outputElement = $( '#expensesList' );
  outputElement.empty();
  for (expense of expensesArray) {
    outputElement.append( '<li> ' + expense.name + ': $' + Number(expense.cost).toFixed (2) + ' </li')
    totalExpenses += Number(expense.cost);


  }//end for of loop
  console.log('totalExpenses: ', totalExpenses);
  updateRemainingBudget( totalExpenses );
}//end updateExpenses

function updateRemainingBudget ( allExpenses ) {
  console.log('in updateRemainingBudget: expenses', allExpenses );
  let remainingBudget = budget - allExpenses;
  console.log('remaining budget:', remainingBudget);
  let outputDiv = $( '#outputDiv' );
  outputDiv.empty();
  outputDiv.append ('<h2>Remaning Budget: $' + remainingBudget.toFixed(2) + '</h2>');
  if ( remainingBudget<0 ) {
    outputDiv.css('color', 'red');
  }//end negative number
}// end updateRemainingBudget
