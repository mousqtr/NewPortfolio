import Summary from "../../../../components/Summary/Summary";
import "./SummaryHome.scss";

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

function SummaryHome() {
  return (
    <div id="summaryHome">
      <Summary data={summary} />
    </div>
  );
}

export default SummaryHome;
