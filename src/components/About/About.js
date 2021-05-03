import React from 'react';
import imgAboutUs from '../../assets/images/img-about-us.png';
import imgMealPlanner from '../../assets/images/img-meal-planner.png';
import Separator from '../Layout/Separator';

const About = function () {
  return (
    <div className="about-component">
      <section className="section-about">
        <h2 className="section-title">About Us</h2>
        <div className="row">
          <div className="col-md-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </div>
          <div className="col-md-5">
            <div class="section-image">
              <img src={imgAboutUs} alt="fruits" />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className="section-meal-planner">
        <h2 className="section-title">How The Meal Planner Works</h2>
        <div className="row">
          <div className="col-md-7">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.Lorem
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          <div className="col-md-5">
            <div className="meal-planner-imgtext">
              <div className="meal-planner-img">
                <img src={imgMealPlanner} alt="calendar icon" />
              </div>
              <h4 className="meal-planner-txt">Create Your Meal Planner</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
