export const TECHNOLOGIES = {
  languages: {
    html: { label: "HTML", logo: "html.png", bgColor: "#ff4b00" },
    css: { label: "CSS", logo: "css.png", bgColor: "rgb(32 141 184)" },
    javascript: {
      label: "Javascript",
      logo: "js.png",
      bgColor: "rgb(239 180 5)",
    },
    php: { label: "PHP", logo: "php.png", bgColor: "rgb(143 158 209)" },
    python: { label: "Python", logo: "python.png", bgColor: "rgb(64 126 175)" },
    cplusplus: {
      label: "C++",
      logo: "cplusplus.png",
      bgColor: "rgb(0 68 130)",
    },
    java: { label: "Java", logo: "react.png", bgColor: "orange" },
    dax: { label: "Dax", logo: "", bgColor: "grey" },
    power_query_m: {
      label: "Power Query M",
      logo: "",
      bgColor: "#b3b3b3",
    },
  },
  libraries: {
    react_js: {
      label: "React.js",
      logo: "react.png",
      bgColor: "rgb(83 193 222)",
    },
    angular: {
      label: "Angular",
      logo: "angular.png",
      bgColor: "rgb(212 58 47)",
    },
    node_js: { label: "Node.js", logo: "nodejs.png", bgColor: "#21a366" },
    zend_framework: {
      label: "Zend Framework",
      logo: "zend.png",
      bgColor: "#69b601",
    },
    symfony: { label: "Symfony", logo: "symfony.png", bgColor: "#455a64" },
  },
  databases: {
    mongodb: { label: "MongoDB", logo: "mongodb.png", bgColor: "#4caf50" },
    postgresql: {
      label: "PostgreSQL",
      logo: "postgresql.png",
      bgColor: "#336791",
    },
    mysql: { label: "MySQL", logo: "mysql.png", bgColor: "#00796b" },
  },
  tools: {
    vscode: {
      label: "Visual Studio Code",
      logo: "vscode.png",
      bgColor: "#0072ba",
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
