enum DayOfWeek {
  Monday = "workday",
  Tuesday = "workday",
  Wednesday = "workday",
  Thursday = "workday",
  Friday = "workday",
  Saturday = "weekend",
  Sunday = "weekend"
}


function isWeekend (day: DayOfWeek): void {
console.log(day === "weekend");
}

isWeekend(DayOfWeek.Sunday)