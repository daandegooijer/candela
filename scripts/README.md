# Storyblok Component Management Scripts

Scripts to manage Storyblok components programmatically using the Management
API.

## Setup

1. Get your Storyblok Management API token from your account settings
2. Set environment variables:

```bash
export STORYBLOK_SPACE_ID="your_space_id"
export STORYBLOK_MANAGEMENT_TOKEN="your_management_token"
```

Or add to `.env.local`:

```
STORYBLOK_SPACE_ID=your_space_id
STORYBLOK_MANAGEMENT_TOKEN=your_management_token
```

## Usage

### Using Node.js (JavaScript)

```bash
node scripts/create-component.js contact.json
```

### Using TypeScript

```bash
npx ts-node scripts/create-component.ts contact.json
```

### Using npm scripts

Add to your `package.json`:

```json
{
  "scripts": {
    "storyblok:create": "node scripts/create-component.js",
    "storyblok:create:ts": "ts-node scripts/create-component.ts"
  }
}
```

Then run:

```bash
npm run storyblok:create contact.json
```

## Creating Component JSON Files

Example component structure (`contact.json`):

```json
{
  "name": "contact",
  "display_name": "Contact Page",
  "description": "Full contact page with form and contact information",
  "schema": {
    "email": {
      "type": "text",
      "display_name": "Email Address",
      "pos": 0,
      "id": "contact-email",
      "required": false
    },
    "pageTitle": {
      "type": "text",
      "display_name": "Page Title",
      "pos": 1,
      "id": "contact-page-title",
      "required": false
    }
  },
  "preview_field": "pageTitle",
  "is_root": true,
  "is_nestable": false
}
```

## Component Schema Field Types

Common field types:

- `text` - Single line text
- `textarea` - Multi-line text
- `richtext` - Rich text editor
- `asset` - Image or file
- `multilink` - Link (internal story or external URL)
- `bloks` - Nested components
- `select` - Dropdown selection
- `boolean` - Checkbox
- `number` - Number input
- `date` - Date picker
- `option` - Radio buttons
- `custom` - Custom field

For more details, see
[Storyblok Field Types Documentation](https://www.storyblok.com/docs/api/management/components/create-a-component)

## Output

When successful, the script will:

1. Create the component in your Storyblok space
2. Display the component ID and details
3. Save a reference file in `scripts/{component-name}.ref.json` for your records

## Error Handling

Common errors:

- **Missing environment variables**: Set `STORYBLOK_SPACE_ID` and
  `STORYBLOK_MANAGEMENT_TOKEN`
- **Invalid JSON**: Check your component JSON file syntax
- **API Error 400**: Verify your schema structure is valid
- **API Error 401**: Check your management token is valid
- **API Error 403**: Verify you have permissions in this space

## Updating Components

To update an existing component, use the PUT endpoint (modify the script as
needed):

```bash
curl -X PUT https://mapi.storyblok.com/v1/spaces/{SPACE_ID}/components/{COMPONENT_ID} \
  -H "Authorization: {TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"component": {...}}'
```

## Resources

- [Storyblok Management API Docs](https://www.storyblok.com/docs/api/management)
- [Component Schema Reference](https://www.storyblok.com/docs/api/management/components/create-a-component)
- [Field Types Documentation](https://www.storyblok.com/docs/api/management/field-types)
