//function for element from input field
function getInputFieldValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    // inputField.value = "";
    return inputValue;
  }
//function for element value form innertext
  function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
  }

  //set innertext element
  function setTextaValueById(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
  }


//for getting per player budget
document.getElementById('calculate-btn').addEventListener('click',function(){
    let perPlayerBudget =  getInputFieldValueById('calculate-field');
    //player cost calculation
    NewplayerExpenses = perPlayerBudget * selectedPlayersArray.length;

    setTextaValueById('player-expenses-field',NewplayerExpenses);
})

document.getElementById('calculate-total-btn').addEventListener('click',function(){
    let managerCost = getInputFieldValueById('manager-field');
    let coachCost = getInputFieldValueById('coach-field');
    
    let totalCost = managerCost + coachCost + NewplayerExpenses;

    setTextaValueById('total-expenses-field',totalCost);
    

})