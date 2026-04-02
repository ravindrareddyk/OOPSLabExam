const fs = require('fs');

let idxHtml = fs.readFileSync('index.html', 'utf8');
let scriptJs = fs.readFileSync('script.js', 'utf8');

// 1. Extract questions
let q_start_str = 'const questions = [\n\n  // 🔹 ARRAYS';
let q_start = scriptJs.indexOf(q_start_str);
let q_end = scriptJs.indexOf('];', q_start) + 2;
let questionsStr = scriptJs.slice(q_start, q_end);

// 2. Extract questionAssignments
let qa_start_str = 'const questionAssignments = {';
let qa_start = scriptJs.indexOf(qa_start_str);
let qa_end = scriptJs.indexOf('};', qa_start) + 2;
let qaStr = scriptJs.slice(qa_start, qa_end);

// We need to insert these right after the end of validUsers in index.html
// Let's find: "  "R210118": "2730"\n};\n"
let targetStr = '  "R210118": "2730"\n};\n';
let targetIdx = idxHtml.indexOf(targetStr);

if (targetIdx !== -1) {
    let insertIdx = targetIdx + targetStr.length;
    
    // Add nice indentation
    let insertion = "\n" + questionsStr + "\n\n    " + qaStr.replace(/\n/g, '\n    ') + "\n\n";
    
    let newHtml = idxHtml.slice(0, insertIdx) + insertion + idxHtml.slice(insertIdx);
    
    fs.writeFileSync('index.html', newHtml);
    console.log("Successfully fixed index.html by injecting questions and questionAssignments!");
} else {
    console.error("Could not find the target string 'R210118' in index.html!");
}
