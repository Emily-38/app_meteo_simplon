export function formatDate(datenow: string){
const date = new Date(datenow);
const joursSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const jour = joursSemaine[date.getDay()];
 const dateFormatee = `${jour} ${date.getDate()} `;
 return dateFormatee
 }
 export function hour(datetohour:string){
    const date = new Date(datetohour);
    const heures = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${heures}:${minutes}`;
 }