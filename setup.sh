#!/bin/bash
# Setup script for CroHost deployment
export PATH=/opt/alt/alt-nodejs22/root/usr/bin:/usr/bin:/bin
cd ~/mstreetmusic-next

echo "=== Node version ===" > ~/setup.log 2>&1
node --version >> ~/setup.log 2>&1

echo "=== Prisma DB Push ===" >> ~/setup.log 2>&1
npx prisma db push --accept-data-loss --skip-generate >> ~/setup.log 2>&1
echo "DB PUSH EXIT: $?" >> ~/setup.log 2>&1

echo "=== Seed Admin ===" >> ~/setup.log 2>&1
node prisma/seed.js >> ~/setup.log 2>&1
echo "SEED EXIT: $?" >> ~/setup.log 2>&1

echo "=== Seed Blog ===" >> ~/setup.log 2>&1
node prisma/seed-blog.js >> ~/setup.log 2>&1
echo "BLOG SEED EXIT: $?" >> ~/setup.log 2>&1

echo "=== Next Build ===" >> ~/setup.log 2>&1
npx next build >> ~/setup.log 2>&1
echo "BUILD EXIT: $?" >> ~/setup.log 2>&1

echo "=== DONE ===" >> ~/setup.log 2>&1
date >> ~/setup.log 2>&1
