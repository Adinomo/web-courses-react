import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { homeSection } from '../Data/HomeSection';
import { coursesSection } from '../Data/CoursesSection'
import { tutorsSection, tutorsList } from '../Data/TutorsSection'
import Tutors from '../components/Tutors'
import { partnersSection, partnersList} from '../Data/PartnersSection';
import Partners from '../components/Partners'
import Contact from '../components/Contact'
import { contactSection } from '../Data/ContactSection';

import parse from 'html-react-parser';

import '../styles/Home.css'



function Home() {
  return (

    <>
    <Navbar />
    <div className='wrapper'>
         <section id="home">
            <img src={homeSection.image} alt="HomeImage" />
            <div className="kolom">
            {parse(homeSection.content)}
            </div>
        </section>
        {/* {menu courses} */}
        <section id="courses">
            <div className="kolom">
            {parse(coursesSection.content)}
            </div>
            <img src={coursesSection.image} alt="CoursesImage" />
        </section>
        {/*(tutor)*/}
              <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                {parse(tutorsSection.content)}
                </div>
                <Tutors tutorsList={tutorsList} />
                </div>
                </section>
              {/* partner */}
          <section id="partners">
            <div className="tengah">
                <div className="kolom">
                  {parse(partnersSection.content)}
                  <Partners partnersList={partnersList} />
                </div>
                </div>
        </section>
    </div>
    <Contact contactsection={contactSection} />   
    <Footer />
    </>
  )
}

export default Home