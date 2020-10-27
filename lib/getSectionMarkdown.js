import fs from 'fs'

export default function getSectionMarkdown({section}) {
    var markdown = {}
    {section.map((elem) => (
    (elem.buttons ?
        elem.buttons.map((button) => (
        (button.type === "Markdown" ? 
        markdown["index" + button.id] = fs.readFileSync("content/" + button.file).toString()
        : void 0)
    ))
    : void 0)
  ))}
  return markdown
}