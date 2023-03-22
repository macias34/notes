import dayjs from "dayjs";

export function groupBy<T>(arr: T[], fn: (item: T) => any) {
  return arr.reduce<Record<string, T[]>>((prev, curr) => {
    const groupKey = fn(curr);
    const group = prev[groupKey] || [];
    group.push(curr);
    return { ...prev, [groupKey]: group };
  }, {});
}

export function sortDateLabels(dateObj: {}) {
  const sortedLabels = Object.keys(dateObj).sort((a, b) =>
    dayjs(a).isAfter(dayjs(b)) ? 1 : -1
  );

  return sortedLabels;
}
