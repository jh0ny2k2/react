import php from "../assets/img/php.svg";
import html from "../assets/img/html.svg";
import mysql from "../assets/img/mysql.svg";
import laravel from "../assets/img/laravel.svg";
import react from "../assets/img/react.svg";
import java from "../assets/img/java.svg";
import jquery from "../assets/img/jquery.svg";
import tailwind from "../assets/img/tailwind.svg";
import angular from "../assets/img/angular.svg";
import javascript from "../assets/img/javascript.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={php} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML / CSS</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MY SQL</h5>
                            </div>
                            <div className="item">
                                <img src={laravel} alt="Image" />
                                <h5>LARAVEL</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>REACT</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                                <img src={jquery} alt="Image" />
                                <h5>JQUERY</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="Image" />
                                <h5>TAILWIND</h5>
                            </div>
                            <div className="item">
                                <img src={angular} alt="Image" />
                                <h5>ANGULAR</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
