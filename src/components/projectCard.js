import '../styles/card.scss'

const ProjectCard = ({ imgUrl, title, subtitle }) => {
  return (  
    <div class="card">
      <div class="card-image">
        <img src={imgUrl} alt="HTML5 Power" />
      </div>
      <div class="card-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div class="card-arrow">
        <span>&#x2192;</span>
      </div>
    </div>

  );
}

export default ProjectCard;