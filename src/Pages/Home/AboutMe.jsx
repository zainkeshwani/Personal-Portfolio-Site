export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/CodeQuestSolo.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I'm a currently a student at Marcus High School—passionate about software engineering with a strong foundation
            in object-oriented programming, full-stack development, and
            clean architecture principles. I’ve built and deployed complete web
            applications using React, Spring Boot, and PostgreSQL, with experience spanning
            from backend API design to polished, responsive UIs. Through competitive
            programming and UIL Computer Science, I’ve sharpened my problem-solving skills
            and developed an ability to write efficient, reliable code under pressure.
          </p>
          <p className="hero--section-description">
            I build not just to make things work — but to make them scalable, readable, and worth maintaining.
          </p>
        </div>
      </div>
    </section>
  );
}
