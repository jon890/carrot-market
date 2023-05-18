export function classnames(...classnames: string[]) {
  return classnames.filter((c) => c !== "").join(" ");
}
