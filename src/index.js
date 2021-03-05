import x from './x.js'
import jpg from './assets/1.jpg'
const div = document.getElementById('app')
div.innerHTML = `
    <img src="${jpg}"></img>
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module)=>{
        let fn = module.default
        fn()
    },()=>{})
}
div.appendChild(button)