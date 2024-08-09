enum DayOfWeek {
  Monday = "workday",
  Tuesday = "workday",
  Wednesday = "workday",
  Thursday = "workday",
  Friday = "workday",
  Saturday = "weekend",
  Sunday = "weekend"
}


function isWeekend(day: DayOfWeek): boolean {
    const dayOff = day === "weekend";
    return dayOff;
}

isWeekend(DayOfWeek.Sunday);
