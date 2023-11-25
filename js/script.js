function createInputElements() {
  const inputContainer = document.querySelector('.input-container');
  inputContainer.innerHTML = "";
  // Create div for 'How many digits do you want?' input
  const digitsInputGroup = document.createElement('div');
  digitsInputGroup.classList.add('input-group');

  const digitsLabel = document.createElement('label');
  digitsLabel.setAttribute('for', 'length');
  digitsLabel.textContent = 'How many digits do you want?';

  const digitsInput = document.createElement('input');
  digitsInput.setAttribute('type', 'number');
  digitsInput.setAttribute('id', 'length');
  digitsInput.setAttribute('min', '8');
  digitsInput.setAttribute('value', '8');

  digitsInputGroup.appendChild(digitsLabel);
  digitsInputGroup.appendChild(digitsInput);

  // Create div for 'Choose a combination' select input
  const combinationInputGroup = document.createElement('div');
  combinationInputGroup.classList.add('input-group');

  const combinationLabel = document.createElement('label');
  combinationLabel.setAttribute('for', 'combination');
  combinationLabel.textContent = 'Choose a combination:';

  const combinationSelect = document.createElement('select');
  combinationSelect.setAttribute('id', 'combination');

  const combinations = [
      'Capital Alphabets', 'Small Alphabets', 'Numbers', 'Special Characters',
      'Alphabets (Capital + Small)', 'Alphabets + Numbers (Capital + Small)',
      'Alphabets + Special Characters (Capital + Small)', 'Numbers + Special Characters',
      'Alphabets (Capital) + Numbers + Special Characters', 'Alphabets (Small) + Numbers + Special Characters',
      'Alphabets (Capital + Small) + Numbers', 'Alphabets (Capital + Small) + Special Characters',
      'Alphabets (Capital + Small) + Numbers + Special Characters'
  ];

  combinations.forEach((option, index) => {
      const optionElement = document.createElement('option');
      optionElement.setAttribute('value', index + 1);
      optionElement.textContent = option;
      combinationSelect.appendChild(optionElement);
  });

  combinationInputGroup.appendChild(combinationLabel);
  combinationInputGroup.appendChild(combinationSelect);

  // Create div for 'How many suggestions do you want?' input
  const suggestionsInputGroup = document.createElement('div');
  suggestionsInputGroup.classList.add('input-group');

  const suggestionsLabel = document.createElement('label');
  suggestionsLabel.setAttribute('for', 'suggestions');
  suggestionsLabel.textContent = 'How many suggestions do you want?';

  const suggestionsInput = document.createElement('input');
  suggestionsInput.setAttribute('type', 'number');
  suggestionsInput.setAttribute('id', 'suggestions');
  suggestionsInput.setAttribute('min', '1');
  suggestionsInput.setAttribute('value', '1');

  suggestionsInputGroup.appendChild(suggestionsLabel);
  suggestionsInputGroup.appendChild(suggestionsInput);

  // Create div for buttons
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('btn-container');

  const generateButton = document.createElement('button');
  generateButton.textContent = 'Generate Code';
  generateButton.addEventListener('click', generateCode);

  const downloadButton = document.createElement('button');
  downloadButton.textContent = 'Download Code';
  downloadButton.addEventListener('click', downloadAsExcel);

  buttonsContainer.appendChild(generateButton);
  buttonsContainer.appendChild(downloadButton);

  // Append all created elements to the input container
  inputContainer.appendChild(digitsInputGroup);
  inputContainer.appendChild(combinationInputGroup);
  inputContainer.appendChild(suggestionsInputGroup);
  inputContainer.appendChild(buttonsContainer);
}

// Call the function to generate and append the HTML elements
createInputElements();

//----------------------------------------------------------------------//
function generateCode() {
  const length = parseInt(document.getElementById('length').value);
  const combination = document.getElementById('combination').value;
  const suggestions = parseInt(document.getElementById('suggestions').value);
  
  let generatedCodes = [];

  let table = document.createElement('table');


  // Create table header
  let thead = document.createElement('thead');
  let headerRow = document.createElement('tr');

  let serialNumberHeader = document.createElement('th');
  serialNumberHeader.textContent = 'Sl';

  let codesHeader = document.createElement('th');
  codesHeader.textContent = 'Codes';

  let actionHeader = document.createElement('th');
  actionHeader.textContent = 'Action';

  headerRow.appendChild(serialNumberHeader);
  headerRow.appendChild(codesHeader);
  headerRow.appendChild(actionHeader);

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  let tbody = document.createElement('tbody');

  for (let i = 0; i < suggestions; i++) {
    let generatedCode = '';

    let chars = '';

    if (combination === '1') {
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      } else if (combination === '2') {
        chars = 'abcdefghijklmnopqrstuvwxyz';
      } else if (combination === '3') {
        chars = '0123456789';
      } else if (combination === '4') {
        chars = '!@#$%^&*()_+[]{}|;:,.<>?';
      } else if (combination === '5') {
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      } else if (combination === '6') {
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      } else if (combination === '7') {
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+[]{}|;:,.<>?';
      } else if (combination === '8') {
        chars = '0123456789!@#$%^&*()_+[]{}|;:,.<>?';
      } else if (combination === '9') {
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
      } else if (combination === '10') {
        chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
      } else if (combination === '11') {
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      } else if (combination === '12') {
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+[]{}|;:,.<>?';
      } else if (combination === '13') {
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
      }

    chars = chars.split('').sort(() => Math.random() - 0.5).join('');

    for (let j = 0; j < length; j++) {
      generatedCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    generatedCodes.push(generatedCode);

    let row = document.createElement('tr');

    let serialNumberCell = document.createElement('td');
    serialNumberCell.textContent = i + 1;

    let codesCell = document.createElement('td');
    codesCell.textContent = generatedCode;

    let actionCell = document.createElement('td');

    let copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.onclick = function() {
      copyToClipboard(generatedCode);
    };

    actionCell.appendChild(copyButton);

    row.appendChild(serialNumberCell);
    row.appendChild(codesCell);
    row.appendChild(actionCell);

    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  document.getElementById('generatedCode').innerHTML = '';
  document.getElementById('generatedCode').appendChild(table);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Code copied to clipboard!');
    })
    .catch(err => {
      console.error('Unable to copy:', err);
    });
}
//----------------------------------//
// function convertTableToCSV() {
//   const table = document.getElementById('generatedCode').querySelector('table');
//   const rows = table.querySelectorAll('tr');

//   let csvContent = [];

//   // Get column headers excluding the last column
//   const headers = [];
//   const headerCols = table.querySelectorAll('th:not(:last-child)'); // Exclude last column
//   headerCols.forEach(function(col) {
//     headers.push('"' + col.innerText + '"');
//   });
//   csvContent.push(headers.join(','));

//   // Loop through rows excluding the last column
//   rows.forEach(function(row) {
//     let rowData = [];
//     const cols = row.querySelectorAll('td:not(:last-child)'); // Exclude last column

//     cols.forEach(function(col) {
//       rowData.push('"' + col.innerText + '"');
//     });

//     csvContent.push(rowData.join(','));
//   });

//   return csvContent.join('\n');
// }

// function downloadAsExcel() {
//   const csvData = convertTableToCSV();
//   const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });

//   saveAs(blob, 'codes by code generator_Tanvir Abid.csv');
// }



function convertTableToCSV(extraText = '') {
  const table = document.getElementById('generatedCode').querySelector('table');
  const rows = table.querySelectorAll('tr');

  let csvContent = [];

  // Get column headers excluding the last column
  const headers = [];
  const headerCols = table.querySelectorAll('th:not(:last-child)'); // Exclude last column
  headerCols.forEach(function(col) {
    headers.push('"' + col.innerText + '"');
  });
  csvContent.push(headers.join(','));

  // Loop through rows excluding the last column
  rows.forEach(function(row) {
    let rowData = [];
    const cols = row.querySelectorAll('td:not(:last-child)'); // Exclude last column

    cols.forEach(function(col) {
      rowData.push('"' + col.innerText + '"');
    });

    csvContent.push(rowData.join(','));
  });

  // Add extra text at the end of the CSV content
  if (extraText !== '') {
    csvContent.push('"' + extraText + '"');
  }

  return csvContent.join('\n');
}

function downloadAsExcel() {
  const additionalText = 'Codes are generated by Code Generator. Developed by Tanvir Abid'; // Replace with your desired text
  const csvData = convertTableToCSV(additionalText);
  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });

  saveAs(blob, 'generated_codes_By_Tanvir_Abid.csv');
}

//--------------------------------------------------------------------------------------//
// handle year of footer //
//--------------------------------------------------------------------------------------//
// Get current year and set it in the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;
