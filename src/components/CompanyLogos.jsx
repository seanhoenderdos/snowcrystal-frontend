import { companyLogos } from "../constants";
import Heading from "./Heading";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <Heading tag="Trusted To Create Beautiful User Experiences" />
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={150} height={150} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
