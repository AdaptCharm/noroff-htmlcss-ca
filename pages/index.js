import Image from 'next/image'

import Page from './../components/page'
import Footer from './../components/footer'

import heroStyles from './../styles/pages/home/hero.module.css'

import Heart from '../components/icons/heart'

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

      <section className="py-20 bg-secondary">
        <div className="flex flex-col items-center">
          <h2 className="text-secondary mb-12">Popular Jackets</h2>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-end px-5 py-5 rounded-medium bg-primary">
              <Heart />
              <Image src="/jackets/black-jacket.png" width="213" height="220" alt="Black Jacket" />
              <span className="price">$200,00</span>
            </div>
            <div className="inline-flex my-4">
              <div className="circle size-5 bg-primary rounded-large"></div>
              <div className="circle size-5 bg-primary rounded-large ml-3"></div>
            </div>
            <h3 className="text-secondary text-base text-center">All weather jacket</h3>
          </div>
        </div>
      </section>
      <Footer />
    </Page>
  )
}

export default Index