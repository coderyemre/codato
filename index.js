//Load File Function
if(localStorage.getItem("saves")!=null){
    var saves_list=localStorage.saves.split(",");
    saves_list=saves_list.filter(function(i){return i!=''});
    for (var i=0;i<saves_list.length;i++){
            var tr=document.createElement("tr");
            document.getElementById("saves_list").appendChild(tr);
            var td=document.createElement("td");
            tr.appendChild(td);
            td.addEventListener("click",function(){
                textarea.value=localStorage.getItem(this.innerHTML);
                file_name.value=this.innerHTML;
                quit();
            });
            td.innerHTML=saves_list[i];  
    }
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
      textarea.value="";
      textarea.value = reader.result;
      file_name.value= file.name;
    });
    reader.readAsText(file);
  }
})

//Download Function
function download() {
      const file = new File([textarea.value], file_name.value, {
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
        localStorage.saves=localStorage.saves+file_name.value+",";
    }
}
//Load Function
function load(){
    document.getElementById("saves").style.display="block";
}
function quit(){
     document.getElementById("saves").style.display="none";
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
            break;
        case ";":
            char_edit("\n");
            break;
        default:
            if(event.keyCode==32){
                char_edit("\t");
            }
    }   
}