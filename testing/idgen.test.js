import genId from "./../idgen.js";

describe("idgp", () => {
  it("should return a four digit value", () => {
    const testValue = genId(4);
    expect(testValue.length).toBe(4);
  });
});

