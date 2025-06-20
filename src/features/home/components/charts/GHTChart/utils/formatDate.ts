const formatDate = (date: string) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  } as Intl.DateTimeFormatOptions;
  return new Intl.DateTimeFormat("pt-BR", options).format(new Date(date));
};

export { formatDate };
