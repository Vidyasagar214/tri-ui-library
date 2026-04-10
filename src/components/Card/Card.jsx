import React from "react";
import "./Card.css";

function joinClasses(...parts) {
  return parts.filter(Boolean).join(" ");
}

/** Top-level card container. Legacy: pass title/footer + children for body. Or compose with Card.Header, Card.Body, Card.Footer, Card.Img, etc. */
function CardRoot({
  children,
  title,
  footer,
  className = "",
  variant = "outlined",
  color,
  borderColor,
  ...rest
}) {
  const classNames = joinClasses(
    "ui-card",
    `ui-card--${variant}`,
    color && `ui-card--bg-${color}`,
    borderColor && `ui-card--border-${borderColor}`,
    className
  );

  const legacyBody =
    title != null || footer != null ? (
      <>
        {title != null && (
          <CardHeader>
            {typeof title === "string" || typeof title === "number" ? (
              <h3 className="ui-card-title">{title}</h3>
            ) : (
              title
            )}
          </CardHeader>
        )}
        <CardBody>{children}</CardBody>
        {footer != null && <CardFooter>{footer}</CardFooter>}
      </>
    ) : (
      children
    );

  return (
    <div className={classNames} {...rest}>
      {legacyBody}
    </div>
  );
}

function CardHeader({ children, className = "" }) {
  return <div className={joinClasses("ui-card-header", className)}>{children}</div>;
}

function CardBody({ children, className = "" }) {
  return <div className={joinClasses("ui-card-body", className)}>{children}</div>;
}

function CardFooter({ children, className = "" }) {
  return <div className={joinClasses("ui-card-footer", className)}>{children}</div>;
}

/** Semantic title inside body or header */
function CardTitle({ children, className = "", as: Comp = "h3", ...props }) {
  return (
    <Comp className={joinClasses("ui-card-title", className)} {...props}>
      {children}
    </Comp>
  );
}

function CardSubtitle({ children, className = "" }) {
  return <p className={joinClasses("ui-card-subtitle", className)}>{children}</p>;
}

function CardText({ children, className = "" }) {
  return <div className={joinClasses("ui-card-text", className)}>{children}</div>;
}

function CardLink({ children, className = "", href = "#", ...props }) {
  return (
    <a className={joinClasses("ui-card-link", className)} href={href} {...props}>
      {children}
    </a>
  );
}

/** Full-width image cap; place above or below body by order in the tree. Use position for rounded corners. */
function CardImg({ src, alt = "", position = "top", className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={joinClasses("ui-card-img", position && `ui-card-img--${position}`, className)}
    />
  );
}

/** Absolutely positioned over a preceding CardImg; wrap both in Card.ImgOverlayWrap or use structure: div.ui-card-img-wrap > CardImg + CardImgOverlay */
function CardImgOverlayWrap({ children, className = "" }) {
  return <div className={joinClasses("ui-card-img-wrap", className)}>{children}</div>;
}

function CardImgOverlay({ children, className = "" }) {
  return <div className={joinClasses("ui-card-img-overlay", className)}>{children}</div>;
}

/** Flush list inside a card (Bootstrap-style list group) */
function CardListGroup({ children, className = "" }) {
  return <ul className={joinClasses("ui-card-list-group", className)}>{children}</ul>;
}

function CardListGroupItem({ children, className = "" }) {
  return <li className={joinClasses("ui-card-list-group-item", className)}>{children}</li>;
}

/** Horizontal group of cards (equal flex, shared outer border radius). */
function CardGroup({ children, className = "" }) {
  return <div className={joinClasses("ui-card-group", className)}>{children}</div>;
}

const Card = CardRoot;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Text = CardText;
Card.Link = CardLink;
Card.Img = CardImg;
Card.ImgOverlayWrap = CardImgOverlayWrap;
Card.ImgOverlay = CardImgOverlay;
Card.ListGroup = CardListGroup;
Card.ListGroupItem = CardListGroupItem;
Card.Group = CardGroup;

export { CardGroup };
export default Card;
