// Function to reformat the document title
function reformatDocumentTitle() {
  let originalTitle = document.title;
  let parts = originalTitle.split(' ');

  if (parts.length >= 4) {
    let lastName = parts[1];
    let firstName = parts[2];
    let courseCode = parts[0].substring(1); // Remove the 'z' character from the course code

    let newTitle = lastName + ' ' + firstName + ' ' + courseCode + " SY2223 (915)";
    document.title = newTitle;
  }
}

// Call the function to reformat the document title when the script is loaded
reformatDocumentTitle();
