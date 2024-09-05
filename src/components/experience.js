import '../styles/experience.scss'

const ExperienceSection = () => {
  return (  
    <div className="experience-container">
      <h1 className='experience-container-h1'>EXPERIENCE</h1>
      <div className='experience-container-descriptions'>
        <div className="experience-container-descriptions-1">
          <div className='experience-container-descriptions-1-upper'>
            <div className="experience-container-descriptions-3-upper-img">
              <img src={`${process.env.PUBLIC_URL}python.svg`} alt=""></img>
              <h2>Projeto de Automação com Visão Computacional - Python</h2>
            </div>       
            <p>2024 - Presente</p>
          </div>
          <p>Trabalhar neste projeto me ajudou a desenvolver uma abordagem prática e lógica para resolver problemas com visão computacional. Aprendi a lidar com desafios inesperados,
            como otimizar a detecção em tempo real e automatizar processos visuais, o que me tornou mais atento a detalhes e mais confiante em adaptar soluções complexas.</p>
        </div>
        <div className="experience-container-descriptions-2">
          <div className='experience-container-descriptions-2-upper'> 
            <div className="experience-container-descriptions-3-upper-img">
              <img src={`${process.env.PUBLIC_URL}react.svg`} alt=""></img>
              <h2>Loja Virtual Fullstack – Ecommerce Store e Admin - ReactJS</h2>
            </div>   
            <p>2024 - Presente</p>
          </div>
          <p>Desenvolver uma loja online me permitiu entender melhor a integração entre frontend e backend, além de aprender a lidar com sistemas de pagamento e banco de dados de forma mais eficaz. 
            Essa experiência me ensinou a construir soluções escaláveis e otimizadas, e foi um grande passo para aprimorar minhas habilidades em projetos de maior complexidade.</p>
        </div>
        <div className="experience-container-descriptions-3">
          <div className='experience-container-descriptions-3-upper'>    
            <div className="experience-container-descriptions-3-upper-img">
              <img src={`${process.env.PUBLIC_URL}react.svg`} alt=""></img>
              <h2>Plataforma de Receitas – Foodi Tailwind React - ReactJS</h2>
            </div>
            <p>2024 - Presente</p>
          </div>
          <p>Construir essa aplicação com React e Tailwind foi uma oportunidade de melhorar minhas habilidades com interfaces responsivas.
            Além de aprender a criar um design fluido e adaptável, ganhei uma visão melhor de como a experiência do usuário deve ser priorizada,
            o que me fez valorizar a simplicidade e a eficiência ao desenvolver soluções visuais.</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;