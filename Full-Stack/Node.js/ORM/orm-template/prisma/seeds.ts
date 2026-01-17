import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Lucas Valadão",
        email: "lucas@v.com",
      },
      {
        name: "Marte Tomate",
        email: "j2@j.com",
      },
    ],
  });
}

seed().then(async () => {
  console.log("Seeding finished.");
  await prisma.$disconnect();
});
