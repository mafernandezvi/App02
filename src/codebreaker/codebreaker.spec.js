import CodeBreaker from "./codebreaker";

describe("Codebreaker logic", () => {
  it("deberia ganar si adivina el codigo secreto", () => {
    const cb = new CodeBreaker("5");
    expect(cb.arriesgar("5")).toEqual("Ganaste!");
  });

  it("deberia ganar si adivina el codigo secreto", () => {
    const cb = new CodeBreaker("3", 3);
    expect(cb.arriesgar("5")).toEqual("Te quedan 2 intentos!");
    expect(cb.arriesgar("5")).toEqual("Te quedan 1 intentos!");
    expect(cb.arriesgar("5")).toEqual("Perdiste!");
  });
});
