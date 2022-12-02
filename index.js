//Open Function
var inputElement = document.getElementById("document");
var textarea=document.getElementById("text");
var file_name=document.getElementById("file_name");

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

//Download Function
function download() {
  var t=document.getElementById("text").value;
  console.log(file_name);
  const file = new File([t], file_name.value, {
  type: 'text/plain',});
  const link = document.createElement('a');
  const url = URL.createObjectURL(file);
  link.href = url;
  link.download = file.name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
//IT's PROBLEM https://github.com/coderyemre/codato/issues/3
//Save Function
//Set cookie and Get cookie (!THANKS W3SCHOOLS!)
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function save(){
    setCookie(file_name.value,textarea.value,365);
    console.log(getCookie(file_name.value));
}
//Text Edit
function char_edit(char){
    setTimeout(() => {
            text=textarea.value;
            textarea.value=text+char;
        },0);  
}
function text_edit(event){
    switch(event.key) {
        case '(':
            char_edit(')'); 
            break;
        case '"':
            char_edit('"');
            break;
        case "'":
            char_edit("'");
            break;
        case "[":
            char_edit("]");
            break;
        case "{":
            char_edit("}");
        default:
            break;
    
    }
    
    
}