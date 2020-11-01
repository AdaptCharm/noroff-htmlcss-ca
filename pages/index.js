import Page from './../components/page'
import Footer from './../components/footer'

import heroStyles from './../styles/pages/home/hero.module.css'

const Index = () => {
  const Image = ({ src, ...props }) => (
    <figure>
      <img src={src} {...props} />
    </figure>
  )
  
  return (
    <Page>
      <section className={heroStyles.hero}>
        <div className={heroStyles.inner}>
          <div className={heroStyles.image}>
            <Image
              src="/jackets/coral-jacket.png"
              alt="Coral jacket"
            />
          </div>
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