import data from "../../data/index.json";
import { FaGithub } from 'react-icons/fa';

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="skills--section--heading">Projects</h2>
        </div>
        <div>
          <button
      onClick={() => window.open('https://github.com/zainkeshwani', '_blank')}
      className="github-button"
    >
      <FaGithub size={24} style={{ marginRight: '8px' }} />
      Visit My GitHub
    </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                <button onClick={() => window.open(item.link, '_blank')} 
                className='github-button'>View In Github</button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
