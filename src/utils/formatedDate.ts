import { format } from 'date-fns';


export function formatedDate(date: string){
    
   return format(date, 'dd/MM/yyyy');
    
}



export function formatPrice(price:number) {
   const formattedPrice = Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
 
   return formattedPrice;
 }