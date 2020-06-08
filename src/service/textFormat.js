//This is a group of function to format the text

export const fistUpercase = (text) => {
    if(text){
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
}