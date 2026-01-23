import request from "supertest";
import { app } from "../app";
import { after } from "node:test";
import { prisma } from "@/database/prisma";

describe("UsersController", () => {
  let user_id: string;

  afterAll(async () => {
    await prisma.user.delete({
      where: {
        id: user_id,
      },
    });
  });

  it("should create a new user", async () => {
    const response = await request(app).post("/users").send({
      name: "Lucas test",
      email: "testuser2@example.com",
      password: "123456789",
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");

    user_id = response.body.id;
  });

  it("should not create a user with an existing email", async () => {
    const response = await request(app).post("/users").send({
      name: "Lucas test",
      email: "testuser2@example.com",
      password: "123456789",
    });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
  });
});
