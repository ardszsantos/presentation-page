import '../styles/card.scss'

const ProjectCard = ({ imgUrl, title, subtitle }) => {
  return (  
    <div className="card">
      <div className="card-image">
        <img src={imgUrl} alt="HTML5 Power" />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="card-arrow">
        <span>&#x2192;</span>
      </div>
    </div>

  );
}

export default ProjectCard;