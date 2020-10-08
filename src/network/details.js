import {request}  from './request'

export function getDetails(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export class ItemInfo{
    constructor(title,desc,nowPrice,oldPrice,discount,columns,services){
        this.title=title,
        this.desc=desc,
        this.nowPrice=nowPrice,
        this.oldPrice=oldPrice,
        this.discount=discount,
       
        this.columns=columns,
        this.services=services
    }
}
export class ShopInfo{
    constructor(img,name,fans,sellCount,cGoods,debate,allItem)
    {
        this.img=img,
        this.name=name,
        this.fans=fans,
        this.sellCount=sellCount,
        this.goods=cGoods,
        this.debate=debate,
        this.allItem=allItem
    }
}