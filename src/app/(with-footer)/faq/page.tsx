"use client";

import React from 'react'
import styles from './page.module.css'
import ScrollToTopButton from '~/components/ScrollToTopButton/ScrollToTopButton'
import Link from 'next/link'
import { useTranslations} from "next-intl"
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react"

const customTheme = extendTheme({
  colors: {
    brand: {
      900: "#ff0000",
      800: "#ff0000",
      700: "#ff0000",
    },
  },
  components: {
    AccordionButton: {
      baseStyle: {
        bgGradient: "linear(to-r, #7928CA, #FF0080)",
        _hover: {
          transform: "scale(1.02)",
          bgGradient: "linear(to-r, #FF0080, #7928CA)",
        },
      },
    },
  },
});

const FAQ = () => {
  const t = useTranslations("FAQ")
  return (
    <>
      <main className={styles.wrapper}>
      <div className={styles.container}>
        <ScrollToTopButton />
        <h1 className={styles.title}>
          {t("about")}
        </h1>
        <p className={styles.subtitle}>
          {t("subtitle")}
        </p>
        <Link className={styles.goHomeLink} href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
            <path fill="currentColor" d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75" />
          </svg>
          {t("home")}
        </Link>
        <Link className={styles.goHomeLink} href="/blog">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
            <g fill="none" stroke="currentColor" strokeWidth="4">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M24 21v23c-3.291-4-13.371-4-18-4V18c9.874 0 16.114 2 18 3m0 0v23c3.291-4 13.371-4 18-4V18c-9.874 0-16.114 2-18 3" />
              <circle cx="24" cy="12" r="8" />
            </g>
          </svg>
          {t("blog")}
        </Link>
        <div className={styles.separator} />
        <section className={styles.section}>
          <ChakraProvider>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <h2 className={styles.title1}>
                        {t("q0")}
                      </h2>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className={styles.paragraph}>
                    {t("a01")}
                    <br /><br />
                  </p>
                  <p className={styles.paragraph}>
                    {t("a02")}
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ChakraProvider>
        </section>
        <br />
        <section className={styles.section}>
          <ChakraProvider theme={customTheme}>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <h2 className={styles.title1}>{t("q1")}</h2>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className={styles.paragraph}>
                    {t("a11")}
                    <br /><br />
                    {t("a12")}
                  </p>
                  <p className={styles.paragraph}>
                    {t("a13")}
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ChakraProvider>
        </section>
        <br />
        <section className={styles.section}>
          <ChakraProvider>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <h2 className={styles.title1}>
                        {t("q2")}
                      </h2>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className={styles.paragraph}>
                    {t("a21")}
                  </p>
                  <p className={styles.paragraph}>
                    {t("a22")}
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ChakraProvider>
        </section>
        <br />
        <section className={styles.section}>
          <ChakraProvider>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <h2 className={styles.title1}>
                        {t("q3")}
                      </h2>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className={styles.paragraph}>
                    {t("a31")}
                  </p>
                  <p className={styles.paragraph}>
                    {t("a32")}
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ChakraProvider>
        </section>
        <br />
        <section className={styles.section}>
          <ChakraProvider>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <h2 className={styles.title1}>
                        {t("q4")}
                      </h2>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className={styles.paragraph}>
                    {t("a41")}
                  </p>
                  <p className={styles.paragraph}>
                    {t("a42")}
                  </p>
                  <p className={styles.paragraph}>
                    {t("a43")}
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ChakraProvider>
        </section>
        <br />
        <section className={styles.section}>
          <ChakraProvider>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <h2 className={styles.title1}>
                        {t("q5")}
                      </h2>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    <li>
              <span
                style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
      <a href="https://gist.github.com/pyoneerC/b06fc1390048ff9ef094e70211dc68f8" target="_blank"
         rel="noopener noreferrer"
         style={{ color: "inherit", textDecoration: "inherit" }}>
        {t("a51")}
      </a>
      </span>
                    </li>
                    <li>
              <span
                style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
      <a href="https://gist.github.com/pyoneerC/ca6d52d08562986b39b2932de0327915" target="_blank"
         rel="noopener noreferrer"
         style={{ color: "inherit", textDecoration: "inherit" }}>
        {t("a52")}
      </a>
              </span>
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ChakraProvider>
        </section>
        <br />
        <section className={styles.section}>
          <ChakraProvider>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <h2 className={styles.title1}>
                        {t("q6")}
                      </h2>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className={styles.paragraph}>
                    {t("a61")}
                  </p>
                  <p className={styles.paragraph}>
                    {t("a62")}
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ChakraProvider>
        </section>
        <br />
        <section className={styles.section}>
          <ChakraProvider>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <h2 className={styles.title1}>
                      {t("q7")}
                    </h2>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className={styles.paragraph}>
                  {t("a71")}
                </p>
                <p className={styles.paragraph}>
                  {t("a72")}
                </p>
                <p className={styles.paragraph}>
                  {t("a73")}
                </p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          </ChakraProvider>
        </section>
        <br />
        <section className={styles.section}>
          <ChakraProvider>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <h2 className={styles.title1}>
                      {t("q8")}
                    </h2>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul className={styles.paragraph}>
                  <li><strong>{t("q9")}</strong></li>
                  <p>
                    {t("a91")}
                    <br /><br />
                    {t("a92")}
                    <br /><br />
                    {t("a93")}
                  </p>
                  <br />
                  <li><strong>{t("q10")}</strong></li>
                  <p>
                    {t("a101")}
                    <br /><br />
                    {t("a102")}
                  </p>
                  <br />
                  <li><strong>{t("q11")}</strong></li>
                  <p>
                    {t("a111")}
                  </p>
                  <br />
                  <p>
                    {t("a112")}
                  </p>
                  <br />
                  <p>
                    {t("a113")}
                  </p>
                  <br />
                  <li><strong>{t("q12")}</strong></li>
                  <blockquote>
                    <ul>
                      <li>{t("a121")}</li>
                      <li>{t("a122")}</li>
                      <li>{t("a123")}</li>
                      <li>{t("a124")}</li>
                      <li>{t("a125")}</li>
                      <li>{t("a126")}</li>
                      <li>{t("a127")}</li>
                      <li>{t("a128")}</li>
                    </ul>
                  </blockquote>
                  <br />
                  <li><strong>{t("q13")}</strong></li>
                  <p>
                    {t("a131")}
                  </p>
                  <br />
                  <p>
                    {t("a132")}
                  </p>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          </ChakraProvider>
        </section>
        <br />
        <section className={styles.section}>
          <ChakraProvider>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <h2 className={styles.title1}>
                      {t("q14")}
                    </h2>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className={styles.paragraph}>
                  {t("a141")}
                </p>
                <p className={styles.paragraph}>
                  {t("a142")}
                </p>
                <p className={styles.paragraph}>
                  {t("a143")}
                </p>
                <p>
                  {t("a144")}
                </p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          </ChakraProvider>
        </section>
        <br />
        <section className={styles.section}>
          <ChakraProvider>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <h2 className={styles.title1}>
                      {t("q15")}
                    </h2>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className={styles.paragraph}>
                  {t("a151")}
                </p>
                <ul>
                  <ul>
                    <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=Tt3F2x0RuZI" target="_blank" rel="noopener noreferrer">Runaway (U & I) - Galantis</a>
          </span>
                    </li>
                    <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=xY66ucVK-RM" target="_blank" rel="noopener noreferrer">Good 4 Me - Vindata</a>
          </span>
                    </li>
                    <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=zubYYZ0fTyQ" target="_blank" rel="noopener noreferrer">Cutting Shapes - Don</a>
          </span>
                    </li>
                    <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=RhR_Z5wVvJM" target="_blank" rel="noopener noreferrer">Play - Tokyo Machine</a>
          </span>
                    </li>
                    <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=XmIgg9De9hY" target="_blank" rel="noopener noreferrer">The Nights - Avicii</a>
          </span>
                    </li>
                    <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=j43PGdl03WA" target="_blank" rel="noopener noreferrer">She Wants Me Dead - CAZZ</a>
          </span>
                    </li>
                    <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=FgApngD5faY" target="_blank" rel="noopener noreferrer">Silhouette (Feed Me Remix)</a>
          </span>
                    </li>
                    <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=qcE__zJ4L6E" target="_blank"
             rel="noopener noreferrer">Still - Glacier</a>
          </span>
                    </li>
                    <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=A8pOVirjGF0" target="_blank"
             rel="noopener noreferrer">Overkill - RIOT</a>
          </span>
                    </li>
                    <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=mype6RcMMmY" target="_blank"
             rel="noopener noreferrer">Jungle Fury - RIOT</a>
          </span>
                    </li>
                  </ul>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          </ChakraProvider>
        </section>
        <br />
        <br />
        <div className={styles.dashedseparator} />
        <div className={styles.imageContainer}>
          <img src={"/assets/images/faq_pic_m_c.avif"} alt="Max Comperatore" className={styles.image} />
        </div>
        <p className={styles.paragraph} style={{ textAlign: "center" }}>
  <span className={styles.paragraph1} style={{ color: "lime" }}>
  {t("thanks")}
  </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className={styles.icon}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
            <path d="M10 10c-.5 -1 -2.5 -1 -3 0" />
            <path d="M17 10c-.5 -1 -2.5 -1 -3 0" />
            <path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
          </svg>
          <br /><br />
          {t("contact")}
        </p>
      </div>
      </main>
    </>
  )
}

export default FAQ