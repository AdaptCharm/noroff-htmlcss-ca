import NextHead from 'next/head'
import { SITE_NAME } from '../../config'
import Announcement from '../announcement'
import Header from '../header'

export default function Page({ title, description, children, shouldIndex = true }) {
  return (
    <>
      <NextHead>
        <title>{title || `${SITE_NAME}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {description !== false && (
          <meta
            name="description"
            content={description || `${SITE_NAME} property`}
          />
        )}
        {!shouldIndex && <meta name="robots" content="noindex" />}
      </NextHead>
      <Announcement />
      <Header />
      <main>{children}</main>
    </>
  )
}