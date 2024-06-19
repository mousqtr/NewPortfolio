import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export function useNavigation() {
  const navigate = useNavigate();

  const scrollToSection = useCallback((pSection = "") => {
    if (pSection === "") {
      window.scrollTo({ top: -60, behavior: "smooth" });
      return;
    }
    setTimeout(() => {
      const yOffset = -56;
      const element = document.getElementById(pSection);
      if (element) {
        const yPosition =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }, 0);
  }, []);

  const changePage = useCallback(
    (pEvent, pPage, pSection = "") => {
      pEvent.preventDefault();
      navigate(pPage);
      scrollToSection(pSection);
    },
    [navigate, scrollToSection],
  );

  return { changePage };
}
