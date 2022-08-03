#!/bin/bash          

root_path=$(pwd)
echo "$root_path"
while read client; 
do 
  # Change schema for prisma migrations
  sed -i "s/DATABASE_SCHEMA=.*/DATABASE_SCHEMA=${client}/" "${root_path}/.env"
  # Run migrations
  echo "yes" | npx prisma migrate dev

done <  "${root_path}/scripts/DB/clients.txt"