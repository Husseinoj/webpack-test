export default (text = "Hello webpack aaaa aa aaa") => {
    const element = document.createElement("p");
  
    element.innerHTML = text;
  
    return element;
  };