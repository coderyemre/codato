var inputElement = document.getElementById("document");
var textarea=document.getElementById("text");

inputElement.addEventListener("change", () => {
  const [file] = inputElement.files;
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      textarea.innerText = reader.result;
    });
    reader.readAsText(file);
  }
})





