import Toast from './Toast'
const obj={}
obj.install=function(Vue){
    //创建一个组件构造器
    const construstor=Vue.extend(Toast)
    //通过constructor新建组件对象
    const toast=new construstor()
    //将组件对象，手动挂载到某个document上
    toast.$mount(document.createElement('div'))
    //toast.$el对应的就是div
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast=toast
}
export default obj