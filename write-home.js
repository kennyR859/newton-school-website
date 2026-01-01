const fs = require("fs");
const content = fs.readFileSync("./Home.tsx.template", "utf8");
fs.writeFileSync("./src/app/components/Home.tsx", content, "utf8");
console.log("Done");
