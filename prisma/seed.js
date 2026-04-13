const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // Create admin user - credentials must come from environment
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    throw new Error('ADMIN_USERNAME and ADMIN_PASSWORD must be set in environment.');
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const existingAdmin = await prisma.adminUser.findUnique({
    where: { username },
  });

  if (!existingAdmin) {
    await prisma.adminUser.create({
      data: {
        username,
        passwordHash,
      },
    });
    console.log(`Admin user '${username}' created.`);
  } else {
    console.log(`Admin user '${username}' already exists.`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
