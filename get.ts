export const get = (object: any, path: string, defaultValue?: any) => {
  const arrayKeys = path.split(".");

  let result: any = {};
  for (const key of arrayKeys) {
    if (typeof result !== "object") {
      continue;
    }
    if (!Object.keys(result).length) {
      result = typeof object === "object" ? object[key] : undefined;
    } else {
      result = result[key];
    }
  }
  return result === undefined ? defaultValue : result;
};
