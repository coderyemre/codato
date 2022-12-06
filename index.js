console.log(localStorage);
console.log(localStorage.getItem("saves"));
for( var i=0; i<=localStorage.length;i++){
console.log(localStorage.key(i))
}
if(localStorage.getItem("saves")!=null){
    var saves_list=localStorage.saves.split(",");
    console.log(saves_list);
}
var file_name=document.getElementById("file_name");
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
//Save Function (! THANKS alexpietsch !)
function save(){
    if(localStorage.getItem("saves")==null){
        localStorage.setItem(file_name.value, textarea.value);
        localStorage.setItem("saves",file_name.value+",");
    }
    else{
        localStorage.setItem(file_name.value, textarea.value);
        //DELETE ME!!!!!
        localStorage.saves=localStorage.saves+file_name.value+",";
        console.log(localStorage.getItem(file_name.value)); 
    }
}
//Load Function
function load(){
    
}
//Text Edit
function char_edit(char){
    setTimeout(() => {
            text=textarea.value;
            textarea.value=text+char;
        },0);  
}
function text_edit(event){
    console.log(event.key);
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
            break;
        case ";":
            char_edit("\n");
            break;
        default:
            console.log(event.keyCode);
            if(event.keyCode==32){
                char_edit("\t");
            }
    }
    
    
}