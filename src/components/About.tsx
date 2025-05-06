
const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden border-8 border-gray-100 shadow-lg">
            {/* Replace with your about image */}
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
              <span className="text-7xl font-bold text-white">JD</span>
            </div>
          </div>
          <div>
            <h3 className="mb-4">Who am I?</h3>
            <p className="text-gray-600 mb-4">
              I'm a web developer based in San Francisco, with a passion for creating clean, elegant 
              and efficient digital experiences. I specialize in building modern web applications with 
              React, TypeScript, and other cutting-edge technologies.
            </p>
            <p className="text-gray-600 mb-6">
              With 5+ years of experience in the industry, I've worked with clients ranging from startups 
              to large corporations, helping them build products that users love. I'm dedicated to writing 
              clean code and constantly learning new technologies to improve my craft.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Education</h4>
                <p className="text-gray-600">B.S. Computer Science, Stanford University</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Experience</h4>
                <p className="text-gray-600">5+ years professional development</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Location</h4>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Interests</h4>
                <p className="text-gray-600">Travel, Photography, Hiking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
