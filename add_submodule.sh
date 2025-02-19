#!/bin/bash

# Script to add a Git submodule

# Set variables (customize these)
SUBMODULE_URL="https://github.com/ataulhaleem/camelina-hub-documentation.git" # Replace with your submodule's URL
SUBMODULE_PATH="camelina-docs"  # Replace with the desired path for the submodule

# Check if the submodule path already exists
if [ -d "$SUBMODULE_PATH" ]; then
  echo "Error: Submodule path '$SUBMODULE_PATH' already exists."
  exit 1
fi

# Add the submodule
echo "Adding submodule '$SUBMODULE_URL' to '$SUBMODULE_PATH'..."
git submodule add "$SUBMODULE_URL" "$SUBMODULE_PATH"

# Initialize and update the submodule (clones the content)
echo "Initializing and updating the submodule..."
git submodule update --init --recursive

# Add the .gitmodules file and the submodule directory to the main repository
echo "Staging changes..."
git add .gitmodules "$SUBMODULE_PATH"

# Commit the changes
echo "Committing changes..."
read -p "Enter commit message: " COMMIT_MESSAGE  # Prompt for a commit message
git commit -m "$COMMIT_MESSAGE"

# (Optional) Push the changes (if you want to push immediately)
read -p "Do you want to push the changes? (y/n): " PUSH_CHOICE
if [[ "$PUSH_CHOICE" == "y" ]]; then
  echo "Pushing changes..."
  git push origin master  # Or your branch name
fi

echo "Submodule added successfully!"

exit 0
