let billAmtInput = document.getElementById('billamt')
let serviceQualInput = document.getElementById('serviceQual')
let numOfPeopleInput = document.getElementById('peopleamt')
let totalTip = document.getElementById('totalTip')

// Create a function called calculateTip() that takes no parameter.
const calculateTip = (e) => {
    e.preventDefault()
    // Create a variable called billAmount that fetches the value of the input, which id is billAmt (check the HTML file) –> It’s the amount of the bill.
    let billAmount = billAmtInput.value

    // Create a variable called serviceQuality that fetches the value of the input, which id is serviceQual (check the HTML file) –> It’s the quality of the service.
    let serviceQual = serviceQualInput.value

    // Create a variable called numberOfPeople that fetches the value of the input, which id is numOfPeople (check the HTML file) –> It’s the number of people sitting at the table.
    let numOfPeople = numOfPeopleInput.value

    // Create a condition :
    // If serviceQuality is equal to zero, or billAmount is empty, alert the user to enter these values.
    if(serviceQual === 0 || !billAmount || isNaN(billAmount)){
        alert('Enter the values!')
        return
    }

    // Create another condition after the first one :
    // If the input numberOfPeople is empty or is smaller than 1, set a default value of 1 to numberOfPeople and make sure that the tag which id is each, is not displayed (check the end of the HTML file).
    if(!numOfPeople || numOfPeople <= 1){
        numOfPeople = 1
        document.getElementById('each').style.display = 'none'
    }

    // Create a variable named total: the value should be ( billAmount * serviceQuality ) / numberOfPeople (the outcome is the average tip each person should pay)
    let total = billAmount * serviceQual / numOfPeople

    // Use the toFixed method to round total to two decimal points.
    total = total.toFixed(2)

    // Add the CSS property “display:block” to the tag which id is totalTip.
    totalTip.style.display = 'block'

    // Display the variable total in the tag which id is tip.
    document.getElementById('tip').innerText = total
}

// Second Part:
// To avoid displaying the total if the function calculateTip() is not called, add the CSS property “display:none” to the tag which id is totalTip.
totalTip.style.display = 'none'
// Call the function calculateTip() when the tag which id is calculate is clicked.
let calculate = document.getElementById('calculate')
calculate.onclick = calculateTip
// Hint : use the method onclick.
document.addEventListener('submit', calculateTip)