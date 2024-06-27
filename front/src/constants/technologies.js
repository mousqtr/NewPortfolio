export const TECHNOLOGIES = {
  languages: {
    html: { label: "HTML", logo: "html.png", bgColor: "orange" },
    css: { label: "CSS", logo: "css.png", bgColor: "#cd2fad" },
    javascript: { label: "Javascript", logo: "js.png", bgColor: "#ffc604" },
    php: { label: "PHP", logo: "php.png", bgColor: "#8500ff" },
    python: { label: "Python", logo: "python.png", bgColor: "#7171fd" },
    cplusplus: { label: "C++", logo: "cplusplus.png", bgColor: "#4848d3" },
    java: { label: "Java", logo: "react.png", bgColor: "orange" },
    dax: { label: "Dax", logo: "", bgColor: "grey" },
    power_query_m: {
      label: "Power Query M",
      logo: "",
      bgColor: "#b3b3b3",
    },
  },
  libraries: {
    react_js: { label: "React.js", logo: "react.png", bgColor: "orange" },
    angular: { label: "Angular", logo: "angular.png", bgColor: "orange" },
    node_js: { label: "Node.js", logo: "nodejs.png", bgColor: "orange" },
    zend: { label: "Zend Framework", logo: "zend.png", bgColor: "#69b601" },
  },
  databases: {
    mongodb: { label: "MongoDB", logo: "mongodb.png", bgColor: "orange" },
    postgresql: {
      label: "PostgreSQL",
      logo: "postgresql.png",
      bgColor: "orange",
    },
    mysql: { label: "MySQL", logo: "mysql.png", bgColor: "orange" },
  },
  tools: {
    vscode: {
      label: "Visual Studio Code",
      logo: "vscode.png",
      bgColor: "orange",
    },
  },
};

export const TECHNOLOGIES_BY_FIELD = Object.keys(TECHNOLOGIES).reduce(
  (acc, curr) => {
    Object.keys(TECHNOLOGIES[curr]).forEach((t) => {
      acc[t] = TECHNOLOGIES[curr][t];
    });
    return acc;
  },
  {}
);
