import React from "react";
import heed from "../../assets/images/WAW_female.png";
import abt from "../../assets/images/abt.png";
import back from "../../assets/images/about_image_back.png";
import front from "../../assets/images/about_image_front.png";
import ab from "../../assets/images/ab.png";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="abt_1">
        <div class="about-us-section">
          <img src={abt} alt="Traditional attire" class="background-image" />
          <div class="text-overlay">
            <h1>ABOUT US</h1>
          </div>
        </div>
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Lorem Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Justo a pulvinar
                  mattis elit duis convallis faucibus. Dui ultrices nisl
                  ultrices nunc ultrices ut, cras viverra ut odio neque nulla
                  diam. Sagittis cursus cursus pellentesque mauris eu mauris
                  risus fermentum bibendum.
                </p>
                <p className="mt-4">
                  Sed tellus in in purus a phasellus laoreet lobortis. Morbi
                  facilisis ullamcorper sed sit a sagittis justo. At a sit neque
                  fermentum viverra non ut libero.
                </p>
              </div>
              <div className="w-full">
                <img
                  src={back}
                  alt="Back side dress"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="w-full">
                <img
                  src={front}
                  alt="Front side dress"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-4">Our Vision</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vui cursus lectus
                  sodales ultricies faucibus. Aliquam leo et tortor fermentum
                  justo posuere magna. A dui nulla aliquam commodo molestie
                  metus. Sed facilisis fringilla iaculis sit condimentum pretium
                  est.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="py-12 px-4 md:px-12 lg:px-24">
          <div className="max-w-1xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="text-left">
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur. Sapien augue urna
                aliquet vulputate. Libero lacus et tincidunt etiam imperdiet
                libero amet nec nisl. Commodo adipiscing malesuada dictum et
                tortor metus eu et. In tempor velit bibendum orci tristique nisi
                facilisi. Viverra vulputate sit sit elementum varius in
                ullamcorper.
              </p>
              <p className="mb-8">
                Nulla facilisi nibh convallis vulputate sit nisl turpis. Tempus
                morbi lectus sed id sit fusce nisl. Mi lacus neque convallis ac
                risus sed ullamcorper. Adipiscing metus metus imperdiet platea
                posuere habitant adipiscing. Tristique diam elementum nam nec
                non est. Semper amet pulvinar non sodales nulla morbi.
              </p>
            </div>
            <div className="mt-6">
              <img
                src={ab}
                alt="Who We Are"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </section>
        <div className="h-[200px] bg-[#e87a00] "></div>
      </div>
    </>
  );
};

export default About;
