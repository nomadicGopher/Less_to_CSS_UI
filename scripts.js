"use-strict";

const lessFilePath = 'styles.less'; // Can be full path to an external project

// Function to get trimmed path
function getTrimmedPath(path) {
  return path.slice(0, path.lastIndexOf('/') + 1);
}

// Function to interpret LESS
function interpretLESS() {
  // Fetch LESS file
  fetch(lessFilePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.text();
    })
    .then(lessContent => {
      // Render LESS to CSS
      less.render(lessContent, { compress: true, cleancss: true }, (error, css) => {
        if (error) {
          console.error('Error interpreting LESS:', error);
        } else {
          // Display interpreted CSS
          document.getElementById('css-output').textContent = css.css;

          // Add event listeners to buttons
          document.getElementById('copy-button').addEventListener('click', copyCssToClipboard);
          document.getElementById('download-button').addEventListener('click', downloadCss);
        }
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

// Copy CSS to clipboard
function copyCssToClipboard() {
  const textArea = document.createElement('textarea');
  textArea.value = document.getElementById('css-output').textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  console.log('Copied to clipboard');
}

// Download CSS
function downloadCss() {
  const blob = new Blob([document.getElementById('css-output').textContent], { type: 'text/css' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'styles.css.min';
  a.click();
  URL.revokeObjectURL(url);
}

// Interpret LESS on page load
window.onload = interpretLESS;