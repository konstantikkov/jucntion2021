export const JsonToMap = (jsonName) => {

    const json = JSONS[jsonName]
    const map = new Map();

    json.forEach(item=>{
        map.set(item.key, item?.value || new Map(item.entries))
    });
    return map
};