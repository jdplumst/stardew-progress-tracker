import { prettyDate } from "~/lib/pretty-date";
import { describe, expect, it } from "vitest";

describe.concurrent("pretty date tests", () => {
  it("date with timestamp", () => {
    expect(prettyDate(new Date("2025-04-27T10:10:10.000z"))).toBe(
      "April 27, 2025",
    );
  });

  it("date without timestamp", () => {
    expect(prettyDate(new Date("2025-04-27"))).toBe("April 27, 2025");
  });
});
