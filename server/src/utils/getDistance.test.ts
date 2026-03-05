import { getDistance } from "./getDistance";

describe("getDistance", () => {
  it("returns 0 for identical points", () => {
    const point = { lng: 2.3522, lat: 48.8566 };

    expect(getDistance(point, point)).toBeCloseTo(0, 6);
  });

  it("returns an expected distance between Paris and Lyon", () => {
    const paris = { lng: 2.3522, lat: 48.8566 };
    const lyon = { lng: 4.8357, lat: 45.764 };

    const distance = getDistance(paris, lyon);

    expect(distance).toBeGreaterThan(380);
    expect(distance).toBeLessThan(410);
  });
});
