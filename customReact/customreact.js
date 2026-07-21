const mainContainer = document.querySelector("#root")

const reactElement = {
  type:"a",
  props:{
    href:"https://google.com",
    target:"_blank"
  },
  children:"Click me to visit google"
}

costumRender(reactElement, mainContainer)

function costumRender(reactElement, container){
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
      // domElement.setAttribute("href",reactElement.props.href)
      // domElement.setAttribute("target",reactElement.props.target)
  for(const prop in reactElement.props)
  {
    if(prop === "childern") continue
    domElement.setAttribute(prop, reactElement.props[prop])
  }
  container.appendChild(domElement)
}
