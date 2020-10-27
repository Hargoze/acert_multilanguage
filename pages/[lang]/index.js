import React from "react";
import Head from "next/head"
import MyHeader from '../../components/MyHeader'
import Footer from "../../components/footer"
import { Container } from '../../components/Container'
import { Hero } from '../../components/hero'
import { InBetween } from '../../components/in_between'
import { CallToAction } from "../../components/call_to_action"
import { SideComponent } from "../../components/sideComponent"
import { BottomComponent } from "../../components/bottomComponent"
import { PrismaClient } from '@prisma/client';

const Post = ({headers, label, ...props}) => {
  return (
  <Container>
  <Head>
    <link rel="icon" sizes="48x48" href="/miniLogo.ico"/>
    <meta charSet="utf-8" />
    <meta name="description" content="acert.io landing page"/>
    <title>acert | reframing digital access</title>
  </Head>
  <MyHeader message="have a nice day :)" alert={true} content={headers} label={label} language={props.language}/>
   <Hero />
    <InBetween />
    <SideComponent link="#" line1="i dont get it," line2="explain differently"/>
    <CallToAction />
    <Footer/>
    <BottomComponent />
  </Container>
  )
}

export default Post

export async function getStaticPaths() {
  return {
    paths :[
      {params: {lang: "en"} },
      {params: {lang: "fr"} }
    ],
    fallback: false,
  }
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const headers = await prisma.header.findMany({
    include: {highlight: true, picture: true, link: true }
  })
  const label = await prisma.label.findMany()
  return {
    props: {
      headers,
      label
    }
  };
}