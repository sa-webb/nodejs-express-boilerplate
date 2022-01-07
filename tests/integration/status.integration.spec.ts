import "jest";
import InitializeApp from "../init";
import type { Application, Response } from "express";
import request from "supertest";

describe("integration tests", () => {
  let app: Application;

  beforeAll(async () => {
    app = await InitializeApp.bootstrapApp();
  });

  it("it can start", async () => {
    await request(app)
      .get("/")
      .expect((res: Response) => {
        console.log("Status: ", res.statusCode);
      })
      .expect(200);
  });
});
