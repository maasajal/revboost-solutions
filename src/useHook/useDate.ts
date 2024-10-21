interface Options {
  year: "numeric" | "2-digit";
  month: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day: "numeric" | "2-digit";
}
interface OptionsDay {
  weekday: "long";
}

export const useDate = (dateString: Date | string) => {
  const date = new Date(dateString);

  const options: Options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
};

export const useDayName = (dateString: Date | string) => {
  const date = new Date(dateString);
  const options: OptionsDay = { weekday: "long" };
  const dayName = date.toLocaleDateString("en-US", options);

  return dayName;
};
