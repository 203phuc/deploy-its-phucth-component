import { useMemo } from 'react';

export const useDateFormat = (dateString: string) => {
  const formattedDate = useMemo(() => {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }, [dateString]);

  return formattedDate;
};
