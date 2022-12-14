function timeDifference(current, previous) {
  const milliSecondsPerMinute: number = 60 * 1000;
  const milliSecondsPerHour: number = milliSecondsPerMinute * 60;
  const milliSecondsPerDay: number = milliSecondsPerHour * 24;
  const milliSecondsPerMonth: number = milliSecondsPerDay * 30;
  const milliSecondsPerYear: number = milliSecondsPerDay * 365;

  const elapsed: number = current - previous;

  if (elapsed < milliSecondsPerMinute / 3) {
    return "just now";
  }

  if (elapsed < milliSecondsPerMinute) {
    return "less than 1 min ago";
  } else if (elapsed < milliSecondsPerHour) {
    return Math.round(elapsed / milliSecondsPerMinute) + " min ago";
  } else if (elapsed < milliSecondsPerDay) {
    return Math.round(elapsed / milliSecondsPerHour) + " h ago";
  } else if (elapsed < milliSecondsPerMonth) {
    return Math.round(elapsed / milliSecondsPerDay) + " days ago";
  } else if (elapsed < milliSecondsPerYear) {
    return Math.round(elapsed / milliSecondsPerMonth) + " mo ago";
  } else {
    return Math.round(elapsed / milliSecondsPerYear) + " years ago";
  }
}

export function timeDifferenceForDate(date) {
  const now: number = new Date().getTime();
  const updated: number = new Date(date).getTime();
  return timeDifference(now, updated);
}
