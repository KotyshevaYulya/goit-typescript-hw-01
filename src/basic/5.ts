enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DayOfWeek): boolean {
    const dayOff = day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
    return dayOff;
}

console.log(isWeekend(DayOfWeek.Sunday));
