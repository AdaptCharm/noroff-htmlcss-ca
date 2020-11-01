import Image from 'next/image'

import Page from './../components/page'
import Footer from './../components/footer'

import heroStyles from './../styles/pages/home/hero.module.css'

const Index = () => {
  return (
    <Page>
      <section className={heroStyles.hero}>
        <div className={heroStyles.inner}>
          <Image src="/jackets/coral-jacket.png" width="213" height="220" alt="Coral Jacket" />
          <div className={heroStyles.content}>
            <h1 className={heroStyles.title}>Waterproof rain jackets</h1>
            <a href="" className="button">See all jackets</a>
          </div>
        </div>
      </section>
      <Footer />
    </Page>
  )
}

export default Index