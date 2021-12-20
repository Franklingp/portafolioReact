//Handle date

const setMonth = (number) => {
    switch (number) {
        case 0: return "Enero";
        case 1: return "Febrero";
        case 2: return "Marzo";
        case 3: return "Abril";
        case 4: return "Mayo";
        case 5: return "Junio";
        case 6: return "Julio";
        case 7: return "Agosto";
        case 8: return "Septiembre";
        case 9: return "Octuble";
        case 10: return "Noviembre";
        case 11: return "Diciembre";
        default: "Month";
    }
}

export const formatData = (unformatedDate) => {
    const data = new Date(unformatedDate);
    const date = data.getDate();
    const month = setMonth(data.getMonth());
    const year = data.getFullYear();

    return `${date} de ${month} de ${year}`;
}