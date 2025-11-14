const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '..', 'src', 'components', 'Atom', 'Icons', 'icons');

// Process each icon file
fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error('Error reading icons directory:', err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith('.tsx') && file !== 'index.tsx' && file !== 'types.ts') {
      const filePath = path.join(iconsDir, file);
      let content = fs.readFileSync(filePath, 'utf8');

      // Replace IconProps interface with import if needed
      if (content.includes('interface Props')) {
        content = content.replace(/interface Props \{[^}]*\}/, "import { IconProps } from './types';");
      }

      // Update component props
      content = content.replace(
        /(export const \w+\s*=\s*\(\{)([^}]*)(\}\s*:\s*Props\s*\))/g,
        (match, p1, p2, p3) => {
          // Remove strokeWidth from props
          const props = p2
            .split(',')
            .map((prop) => prop.trim())
            .filter((prop) => !prop.includes('strokeWidth'));
          return `${p1}${props.join(', ')}${props.length > 0 ? ', ' : ''}${p3}`;
        },
      );

      // Update component props type if it was using Props interface
      content = content.replace(/(export const \w+\s*=\s*\(\{[^}]*\}\s*:\s*)Props/g, '$1IconProps');

      // Update SVG attributes
      content = content.replace(
        /(\s+)(stroke|strokeWidth|strokeLinecap|strokeLinejoin)(={\w+})/g,
        (match, p1, p2) => {
          if (p2 === 'stroke') {
            return `${p1}fill`;
          }
          return '';
        },
      );

      // Replace stroke="..." with fill="..."
      content = content.replace(/stroke="([^"]*)"/g, 'fill="$1"');

      // Remove any empty lines with just whitespace
      content = content.replace(/\n\s*\n/g, '\n');

      // Write the updated content back to the file
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  });

  console.log('All icons have been updated!');
});
