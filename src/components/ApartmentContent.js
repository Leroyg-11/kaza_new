import "../components/ApartmentContent.scss";
import Carousel from "./ApartmentContentModule/Carousel";
import TextWrap from "./ApartmentContentModule/TextWrap";
import Tag from "./ApartmentContentModule/Tag";
import UserInfo from "./ApartmentContentModule/UserInfo";
import TitleLocation from "./ApartmentContentModule/TitleLocation";

const ApartmentContent = (props) => {
  return (
    <div className="apartment_content">
      <Carousel pictures={props.flat.pictures} />
      <div className="owner_info_container">
        <TitleLocation
          title={props.flat.title}
          location={props.flat.location}
        />
        <UserInfo rating={props.flat.rating} host={props.flat.host} />
      </div>
      <Tag tags={props.flat.tags} />

      <TextWrap
        description={props.flat.description}
        equipments={props.flat.equipments}
      />
    </div>
  );
};

export default ApartmentContent;
