import styles from './hero.module.css'

const Image = ({ src, ...props }) => (
  <figure>
    <img src={src} {...props} />
  </figure>
)

const Hero = () => {
  return (
    <section className="section hero">
      <div className="inner side-by-side">
        <div className="image">
          <Image
            src="/jackets/coral-jacket.png"
            alt="Coral jacket"
          />
        </div>
        <div className="content">
          <h1 className="title">Waterproof rain jackets</h1>
          <a href="" className="button">See all jackets</a>
        </div>
      </div>
    </section>
  )
}

export default Hero