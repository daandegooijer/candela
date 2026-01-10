#!/usr/bin/env node

/**
 * Storyblok Management API Script (TypeScript)
 *
 * This script creates a component in your Storyblok space using the Management API
 *
 * Usage: npx ts-node scripts/create-component.ts <component-name> [component-json-file]
 *
 * Example: npx ts-node scripts/create-component.ts contact contact.json
 */
require("dotenv").config();
import fs from "fs";
import path from "path";

const SPACE_ID = process.env.STORYBLOK_SPACE_ID;
const MANAGEMENT_API_TOKEN = process.env.STORYBLOK_MANAGEMENT_TOKEN;

if (!SPACE_ID || !MANAGEMENT_API_TOKEN) {
  console.error(
    "Error: STORYBLOK_SPACE_ID and STORYBLOK_MANAGEMENT_TOKEN environment variables are required"
  );
  process.exit(1);
}

interface ComponentSchema {
  [key: string]: {
    type: string;
    display_name?: string;
    pos?: number;
    id?: string;
    required?: boolean;
    [key: string]: any;
  };
}

interface ComponentPayload {
  component: {
    name: string;
    display_name: string;
    description?: string;
    schema: ComponentSchema;
    preview_field?: string;
    is_root?: boolean;
    is_nestable?: boolean;
    image?: string | null;
    icon?: string | null;
    color?: string | null;
  };
}

async function createComponent(componentJsonFile: string): Promise<void> {
  try {
    // Read the component JSON file
    const jsonPath = path.resolve(componentJsonFile);
    if (!fs.existsSync(jsonPath)) {
      throw new Error(`Component JSON file not found: ${jsonPath}`);
    }

    const componentData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

    // Prepare API payload
    const apiPayload: ComponentPayload = {
      component: {
        name: componentData.name,
        display_name: componentData.display_name,
        description: componentData.description,
        schema: componentData.schema,
        preview_field: componentData.preview_field,
        is_root: componentData.is_root || false,
        is_nestable: componentData.is_nestable !== false,
        image: componentData.image || null,
        icon: componentData.icon || null,
        color: componentData.color || null,
      },
    };

    console.log(
      `\n🚀 Creating component "${componentData.name}" in space ${SPACE_ID}...`
    );
    console.log(`📋 Component data:`, JSON.stringify(apiPayload, null, 2));

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
        `API Error (${response.status}): ${JSON.stringify(errorData, null, 2)}`
      );
    }

    const result = await response.json();
    console.log(`\n✅ Component created successfully!`);
    console.log(`   Component ID: ${result.component.id}`);
    console.log(`   Component Name: ${result.component.name}`);
    console.log(`   Display Name: ${result.component.display_name}`);

    // Optionally save the component ID to a file for reference
    const componentRef = {
      name: result.component.name,
      id: result.component.id,
      created_at: new Date().toISOString(),
    };

    const refPath = path.join("scripts", `${componentData.name}.ref.json`);
    fs.writeFileSync(refPath, JSON.stringify(componentRef, null, 2));
    console.log(`\n📝 Component reference saved to: ${refPath}`);
  } catch (error) {
    console.error(
      `\n❌ Error creating component:`,
      error instanceof Error ? error.message : String(error)
    );
    process.exit(1);
  }
}

// Get the component JSON file from command line argument
const componentFile = process.argv[2];

if (!componentFile) {
  console.error(
    "Usage: npx ts-node scripts/create-component.ts <component-json-file>"
  );
  console.error(
    "Example: npx ts-node scripts/create-component.ts contact.json"
  );
  process.exit(1);
}

createComponent(componentFile);
