export const isChidrenString = (children) =>{
return children && (typeof children === "string")
};


let text_string = ["Text", "Title"];
export const isTextCompnent = (component) =>{
    return text_string.includes(component)
}