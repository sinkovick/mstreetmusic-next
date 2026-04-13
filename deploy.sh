#!/bin/bash
cd ~/mstreetmusic-next
killall -9 -u mstreetm node 2>/dev/null
sleep 1
rm -rf .next
tar xzf mstreet-next-deploy.tar.gz
rm mstreet-next-deploy.tar.gz
rm -f .next/server/app/*.meta
touch ~/tmp/restart.txt
echo "DEPLOYED_V2"
