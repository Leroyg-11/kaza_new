import "../components/ApartmentContent.scss";
import Carousel from "./ApartmentContentModule/Carousel";
import TextWrap from "./ApartmentContentModule/TextWrap";
import Tag from "./ApartmentContentModule/Tag";
import UserInfo from "./ApartmentContentModule/UserInfo";
import TitleLocation from "./ApartmentContentModule/TitleLocation";
import { useEffect, useState } from "react";

const ApartmentContent = (props) => {
  const { flat } = props;

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="apartment_content">
      <Carousel pictures={flat.pictures} />
      <div className="owner_info_container">
        <div className="info_mobile_container">
          <TitleLocation title={flat.title} location={flat.location} />
          {isMobile && <Tag tags={flat.tags} />}

          <UserInfo rating={flat.rating} host={flat.host} />
        </div>
        {!isMobile && <Tag tags={flat.tags} />}
      </div>

      <TextWrap description={flat.description} equipments={flat.equipments} />
    </div>
  );
};

export default ApartmentContent;
