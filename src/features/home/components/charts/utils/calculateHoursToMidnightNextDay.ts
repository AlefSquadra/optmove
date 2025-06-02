export const calculateHoursToMidnightNextDay = (database: Date): number => {
  const startTime = new Date(database);
  const nextDayMidnight = new Date(database);
  nextDayMidnight.setDate(nextDayMidnight.getDate() + 2); // Vai para o dia seguinte
  nextDayMidnight.setHours(0, 0, 0, 0); // Meia-noite do próximo dia
  const diffInMilliseconds = nextDayMidnight.getTime() - startTime.getTime();
  const hoursToShow = diffInMilliseconds / (1000 * 60 * 60); // Milissegundos para horas
  return hoursToShow;
};
