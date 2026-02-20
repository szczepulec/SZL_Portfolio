import React, { useContext } from "react";
import "./News.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { newsSection } from "../../portfolio";

export default function News() {
  const { isDark } = useContext(StyleContext);

  if (!newsSection.display) {
    return null;
  }

  return (
    <div
      className={isDark ? "news-section dark-mode" : "news-section"}
      id="news"
    >
      <Fade bottom duration={1000} distance="20px">
        <h1 className="news-title">{newsSection.title}</h1>
      </Fade>

      <div className="news-list">
        {newsSection.news.map((item, index) => (
          <Fade
            bottom
            duration={800}
            distance="15px"
            delay={index * 100}
            key={index}
          >
            <div className="news-item">
              <div className="news-date">{item.date}</div>
              <div className="news-text">{item.text}</div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}