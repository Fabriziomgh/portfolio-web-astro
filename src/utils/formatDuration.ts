import { diffMonths, diffYears } from '@formkit/tempo';

export const formatDuration = (
   startDate: Date | string,
   endDate: Date | string | null
) => {
   if (!endDate) return 'Presente';

   const totalMonths = diffMonths(endDate, startDate);

   const years = diffYears(endDate, startDate);
   const months = totalMonths - years * 12;

   if (years > 0 && months > 0) {
      return `${years} ${years === 1 ? 'Año' : 'Años'} y ${months} ${
         months === 1 ? 'Mes' : 'Meses'
      }`;
   } else if (years > 0) {
      return `${years} ${years === 1 ? 'Año' : 'Años'}`;
   } else {
      return `${months} ${months === 1 ? 'Mes' : 'Meses'}`;
   }
};
