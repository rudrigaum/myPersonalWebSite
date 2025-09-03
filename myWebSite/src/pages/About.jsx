import React from 'react';
import './About.css';

function About() {
  const skills = [
    'Swift',
    'Kotlin',
    'Java',
    'Dart',
    'Flutter',
    'UIKit',
    'SwiftUI',
    'Foundation',
    'Core Data',
    'Combine',
    'Git',
    'GitHub',
    'Xcode',
    'TestFlight',
    'Swift Package Manager (SPM)',
    'Cocoapods',
    'Carthage',
    'Fastlane',
    'Figma',
    'APIs RESTful',
    
  ];
  return (
    <div className="about-container">
      <section className="profile-section">
        <img 
          src="https://media.licdn.com/dms/image/v2/C4E03AQFk38Yg-gV8BA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1609585275254?e=1759968000&v=beta&t=RsEDEaL6BMp-aaZF-LMw-7IuoSjsJczlg7SaYdDRuqo" 
          alt="Sua foto de perfil" 
          className="profile-photo" 
        />
        <h1 className="about-heading">About Me</h1>
        <p className="about-bio">
          As an iOS Developer, I am dedicated to building efficient, scalable native applications with an excellent user experience. 
          My expertise lies in Swift, UIKit, and SwiftUI, and I have a solid understanding of architectural patterns like MVC, MVVM, and VIPER.
          My day-to-day work spans from designing new features and integrating RESTful APIs to ensuring code quality with unit tests and managing dependencies. 
          While my primary focus is on the Apple ecosystem, my experience also extends to Android development, and I'm keenly interested in exploring cross-platform technologies like Flutter, as well as Backend and AI solutions.
        </p>
      </section>

      <section className="skills-section">
        <h2 className="skills-heading">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;