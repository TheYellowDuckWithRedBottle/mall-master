const mutations={
    addItem(state,payload){
    let good=state.CartoList.find(item=>item.shopId==payload.shopId)
    if(good==undefined){
        payload.count=1
        state.CartoList.push(payload)
    }
    else{
        good.count+=1
    }
   
}}
export default mutations