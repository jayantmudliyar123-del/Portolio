import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Product Designer</h4>
                <h5>THOUGHTWIN IT SOLUTIONS PVT LTD</h5>
              </div>
              <h3>NOW (5+ Yr)</h3>
            </div>
            <p>
              Leading end-to-end product strategy and design for web and mobile applications. Balancing user needs with business goals through deep research and rapid Figma prototyping, collaborating with cross-functional teams to launch scalable solutions that improve product adoption rates.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic & UI Designer</h4>
                <h5>EcomCraft Pvt. Ltd.</h5>
              </div>
              <h3>2018 (2 Yr)</h3>
            </div>
            <p>
              Designed compelling UI elements, icons, and branding materials for diverse clients. Crafted responsive, cross-platform UI components to ensure seamless visual consistency and engaging user experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern Graphic & UI Designer</h4>
                <h5>Paravidhi Pvt Ltd</h5>
              </div>
              <h3>2017 (6 Mo)</h3>
            </div>
            <p>
              Kick-started my career by assisting with digital interface layouts, custom icon design, and wireframing. Gained foundational, hands-on experience using Adobe Creative Suite and various UI prototyping tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
