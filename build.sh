#!/bin/bash

# Update the submodule (if you want to pull latest changes)
git submodule update --init --recursive

# Copy the documentation files from the submodule to the docs directory
cp -r camelina-docs docs/  # Adjust paths as needed

# Generate your site (if needed - e.g., for Jekyll or Hugo)
# jekyll build  # Or hugo

echo "GitHub Pages site built successfully!"
