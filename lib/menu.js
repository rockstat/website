// export const menuData = require("json-loader!yaml-loader!../lib/data/docs.yml");

export function itemTarget(item){
    return item && item.newTab === true ? '_blank' : '_self'
}

export function itemEnabled(item){
    return item && item.newTab === true ? '_blank' : '_self'
}

