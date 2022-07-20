import "./style.css";

const Article = ({ title, children, ...rest }) => (
  <div className="article" {...rest}>
    <h2>{title}</h2>
    {children}
  </div>
);

export default Article;
