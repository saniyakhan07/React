import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <div>
      <h1>Custom App | Saniya</h1>
    </div>
  )
}


const ReactElement  = {
type: 'a',
props: {
  href: 'https://google.com',
  target: '_blank'
},
Children: 'Click me to visit google'
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Saniya aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google',
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
)
