import request from "supertest";
import { app } from "./app";

describe("Products", () => {
  it("should be able to create a new product", async () => {
    // Test implementation will go here
    const response = await request(app).get("/products");

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
