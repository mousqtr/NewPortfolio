export const TECHNOLOGIES = {
  languages: {
    html: { label: "HTML", logo: "react.png", bgColor: "orange" },
    css: { label: "CSS", logo: "react.png", bgColor: "#cd2fad" },
    javascript: { label: "Javascript", logo: "react.png", bgColor: "#ffc604" },
    php: { label: "PHP", logo: "react.png", bgColor: "orange" },
    python: { label: "Python", logo: "react.png", bgColor: "#7171fd" },
    cplusplus: { label: "C++", logo: "react.png", bgColor: "blue" },
  },
  libraries: {
    react_js: { label: "React.js", logo: "react.png", bgColor: "orange" },
    angular: { label: "Angular", logo: "react.png", bgColor: "orange" },
    node_js: { label: "Node.js", logo: "react.png", bgColor: "orange" },
  },
  databases: {
    mongodb: { label: "MongoDB", logo: "react.png", bgColor: "orange" },
    postgresql: { label: "PostgreSQL", logo: "react.png", bgColor: "orange" },
    mysql: { label: "MySQL", logo: "react.png", bgColor: "orange" },
  },
  tools: {
    vscode: {
      label: "Visual Studio Code",
      logo: "react.png",
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
  {},
);
