import { Card, Image, Button } from "antd";
import "./card.scss";
const { Meta } = Card;

const CardComponent = ({ foto, title, desc, link }) => {
  return (
    <div className="Card">
      <Card
        loading={false}
        hoverable={true}
        cover={<Image alt="example" src={foto} loading="lazy" />}
      >
        {title !== undefined && (
          <Meta style={{ padding: "15px" }} title={title} description={desc} />
        )}
        {link !== undefined && (
          <a href={link} target="_blank" className="Card-btn">
            <Button type="primary">See website</Button>
          </a>
        )}
      </Card>
    </div>
  );
};

export default CardComponent;
