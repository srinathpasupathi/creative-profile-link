
const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 82 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 70 },
        { name: "GraphQL", level: 65 },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 88 },
        { name: "Docker", level: 60 },
        { name: "AWS", level: 65 },
        { name: "Figma", level: 80 },
        { name: "Testing", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-center mb-6 text-primary">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-primary rounded-full h-2.5" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
