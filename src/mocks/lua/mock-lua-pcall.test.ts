import { mockPcall } from "./mock-lua-pcall";

describe("mockPcall", () => {
  it("should report success with the returned value", () => {
    expect(mockPcall(() => "value")).toEqual([true, "value"]);
    expect(mockPcall(() => undefined)).toEqual([true, undefined]);
  });

  it("should forward arguments to the callable", () => {
    expect(mockPcall(((first: number, second: number) => first + second) as never, 2 as never, 3 as never)).toEqual([
      true,
      5,
    ]);
  });

  it("should report failure with the error message rather than the error", () => {
    expect(
      mockPcall(() => {
        throw new Error("boom");
      })
    ).toEqual([false, "boom"]);
  });

  it("should pass a non error throw through untouched", () => {
    expect(
      mockPcall(() => {
        throw "raw string";
      })
    ).toEqual([false, "raw string"]);
  });
});
