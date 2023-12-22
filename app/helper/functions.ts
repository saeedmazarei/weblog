export function generateDate(num: number): string {
    const base = new Date(2020, 0, 1);
    const date = new Date(base.getTime() - (num - 1) * 86400000);
    return date.toDateString(); 
  }