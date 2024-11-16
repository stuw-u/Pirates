
// The input is a simple file, and the output is a simple ID
// If two files are unique, they will get different ID
// If two files are exactly the same, or if they only differ by a few bytes,
// the will get recognized as the file and get assigned the same ID.

// This is a concept know as Fuzzy Hashing: https://en.wikipedia.org/wiki/Fuzzy_hashing

// Originally, my idea was to use "fixed-length" bucket size, and assign a certain hash to piece
// chunks of X bytes, and compare how many of these fixed-size pieces would be similar, but I
// then realized that if I were to add/remove a single byte (instead of changine one), this would
// have an avalanche effect and completely change the hash of all the pieces after my modification.

// With a bit more search I found the concept of "rolling hashes" that dynamically determine pice
// boundaries, avoiding this issue.

// Turns out that has already been implemented, https://github.com/huwenshuo/ctph.js?files=1
// Following this paper: https://dfrws.org/sites/default/files/session-files/2006_USA_paper-identifying_almost_identical_files_using_context_triggered_piecewise_hashing.pdf



function generateHash(fileBytes) {
  return ctph.digest(fileBytes);
}

// Frontend 
function processFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (!file) {
    alert("File not selected.");
    return;
  }

  const reader = new FileReader();

  // If reading the file succeeds...
  reader.onload = function(event) {
    const fileBytes = new Uint8Array(event.target.result);
    console.log(fileBytes);
    const hash = generateHash(fileBytes);
    document.getElementById('hashResult').innerText = "Hash: " + hash;
  };

  // If reading the file fails...
  reader.onerror = function(event) {
    alert("Error reading file.");
  };

  // Read the file...
  reader.readAsArrayBuffer(file);
}