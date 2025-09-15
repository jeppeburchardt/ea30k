#!/bin/bash

mkdir dist

git checkout main
pnpm run build
mv doc/.vuepress/dist .

export BASE='v1.0.0'
git checkout v1.0.0
pnpm run build
mv doc/.vuepress/dist ./dist/v1.0.0

surge --project dist --domain ea30k.surge.sh

rm -r dist