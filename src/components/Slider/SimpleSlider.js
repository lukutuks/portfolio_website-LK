import React , {useState} from 'react';
import Slider from "react-slick";
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './SliderStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


function SimpleSlider(){
  const [imageIndex, setImageIndex] = useState(0);
const NextArrow = ({ onClick }) => {
    return (
      <div className="arrownext" onClick={onClick}>
        <FaArrowRight style={{height: '3vw', width: '3vw'}}/>
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrowprev" onClick={onClick}>
        <FaArrowLeft style={{height: '3vw', width: '3vw'}}/>
      </div>
    );
  }; 
  var settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };



  

  
return(<Section id="projects">

    <SectionTitle main>Projects</SectionTitle>

    
  <Slider {...settings}>
    {projects.map((p, i) => (
      <div className={i === imageIndex ? "slide activeSlide" : "slide"}>
       
       <BlogCard key={i}>
        <Img src={p.image} />
        <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <br/>
              <TitleContent>Technologies Used:</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Visit</ExternalLinks>
              
            </UtilityList>
       </BlogCard>
        
      </div>
    ))}
  </Slider>
  </Section>
)
    

};
export default SimpleSlider