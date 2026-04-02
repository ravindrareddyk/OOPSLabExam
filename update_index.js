const fs = require('fs');

try {
  const scriptContent = fs.readFileSync('script.js', 'utf8');
  const indexContent = fs.readFileSync('index.html', 'utf8');

  // Extract from script.js
  const validUsersMatch = scriptContent.match(/const validUsers = \{[\s\S]*?\n\};/);
  const questionsMatch = scriptContent.match(/const questions = \[[\s\S]*?\n\];/);

  if (!validUsersMatch || !questionsMatch) {
    console.error('Could not find matches in script.js');
    process.exit(1);
  }

  // Replace in index.html
  let newIndexContent = indexContent;
  
  newIndexContent = newIndexContent.replace(
    /const validUsers = \{[\s\S]*?\n\s*\};/,
    validUsersMatch[0]
  );

  newIndexContent = newIndexContent.replace(
    /const questions = \[[\s\S]*?\n\];/,
    questionsMatch[0]
  );

  fs.writeFileSync('index.html', newIndexContent);
  console.log('Successfully updated index.html with new data from script.js');

} catch (err) {
  console.error(err);
}
