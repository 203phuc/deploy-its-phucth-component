export function addUniqueIds<T extends object>(items: T[], prefix = 'item'): (T & { uid: string })[] {
  return items.map((item, i) => ({
    ...item,
    uid: `${prefix}-${i}-${crypto.randomUUID()}`,
  }));
}
