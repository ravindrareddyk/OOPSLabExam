const fs = require('fs');

try {
  // Read the clean pre-break index.html that we extracted
  let indexHtml = fs.readFileSync('index_clean.html', 'utf8');
  const scriptContent = fs.readFileSync('script.js', 'utf8');

  // Extract from script.js perfectly: we need to find the active blocks.
  // The active validUsers block comes after the commented one.
  const usersRegex = /^const validUsers = \{[\s\S]*?^\};/gm;
  let userMatch;
  let validUsersText = null;
  while ((userMatch = usersRegex.exec(scriptContent)) !== null) {
      validUsersText = userMatch[0]; // will overwrite until it gets the last one (the active one)
  }

  const questionsRegex = /^const questions = \[[\s\S]*?^\];/gm;
  let qMatch;
  let questionsText = null;
  while ((qMatch = questionsRegex.exec(scriptContent)) !== null) {
      questionsText = qMatch[0]; // gets the last one
  }

  if (!validUsersText || !questionsText) {
    throw new Error("Could not find blocks in script.js");
  }

  // Replace in index_clean.html
  // Original has: const validUsers = { ... };
  indexHtml = indexHtml.replace(/    const validUsers = \{[\s\S]*?    \};/, validUsersText);
  
  // Original has: const questions = [ ... ];
  indexHtml = indexHtml.replace(/const questions = \[[\s\S]*?\];/, questionsText);

  // Write the perfect version over the actual index.html
  fs.writeFileSync('index.html', indexHtml);
  console.log("Successfully fixed index.html!");

} catch (err) {
  console.error(err);
}
