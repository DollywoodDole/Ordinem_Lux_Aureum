const fs = require('fs');
const jss = require('jss').default;
const preset = require('jss-preset-default').default;
const styles = require('./styles');

jss.setup(preset());

const sheet = jss.createStyleSheet(styles);
const css = sheet.toString();

if (!css) {
  console.error('Error: CSS generation failed, output is empty');
  process.exit(1);
}

fs.writeFileSync('public/styles.css', css);
console.log('CSS generated at public/styles.css');
