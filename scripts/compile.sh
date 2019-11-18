#!/usr/bin/env bash

yarn build
yarn build:docs
cp -r docs/* travis-build/
