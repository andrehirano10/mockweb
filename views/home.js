import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import SpeakerCard from '../components/speaker-card'
import NumbersCard from '../components/numbers-card'
import EventCard from '../components/event-card'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Yodo1</title>
        <meta property="og:title" content="Yodo1" />
      </Helmet>
      <Navigation rootClassName="navigation-root-class-name"></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <img
                src="/playground_assets/picturebro-400h.jpg"
                alt="image"
                className="home-image"
              />
              <h1 className="home-text">
                On a mission to collaborate with global studios. connect with
                our team to leverage your studios growth.
              </h1>
              <span className="home-text01">
                A community of over 1.5 billion gamers strong.
              </span>
              <div className="home-btns-container">
                <button className="home-primary button-primary button-lg button">
                  Access your account
                </button>
                <button className="button button-outline button-lg-border">
                  learn more
                </button>
              </div>
            </div>
            <div className="home-video-container">
              <img
                src="/playground_assets/conference-700w.jpeg"
                alt="image"
                className="home-image01"
              />
            </div>
          </div>
          <div className="home-blue-background"></div>
        </div>
        <div className="home-sponsors section-container">
          <div className="home-max-width1 max-content-container">
            <span className="home-text02">
              <span></span>
              <span>
                proudly partnered with
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="home-container1">
              <img
                alt="image"
                src="/playground_assets/group%207-1200w.png"
                className="home-image02"
              />
              <img
                alt="image"
                src="/playground_assets/unitylogo-1200w.webp"
                className="home-image03"
              />
              <img
                alt="image"
                src="/playground_assets/oip%20%5B3%5D-1200w.jpg"
                className="home-image04"
              />
              <img
                alt="image"
                src="/playground_assets/r-1200w.jpg"
                className="home-image05"
              />
              <img
                alt="image"
                src="/playground_assets/oip%20%5B1%5D-1200w.jpg"
                className="home-image06"
              />
              <img
                alt="image"
                src="/playground_assets/group%2012-1200w.png"
                className="home-image07"
              />
            </div>
          </div>
        </div>
        <div className="home-speakers section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-heading-container">
              <span className="home-text05">
                16 speakers from 14 countries and 6 continents
              </span>
              <h1 className="home-text06 heading2">
                <span>Schedule a meeting with a member of our team</span>
                <span></span>
              </h1>
            </div>
            <div className="home-speakers-container">
              <SpeakerCard
                role="Global Partnership Manager"
                image_src="/playground_assets/1638398074928-300w.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="Head of developer experience"
                Farran="Ali"
                lastName="Shah"
                image_src="/playground_assets/ali-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="Head of Marketing"
                Farran="Riccardo "
                lastName="Russo"
                image_src="/playground_assets/riccardo-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="HEAD OF publishing"
                Farran="Felipe"
                lastName="Gomez"
                image_src="/playground_assets/felipe-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="."
                Farran="Patrick"
                lastName="daris"
                image_src="/playground_assets/patrick-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="."
                Farran="Seyi "
                lastName="Bruce"
                image_src="/playground_assets/seyi-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="."
                Farran="andre"
                lastName="hirano"
                image_src="/playground_assets/andre-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="."
                Farran="santiago"
                lastName="ramirez"
                image_src="/playground_assets/santi-300h.jpg"
              ></SpeakerCard>
            </div>
          </div>
        </div>
        <div className="home-numbers-banner section-container">
          <div className="home-container2 max-content-container">
            <div className="home-heading-container1">
              <span className="home-text09">
                leveraging the growth of our global partners
              </span>
              <h1 className="home-text10 heading2">YODO1 team</h1>
            </div>
            <div className="home-numbers-container">
              <NumbersCard
                text="years"
                number="10"
                image_src="/playground_assets/interface%20time%20reset-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="total events"
                number="64"
                image_src="/playground_assets/interface%20calendar%20favorite-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="gamers strong"
                number="1.5bn"
                image_src="/playground_assets/shopping%20bag%20suit%20case-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="countries"
                number="16"
                image_src="/playground_assets/travel%20map%20location%20pin-200h.png"
              ></NumbersCard>
            </div>
          </div>
        </div>
        <div className="home-location">
          <img
            alt="image"
            src="/playground_assets/shanghai-1000h.jpg"
            className="home-image08"
          />
          <div className="home-content-container1 section-container">
            <div className="home-container3">
              <span className="home-text11">Shangai, China</span>
              <div className="home-container4"></div>
              <div className="home-container5">
                <span className="home-text12">
                  Headquertered in Shanghai, china
                </span>
                <span className="home-text13">
                  Yodo1 is invested in the growth and success of its global
                  partners
                </span>
                <div className="home-btns-container1">
                  <button className="button-secondary button button-md">
                    login
                  </button>
                  <button className="home-learn-more button button-outline button-md-border">
                    learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-agenda section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-heading-container2">
              <h1 className="home-text14">consult with our members</h1>
            </div>
            <div className="home-events-container">
              <div className="home-column">
                <div className="home-column-header">
                  <div className="home-line"></div>
                </div>
                <EventCard
                  text="As an essential part of your studios growth Riccardos expertise will discuss the best practices to boost the presence of your games"
                  image_src="/playground_assets/riccardo-300h.jpg"
                ></EventCard>
                <EventCard
                  text="Our head of developer experience is specialized"
                  title="Head of Developer experience"
                  image_src="/playground_assets/ali-300h.jpg"
                ></EventCard>
              </div>
              <div className="home-column1">
                <div className="home-column-header1">
                  <div className="home-line1"></div>
                </div>
                <EventCard
                  text="Outlining a path to working together with our global partners."
                  title="Head of Global Partnerships"
                  image_src="/playground_assets/1638398074928-300w.jpg"
                ></EventCard>
                <EventCard
                  text="Lear more about the roadmap to publishing"
                  title="Head of Publishing"
                  image_src="/playground_assets/felipe1-200h.jpg"
                ></EventCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-workshops">
          <div className="home-content-container2">
            <div className="home-container6">
              <h1 className="home-text15">
                From all over the world learn more about the yodo1 team
              </h1>
              <button className="button button-md button-outline">
                learn more
              </button>
            </div>
            <img
              alt="image"
              src="/playground_assets/captura%20da%20web_29-8-2022_201046_home.yodo1.com-300h.jpeg"
              className="home-image09"
            />
          </div>
        </div>
        <div className="home-previous-events section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-heading-container3">
              <h1 className="home-text16 heading2">
                Yodo1 - 10 years of mobile gaming
              </h1>
            </div>
          </div>
        </div>
      </main>
      <img
        src="/playground_assets/picturebro-400h.jpg"
        alt="image"
        className="home-image10"
      />
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
