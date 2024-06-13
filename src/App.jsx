import { About, CallToAction, CustomerReviews, Features, Footer, Hero, Products, Services } from "./sections"
import Nav from "./components/Nav"

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className='padding'>
        <Features />
      </section>
      <section className='padding'>
        <About />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <CallToAction />
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>

    </main>
  )
}

export default App