import { ThemeProvider, CSSReset, ColorModeProvider, Button} from '@chakra-ui/core'
import theme from "../theme"
//import { configureLanguage } from "../utils/language";
import { LanguageProvider } from "../utils/LanguageProvider"
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider value="light">
          <CSSReset />
          <Component {...pageProps} language={router.query.lang}/>
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