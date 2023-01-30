// Display the value of the selected option.
let select = document.getElementById("genres");
let display = document.getElementById('display')

const getValue = () => {
    let text = select.options[select.selectedIndex].text;
    display.innerText = text
}


// Add an additional option to the select tag:
// <option value="classic">Classic</option>
let option = document.createElement('option')
option.setAttribute('value', 'classic')

// The newly added option should be selected by default.
option.selected = true
option.innerText = 'Classic'
select.appendChild(option)


select.addEventListener('change', getValue)
window.addEventListener('load', getValue)