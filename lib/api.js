import fs from 'fs'

export default function getFAQ() {
  return fs.readFileSync("content/FAQ.md").toString();
}