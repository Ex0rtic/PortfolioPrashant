import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import img9 from "../assets/img/img9.jpg";
import img10 from "../assets/img/img10.jpg";
import img11 from "../assets/img/img11.jpg";
import img12 from "../assets/img/img12.jpg";
import img13 from "../assets/img/img13.jpg";
import img14 from "../assets/img/img14.jpg";
import img15 from "../assets/img/img15.jpg";
import img16 from "../assets/img/img16.jpg";
import img17 from "../assets/img/img17.jpg";
import img18 from "../assets/img/img18.jpg";
import img19 from "../assets/img/img19.jpg";
import img20 from "../assets/img/img20.jpg";
import img21 from "../assets/img/img21.jpg";
import img22 from "../assets/img/img22.jpg";
import img23 from "../assets/img/img23.jpg";
import img24 from "../assets/img/img24.jpg";
import img25 from "../assets/img/img25.jpg";
import img26 from "../assets/img/img26.jpg";
import img27 from "../assets/img/img27.jpg";
import img28 from "../assets/img/img28.jpg";
import img29 from "../assets/img/img29.jpg";
import img30 from "../assets/img/img30.jpg";
import img31 from "../assets/img/img31.jpg";
import img32 from "../assets/img/img32.jpg";
import img33 from "../assets/img/img33.jpg";
import img34 from "../assets/img/img34.jpg";
import img35 from "../assets/img/img35.jpg";
import img36 from "../assets/img/img36.jpg";
import img37 from "../assets/img/img37.jpg";
import img38 from "../assets/img/img38.jpg";
import img39 from "../assets/img/img39.jpg";
import img40 from "../assets/img/img40.jpg";
import img41 from "../assets/img/img41.jpg";
import img42 from "../assets/img/img42.jpg";
import img43 from "../assets/img/img43.jpg";
import img44 from "../assets/img/img44.jpg";
import img45 from "../assets/img/img45.jpg";
import img46 from "../assets/img/img46.jpg";
import img47 from "../assets/img/img47.jpg";
import img48 from "../assets/img/img48.jpg";
import img49 from "../assets/img/img49.jpg";
import img50 from "../assets/img/img50.jpg";
import img51 from "../assets/img/img51.jpg";
import img52 from "../assets/img/img52.jpg";
import img53 from "../assets/img/img53.jpg";
import img54 from "../assets/img/img54.jpg";
import img55 from "../assets/img/img55.jpg";
import img56 from "../assets/img/img56.jpg";
import img57 from "../assets/img/img57.jpg";
import img58 from "../assets/img/img58.jpg";
import img59 from "../assets/img/img59.jpg";
import img60 from "../assets/img/img60.jpg";
import img61 from "../assets/img/img61.jpg";
import img62 from "../assets/img/img62.jpg";
import img104 from "../assets/img/img104.JPG";
import img103 from "../assets/img/img103.JPG";
import img101 from "../assets/img/img101.jpg";
import img100 from "../assets/img/img100.jpg";
import img92 from "../assets/img/img92.jpg";
import img90 from "../assets/img/img90.jpg";
import img89 from "../assets/img/img89.webp";
import img88 from "../assets/img/img88.webp";
import img87 from "../assets/img/img87.webp";
import img86 from "../assets/img/img86.webp";
import img84 from "../assets/img/img84.webp";
import img83 from "../assets/img/img83.webp";
import img82 from "../assets/img/img82.jpg";
import img81 from "../assets/img/img81.jpg";
import img80 from "../assets/img/img80.jpg";
import img79 from "../assets/img/img79.jpg";
import img78 from "../assets/img/img78.jpg";
import img77 from "../assets/img/img77.jpg";
import img76 from "../assets/img/img76.jpg";
import img75 from "../assets/img/img75.jpg";
import img74 from "../assets/img/img74.jpg";
import img73 from "../assets/img/img73.jpg";
import img111 from "../assets/img/img111.jpg";
import img112 from "../assets/img/img112.jpg";
import img113 from "../assets/img/img113.jpg";
import img114 from "../assets/img/img114.jpg";
import img115 from "../assets/img/img115.jpg";
import img116 from "../assets/img/img116.jpg";
import img117 from "../assets/img/img117.jpg";
import img118 from "../assets/img/img118.jpg";
import img119 from "../assets/img/img119.jpg";



import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Homer Simpson and Dr. Hibbert in a medical setting",
      imgUrl: img1,
    },
    {
      title: "Amphibious Bus on City Street",
      imgUrl: img2,
    },
    {
      title: "Totoro and Mei at Lakshmi Vilas Palace",
      imgUrl: img3,
    },
    {
      title: "Sci-Fi Pregnancy Illustration",
      imgUrl: img4,
    },
    {
      title: "Coca-Cola Cow Milking",
      imgUrl: img6,
    },
    {
      title: "Anime Character on Kit Kat Packaging",
      imgUrl: img7,
    },
    {
      title: "Baby Playing VR Game",
      imgUrl: img8,
    },
    {
      title: "Ultraman Lounging on a Building",
      imgUrl: img9,
    },
    {
      title: "Family Cooking Outdoors",
      imgUrl: img10,
    },
    {
      title: "Chef in a Bustling Kitchen",
      imgUrl: img11,
    },
    {
      title: "Cartoon Depiction of a Deity",
      imgUrl: img12,
    },
    {
      title: "Goku in Front of Chhatrapati Shivaji Maharaj Terminus",
      description: "Design & Development",
      imgUrl: img13,
    },
    {
      title: " Cartoon of Nurses Confronting Coronavirus",
      description: "Design & Development",
      imgUrl: img14,
    },
    {
      title: "Image with an ID card and the text 'Hindu' in front of a landscape",
      description: "Design & Development",
      imgUrl: img15,
    },
    {
      title: "Cartoon of Food Served in a Boat-Shaped Dish",
      description: "Design & Development",
      imgUrl: img16,
    },
    {
      title: " Cartoon of a Man Being Crowned by a Police Officer",
      description: "Design & Development",
      imgUrl: img18,
    },
    {
      title: "Cartoon of a Lamborghini Urus",
      description: "Design & Development",
      imgUrl: img19,
    },
    {
      title: "Person Playing Basketball in front of the Golden Gate Bridge",
      description: "Design & Development",
      imgUrl: img20,
    },
    {
      title: "Alien in a Room with a Painting",
      description: "Design & Development",
      imgUrl: img21,
    },
    {
      title: "Hands Playing Chess over Ancient Ruins",
      description: "Design & Development",
      imgUrl: img22,
    },
    {
      title: "Anime Witch on a Broomstick at the Beach",
      description: "Design & Development",
      imgUrl: img23,
    },
    {
      title: "Cyberpunk Anime Character Portrait",
      description: "Design & Development",
      imgUrl: img24,
    },
    {
      title: "Person Relaxing in Water Reflected in Wine Glass",
      description: "Design & Development",
      imgUrl: img25,
    },
    {
      title: "Cartoon Chess Game at Ancient Ruins",
      description: "Design & Development",
      imgUrl: img26,
    },
    {
      title: "Woman Overlooking Istanbul from Four Seasons Hotel",
      description: "Design & Development",
      imgUrl: img27,
    },
    {
      title: " Cyberpunk Billie Eilish Cartoon",
      description: "Design & Development",
      imgUrl: img28,
    },
    {
      title: "Anime Witch on Broomstick at Beach",
      description: "Design & Development",
      imgUrl: img29,
    },
    {
      title: "Illustration Inspired by 'Lagaan'",
      description: "Design & Development",
      imgUrl: img30,
    },
    {
      title: " Cyberpunk Anime Character with Sword",
      description: "Design & Development",
      imgUrl: img31,
    },
    {
      title: "Cartoon of Goddess Durga",
      description: "Design & Development",
      imgUrl: img32,
    },
  ];

  const projects1 = [
    {
      title: "Statue of Liberty Playing Tennis",
      imgUrl: img33,
    },
    {
      title: "Deadpool and Wolverine Face-Off",
      imgUrl: img34,
    },
    {
      title: "Cartoon of a Man Flying a Kite in Istanbul",
      imgUrl: img35,
    },
    {
      title: "Cartoon of Ganesha Playing the Flute",
      imgUrl: img36,
    },
    {
      title: "Cartoon of a Vegetable Vendor",
      imgUrl: img37,
    },
    {
      title: "Cartoon of Goddess Saraswati Playing Veena",
      imgUrl: img38,
    },
    {
      title: "Cartoon of Rama",
      imgUrl: img39,
    },
    {
      title: "Cartoon Dragon in California",
      imgUrl: img40,
    },
    {
      title: "Animated Scene of Kolkata",
      imgUrl: img41,
    },
    {
      title: "Cartoon Football Player",
      imgUrl: img42,
    },
    {
      title: "Hanumankind Big Dawgs",
      imgUrl: img43,
    },
    {
      title: "Content Cop Art",
      imgUrl: img44,
    },
    {
      title: "Back Where You Belong, Vettriano, Eiffel Tower",
      imgUrl: img45,
    },
    {
      title: "Luffy at the Beach",
      imgUrl: img46,
    },
    {
      title: "Animasi Masyarakat Sejahtera",
      imgUrl: img47,
    },
    {
      title: "Tron Akira",
      imgUrl: img48,
    },
    {
      title: "Radio Jockey Cartoon",
      imgUrl: img49,
    },
    {
      title: "Logic Anime Wallpaper",
      imgUrl: img50,
    },
    {
      title: "Louvre Pyramid Badminton",
      imgUrl: img51,
    },
    {
      title: "Felt Kitchen",
      imgUrl: img52,
    },
    {
      title: " Cartoon Dog and People Looking at Colorful Birds",
      imgUrl: img53,
    },
    {
      title: " Man Yawning in a Pink Flower",
      imgUrl: img54,
    },
    {
      title: " Red Sci-Fi Robot Character",
      imgUrl: img55,
    },
    {
      title: "Animated Cycle Rickshaw",
      imgUrl: img56,
    },
    {
      title: "Space Girl with Cultural Items",
      imgUrl: img57,
    },
    {
      title: "Vector Portrait of Hrithik Roshan",
      imgUrl: img58,
    },
    {
      title: "Cartoon Ganesha and Mouse on Hooghly River with Howrah Bridge",
      imgUrl: img59,
    },
    {
      title: "Cartoon Wrestlers Above Paris",
      imgUrl: img60,
    },
    {
      title: "Trumpet Player at an Ancient Site",
      imgUrl: img61,
    },
    {
      title: "Minion Bollard",
      imgUrl: img62,
    },
  ];
  
  const projects3 = [
    {
      title: "The Artisan's Craft",
      imgUrl: img104,
    },
    {
      title: "Sindhutai Sapkal Pencil Sketch",
      imgUrl: img101,
    },
    {
      title: " Portrait of Rabindranath Tagore",
      imgUrl: img103,
    },
    {
      title: "Filipino Digital Artist",
      imgUrl: img100,
    },
    {
      title: "Car Launching in Istanbul",
      imgUrl: img90,
    },
    {
      title: "Flying Car in India",
      imgUrl: img92,
    },
    {
      title: "Old Gypsy Woman Drawing",
      imgUrl: img89,
    },
    {
      title: "The Girl with the Pearl Earring",
      imgUrl: img87,
    },
    {
      title: "Aquarium Fiber Skull",
      imgUrl: img88,
    },
    {
      title: "Face Cast Art",
      imgUrl: img86,
    },
    {
      title: "Face sculpting",
      imgUrl: img84,
    },
    {
      title: "Clay Statue Making",
      imgUrl: img83,
    },
    {
      title: "Kitsune Cyberpunk Woman",
      imgUrl: img82,
    },
    {
      title: "Cartoon Onsen",
      imgUrl: img81,
    },
    {
      title: "Lo-Fi Girl Drawing Fan Art",
      imgUrl: img80,
    },
    {
      title: "Ratan Tata Vector Art Portrait",
      imgUrl: img79,
    },
    {
      title: "Man on a Royal Enfield Motorcycle",
      imgUrl: img78,
    },
    {
      title: "Captain Miller",
      imgUrl: img76,
    },
    {
      title: "Bee Boy Collecting Honey",
      imgUrl: img75,
    },
    {
      title: "Line Art Portrait of Thirumavalavan",
      imgUrl: img74,
    },
    {
      title: "African Mother and Baby",
      imgUrl: img73,
    },
    {
      title: "Shattered Memories",
      imgUrl: img111,
    },
    {
      title: "Dual Divinity",
      imgUrl: img112,
    },
    {
      title: "The Crowned Athlete",
      imgUrl: img113,
    },
    {
      title: "Confident She-Hulk",
      imgUrl: img114,
    },
    {
      title: "peeking Gwen Stacy",
      imgUrl: img115,
    },
    {
      title: "Robot Delivery",
      imgUrl: img116,
    },
    {
      title: "Modern Goddess ",
      imgUrl: img117,
    },
    {
      title: "Distinguished Duo",
      imgUrl: img118,
    },
    {
      title: "Pokémon Trainers and Pals",
      imgUrl: img119,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
