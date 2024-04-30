//This is function that return a shuffled unike id

export const setID = (name) => {
    if(name){
        const date = Date.now();
        return (name+date).toString();
    }else{
        throw new Error("Hubo un error al intentar crear el id de proyecto");
    }
}