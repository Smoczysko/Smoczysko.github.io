#!/bin/bash

clear

echo "Installing NPM modules..."
npm install

echo "Installing Bower components..."
gulp bower

echo "Preparing for commit..."
gulp prepare-for-commit