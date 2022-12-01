//Open Function
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

//Download Function
function download() {
  var t=document.getElementById("text").value;
  const file = new File([t], 'new_file.txt', {
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
    var file_name=document.getElementById("file_name").value;
    setCookie(file_name,textarea.value,365);
    console.log(getCookie(file_name));
}
//Text Edit
function char_edit(char){
    setTimeout(() => {
            text=textarea.value;
            textarea.value=text+char;
        },0);  
}
function text_edit(event){
    /*console.log(event.key);
    if(event.key=='('){
        char_edit(')');     
    }
    else if(event.key=='"'){
        char_edit('"');
    */
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