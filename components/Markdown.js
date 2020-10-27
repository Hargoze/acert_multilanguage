import ReactMarkdown from "react-markdown/with-html";
import markdownStyles from './markdown-styles.module.css'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Image, Stack, Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core"
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const CodeBlock = ({ language, value }) => {
  return (
    <Tabs align="end" variant="enclosed" py="8">
      <TabList>
        <Tab>{language}</Tab>
      </TabList>
    <TabPanels>
      <TabPanel>
        <Box overflow={{base:"scroll", md:"hidden"}}>
          <SyntaxHighlighter language={language} style={darcula}>{value}</SyntaxHighlighter>
        </Box>
      </TabPanel>
    </TabPanels>
    </Tabs>
  );
};

const MarkdownImage = ({ alt, src }) => {
    return (
      <Image src={src} alt={alt}/>
  );
}

export default function Markdown({ content }) {
  return (
    <ReactMarkdown
    className={markdownStyles['markdown']}
      escapeHtml={false}
      source={content}
      renderers={{ code: CodeBlock, image: MarkdownImage}}
      disallowedTypes={['paragraph']}
      unwrapDisallowed
    />
  );
}
