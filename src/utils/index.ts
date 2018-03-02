export function noop(...args: any[]): void {
  /* no-op */
}

export function omit<T extends object, K extends keyof T>(target: T, ...omitKeys: K[]): Omit<T, K> {
  return Object.keys(target).reduce((res, key) => {
    if (!omitKeys.includes(key as K)) {
      res[key] = target[key];
    }
    return res;
  }, {}) as Omit<T, K>;
}
