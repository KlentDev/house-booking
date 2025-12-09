export function cn(...inputs: (string | undefined | null | false | Record<string, boolean>)[]) {
  return inputs
    .filter(Boolean)
    .map((input) => {
      if (typeof input === "string") return input;
      if (typeof input === "object") {
        return Object.keys(input)
          .filter((key) => input[key])
          .join(" ");
      }
      return "";
    })
    .join(" ")
    .trim();
}
