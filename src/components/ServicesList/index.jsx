import servicesData from "../../data/dashServices";
import ServicesCard from "../ServicesCard";
import StyledUl from "./style";

function ServicesList() {
  return (
    <StyledUl>
      {servicesData.map((company, index) => (
        <ServicesCard key={index} company={company} />
      ))}
    </StyledUl>
  );
}

export default ServicesList;
