"use-strict";

const lessFilePath = 'styles.less'; // Can be full path to an external project

function copyCSSToClipboard() {
  const textArea = document.createElement('textarea');
  textArea.value = document.getElementById('css-output').textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  console.log('Copied to clipboard');
}

function downloadCSS() {
  const blob = new Blob([document.getElementById('css-output').textContent], { type: 'text/css' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'styles.css.min';
  a.click();
  URL.revokeObjectURL(url);
}

function interpretLESS() {
  fetch(lessFilePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.text();
    })
    .then(lessContent => {
      less.render(lessContent, { compress: true, cleancss: true }, (error, css) => {
        if (error) {
          console.error('Error interpreting LESS:', error);
        } else {
          document.getElementById('css-output').textContent = css.css;

          document.getElementById('copy-button').addEventListener('click', copyCSSToClipboard);
          document.getElementById('download-button').addEventListener('click', downloadCSS);
        }
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

window.onload = interpretLESS;