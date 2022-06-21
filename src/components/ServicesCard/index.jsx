import StyledLi from "./style";

function ServicesCard({ company }) {
  return (
    <StyledLi>
      <img src={company.url} alt={company.categoria} />
      <h2>{company.name}</h2>
      <span>{company.category}</span>
      <button>Saiba mais</button>
    </StyledLi>
  );
}

export default ServicesCard;
