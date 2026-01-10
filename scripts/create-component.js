#!/usr/bin/env node

/**
 * Storyblok Management API Script
 * 
 * This script creates a component in your Storyblok space using the Management API
 * 
 * Usage: node scripts/create-component.js <component-name> [component-json-file]
 * 
 * Example: node scripts/create-component.js contact contact.json
 */
require('dotenv').config();
const fs = require("fs");
const path = require("path");

const SPACE_ID = process.env.STORYBLOK_SPACE_ID;
const MANAGEMENT_API_TOKEN = process.env.STORYBLOK_MANAGEMENT_TOKEN;

if (!SPACE_ID || !MANAGEMENT_API_TOKEN) {
    console.error(
        "Error: STORYBLOK_SPACE_ID and STORYBLOK_MANAGEMENT_TOKEN environment variables are required"
    );
    process.exit(1);
}

async function createComponent(componentJsonFile) {
    try {
        // Read the component JSON file
        const jsonPath = path.resolve(componentJsonFile);
        if (!fs.existsSync(jsonPath)) {
            throw new Error(`Component JSON file not found: ${jsonPath}`);
        }

        const componentData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

        // Remove fields that shouldn't be sent to the API
        const apiPayload = {
            component: {
                name: componentData.name,
                display_name: componentData.display_name,
                description: componentData.description,
                schema: componentData.schema,
                preview_field: componentData.preview_field,
                is_root: componentData.is_root,
                is_nestable: componentData.is_nestable,
                image: componentData.image,
                icon: componentData.icon,
                color: componentData.color,
            },
        };

        console.log(
            `\n🚀 Creating component "${componentData.name}" in space ${SPACE_ID}...`
        );
        console.log(`Component data:`, JSON.stringify(apiPayload, null, 2));

        const response = await fetch(
            `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/components`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: MANAGEMENT_API_TOKEN,
                },
                body: JSON.stringify(apiPayload),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
                `API Error (${response.status}): ${JSON.stringify(errorData)}`
            );
        }

        const result = await response.json();
        console.log(`\n✅ Component created successfully!`);
        console.log(`Component ID: ${result.component.id}`);
        console.log(`Component Name: ${result.component.name}`);

        return result;
    } catch (error) {
        console.error(`\n❌ Error creating component:`, error.message);
        process.exit(1);
    }
}

// Get the component JSON file from command line argument
const componentFile = process.argv[2];

if (!componentFile) {
    console.error("Usage: node scripts/create-component.js <component-json-file>");
    console.error("Example: node scripts/create-component.js contact.json");
    process.exit(1);
}

createComponent(componentFile);
