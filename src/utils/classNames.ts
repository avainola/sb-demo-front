export default (names: Array<string> = []): string => {
  return names.filter(name => name).join(" ");
};
