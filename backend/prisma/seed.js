import { prisma } from "../src/lib/db.js";

async function seed() {
  try {
    await prisma.language.upsert({
      where: { id: "00c59c0c-5d7a-43ad-a905-ef8ff1985310" },
      update: {},
      create: {
        id: "00c59c0c-5d7a-43ad-a905-ef8ff1985310",
        code: "pt-BR",
        name: "Português (Brasil)",
      },
    });
  } finally {
    await prisma.$disconnect();
  }
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
