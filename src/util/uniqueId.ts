let counter = 0;

export function addUniqueIds<T extends object>(items: T[], prefix = 'item'): (T & { uid: string })[] {
  return items.map((item) => {
    counter += 1;
    const id = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `uid-${counter}`; // deterministic fallback, no Math.random()
    return { ...item, uid: `${prefix}-${id}` };
  });
}
