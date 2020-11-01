import NextHead from 'next/head'
import { SITE_NAME } from '../../config'
import Announcement from '../announcement'
import Header from '../header'

export default function Page({
  title = 'Bulletproof jackets at reasonable low cost. Be amazed.',
  description = 'RainyDays provide you with the best modern and comfortable jackets on the market.',
  children,
  shouldIndex = true }) {
  return (
    <>
      <NextHead>
        <title>{title + ` | ${SITE_NAME}` || `${SITE_NAME}`}</title>

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        <meta name="og:title" content={title + ` | ${SITE_NAME}` || `${SITE_NAME}`} />
        <meta property="og:url" content="https://rainydays.vercel.app" />
        <meta property="og:type" content="website" />
                
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {!shouldIndex && <meta name="robots" content="noindex" />}

        <link rel="icon" type="image/png" href="/favicon.png" />
      </NextHead>
      <Announcement />
      <Header />
      <main>{children}</main>
    </>
  )
}