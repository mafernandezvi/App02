import CodeBreaker from "./codebreaker";

describe("Codebreaker logic", () => {
  it("deberia ganar si adivina el codigo secreto", () => {
    const cb = new CodeBreaker(3);
    expect(cb.arriesgar(3)).toEqual("Ganaste!");
  });
});
