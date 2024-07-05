import Summary from "../../../../components/Summary/Summary";
import "./SummaryPortfolio.scss";

const summary = [
  {
    id: "tools",
    label: "Compétences",
    img: "/icons/tools.png",
  },
  {
    id: "experiences",
    label: "Expériences",
    img: "/icons/suitcase.png",
  },
  {
    id: "formation",
    label: "Formation",
    img: "/icons/school.png",
  },
  {
    id: "projects",
    label: "Projets",
    img: "/icons/site.png",
  },
];

function SummaryPortfolio() {
  return (
    <div id="summaryPortfolio">
      <Summary data={summary} />
    </div>
  );
}

export default SummaryPortfolio;
