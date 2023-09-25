
import './App.css'
import Footer from './components/Footer/Footer'
import Content from './components/content/Content'
import Testimonials from './components/testimonial/Testimonials'
import Nav from './components/nav/Nav'
import FeaturedCourses from './components/FeaturedCourses/FeaturedCourses'
import Tutor from './components/Tutors/Tutors'
function App() {
  

  return (
    <>
    {/* this is app.ja */}
     <Nav/>
  <Content/>
  <FeaturedCourses/>
  <Testimonials/>
  <Tutor/>
  <hr/>
  <Footer/>
     
    </>
  )
}

export default App
