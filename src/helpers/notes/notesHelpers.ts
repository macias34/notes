export function groupBy<T>(arr: T[], fn: (item: T) => any) {
  return arr.reduce<Record<string, T[]>>((prev, curr) => {
    const groupKey = fn(curr);
    const group = prev[groupKey] || [];
    group.push(curr);
    return { ...prev, [groupKey]: group };
  }, {});
}

export function sortDateLabels(dateObj: {}) {
  const sortedLabels = Object.keys(dateObj).sort((a, b) => {
    const aDay: number = parseInt(a[0] + a[1]);
    const bDay: number = parseInt(b[0] + b[1]);

    return aDay - bDay;
  });

  return sortedLabels;
}

export const sanitizeUrl = (title: string) => {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, "");
};
