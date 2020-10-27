import { ThemeProvider, CSSReset, ColorModeProvider, Button} from '@chakra-ui/core'
import theme from "../theme"
import { configureLanguage } from "../utils/language";
import { LanguageProvider } from "../utils/LanguageProvider"

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider value="light">
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default MyApp
/*
MyApp.getInitialProps = async ({ ctx }) => {
  console.log(ctx)
  const language = configureLanguage(ctx);

  console.log("language:", language);

  return {
    language
  };
};

export default MyApp
*/