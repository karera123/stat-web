import logo from '../assets/images/stats.jpg'

const Home = () => {
  return (
    <div>
      <section className="blog-post mb-7">
        <img className='mx-auto' src={logo} alt='Statistics' width={500} />
        <p>
          Welcome to my statistics blog! <br />
          This is where I share my homework assignments and projects from my statistics course.<br />
          To view a single homework, please select one from the navigation bar on top of the page. I hope you will find my blog interesting and useful. Thank you for visiting!
        </p>
      </section>
    </div>
  )
}

export default Home