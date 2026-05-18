import Navbar from '../src/components/navbar';
import Header from '../src/components/Header';
import About from '../src/components/About';
import Projects from '../src/components/Projects';
import Skills from '../src/components/Skills';
import Experience from '../src/components/Experience';
import Footer from '../src/components/Footer';

import sharedData from '../public/portfolio_shared_data.json';
import resumeData from '../public/res_primaryLanguage.json';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header sharedData={sharedData.basic_info} />
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />
      <Projects
        resumeProjects={resumeData.projects}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Experience
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Footer sharedBasicInfo={sharedData.basic_info} />
    </div>
  );
}
