
import { Navbar, Hero, Introduction, Skill, SchoolProject, PersonalProject, Work, Resume, Contact, Footer } from './index'

function Home() {
    return (
        <div className="overflow-x-clip">
            <Navbar />
            <div className="relative">
                <Hero />
            </div>
            <div className="relative">
                <div className="gradient-02 z-0" />
                <Introduction />
            </div>
            <div className="relative">
                <div className="gradient-03 z-0" />
                <Skill />
            </div>
            <div className="relative">
                <div className="gradient-05 z-0" />
                <SchoolProject />
            </div>
            <div className="relative">
                <div className="gradient-02 z-0" />
                <PersonalProject />
            </div>
            <div className="relative">
                <div className="gradient-04 z-0" />
                <Work />
            </div>
            <div className="relative">
                <div className="gradient-03 z-0" />
                <Resume />
            </div>
            <div className="relative">
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default Home;