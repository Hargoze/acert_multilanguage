import React from 'react'
import Head from 'next/head'

export const defaultLocale = 'en'

export const locales = ['en', 'fr', 'pl'] 

export const languageNames = {
  en: 'English',
  fr: 'français',
  pl: 'polski'
}

export function isLocale(tested) {
  return locales.some(locale => locale === tested)
}

export function getInitialLocale() {
  const localSetting = localStorage.getItem('locale')
  if (localSetting && isLocale(localSetting)) {
    return localSetting
  }

  const [browserSetting] = navigator.language.split('-')
  if (isLocale(browserSetting)) {
    return browserSetting
  }

  return defaultLocale
}

export default () => {
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`)
  })
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  )
  };
