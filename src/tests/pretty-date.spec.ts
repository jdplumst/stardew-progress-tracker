import { prettyDate } from "~/lib/pretty-date";
import { describe, expect, it } from "vitest";

// Tests will be run with timezone set to EST
describe.concurrent("pretty date tests", () => {
  it("date with timestamp", () => {
    expect(prettyDate(new Date("2025-04-27T10:10:10.000z"))).toBe(
      "April 27, 2025 at 5:10am", // converts to local time
    );
  });

  it("date without timestamp", () => {
    expect(prettyDate(new Date("2025-04-27"))).toBe("April 26, 2025 at 7:00pm");
  });
});
