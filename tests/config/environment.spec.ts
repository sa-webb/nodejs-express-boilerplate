import "jest";

import Environment from "../../src/environments/environment";
import { Environments } from "../../src/environments/environment.constant";

describe("Environment", () => {
  let instance: Environment;

  beforeEach(() => {
    instance = new Environment();
  });

  it("should get the current environment", async () => {
    expect(instance).toBeInstanceOf(Environment);
    const environment = instance.getCurrentEnvironment();
    expect(environment).toBeDefined();
    expect(environment).toBe(Environments.TEST);
  });

  it("should check if environment is production or not", async () => {
    const result = instance.isProductionEnvironment();
    expect(result).toBe(false);
  });
});
