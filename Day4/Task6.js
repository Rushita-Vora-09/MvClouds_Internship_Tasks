function handleFileUpload() {
  const fileInput = document.getElementById('csvFile');
  const file = fileInput.files[0];
  if (!file) {
    alert('Please select a CSV file.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    const csvContent = event.target.result;
    const rows = csvContent.split('\n').filter(row => row.trim());
    const tableBody = document.getElementById('imageTable').querySelector('tbody');
    tableBody.innerHTML = ''; // Clear previous content

    rows.forEach((row, index) => {
      const cols = row.split(',').map(col => col.trim());
      if (cols.length === 1 && cols[0].startsWith('http')) { // Valid URL row
        const imageUrl = cols[0];
        const tableRow = document.createElement('tr');

        // Image Cell
        const imageCell = document.createElement('td');
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = `Image ${index + 1}`;
        imageCell.appendChild(imgElement);
        tableRow.appendChild(imageCell);

        // Download Button Cell
        const downloadCell = document.createElement('td');
        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download';
        downloadButton.onclick = () => downloadImage(imageUrl, `image${index + 1}.jpg`);
        downloadCell.appendChild(downloadButton);
        tableRow.appendChild(downloadCell);

        tableBody.appendChild(tableRow);
      }
    });
  };

  reader.readAsText(file);
}

async function downloadImage(url, filename) {
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    alert(`Error downloading image: ${error.message}`);
  }
}