import { format } from 'date-fns';


export function formatedDate(date: string){
    
   return format(date, 'dd/MM/yyyy');
    
}

