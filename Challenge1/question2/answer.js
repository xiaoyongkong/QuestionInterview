// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const List = (props) => {
  return  null;
}

document.body.innerHTML = "<div id='root'> </div>";
  
const rootElement = document.getElementById("root");
ReactDOM.render(<List items={["A", "B", "C"]} />, rootElement);

let listItem = document.querySelectorAll("li")[1];
if(listItem) {
  listItem.click();
}
setTimeout(() => console.log(document.getElementById("root").innerHTML));