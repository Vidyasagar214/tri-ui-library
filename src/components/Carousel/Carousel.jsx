import React from "react";
import "./Carousel.css";

function Carousel({ children, className = "" }) {
  const [index, setIndex] = React.useState(0);
  const items = React.Children.toArray(children);
  const len = items.length;

  return (
    <div className={`ui-carousel ${className}`} role="region" aria-label="Carousel">
      <div className="ui-carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {items.map((child, i) => (
          <div key={i} className="ui-carousel-slide">
            {child}
          </div>
        ))}
      </div>
      {len > 1 && (
        <div className="ui-carousel-dots">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              className={`ui-carousel-dot ${i === index ? "ui-carousel-dot--active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;
