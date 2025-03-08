import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // ... your Prisma Client queries will go here
  const user = await prisma.user.create({
    data: {
      name: "Raven N",
    },
  });
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
