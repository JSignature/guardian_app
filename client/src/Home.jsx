import { React, useState } from 'react';
import './Home.css';
import SignUpModal from './components/modals/SignUpModal';
import SignInModal from './components/modals/SignInModal';
import { Btn } from './components/styles/ButtonStyle';
import logo2 from './components/styles/logo2.png';

const Home = () => {
  const [signUpIsOpen, setSignUpIsOpen] = useState(false);
  const [signInIsOpen, setSignInIsOpen] = useState(false);

  return (
    <div>
      <div class="navHome">
        <ul>
          <li>Logo</li>
        </ul>

        <div class="sign">
          <div>
            <SignUpModal
              modalIsOpen={signUpIsOpen}
              setModalIsOpen={setSignUpIsOpen}
            />
            <Btn onClick={() => setSignUpIsOpen(true)}>Sign Up</Btn>
          </div>
          <div>
            <SignInModal
              modalIsOpen={signInIsOpen}
              setModalIsOpen={setSignInIsOpen}
            />
            <Btn onClick={() => setSignInIsOpen(true)}>Sign In</Btn>
          </div>
        </div>
      </div>
      <h1>Guardian App</h1>
      <div class="hero_image_1">
        <h2 class="block_text">
          World's #1 <br /> Daycare
          <br /> App
        </h2>
        <img
          class="block_img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvKPHIuMH9Uj2LEw8DpQhsvjqocClF7CyYsw&usqp=CAU"
          alt=""
        />
      </div>
      <div class="hero_image_2">
        <img
          class="block_img"
          src="https://blog.bonsecours.com/wp-content/uploads/2021/01/Limiting-Screen-Time_1200x628-1.jpg"
          alt=""
        />
        <p class="block_text_2">
          Easy to learn with just a few clicks of a button, you will have your
          App up and running <br />
          faster than a toddler chasing the ice cream man. Our easy to use
          interface is designed to <br />
          bequick reacting and responsive even on your busiest daycare days. We
          understand Lorem ipsum dolor <br /> sit amet consectetur, adipisicing
          elit. Molestiae at numquam vitae animi aut. Officiis aut tempore{' '}
          <br />
          distinctio fugit voluptatibus provident placeat vel esse?
          Exercitationem omnis iste culpa fugit dolor?
        </p>
      </div>
      <div class="hero_image_3">
        <h4 class="block_text_3">
          Daycare teachers and parents
          <br />
          love our activity tracking feature!!
        </h4>
        <img
          class="block_img"
          src="https://images.squarespace-cdn.com/content/v1/5cf67eec7f82570001a1b780/1610291778195-UJB45GEYNV26QDEXLWVA/happy-smiling-hispanic-preschool-teacher.jpg?format=1000w"
          alt=""
        />
      </div>

      <div class="pricing_boxes">
        <div class="price_box_1">
          {' '}
          <h3>BASIC</h3>
          <ul>
            <li>Parent contacts</li>
            <li>Activity Center</li>
            <li>Link to Quickbooks</li>
            <li>Up to 5 Users</li>
            <li>Syncs to Google Calendar</li>
            <li>Texting Compatability</li>
          </ul>
        </div>
        <div class="price_box_2">
          <h3> MOST POPULAR</h3>
        </div>
        <div class="price_box_3">
          {' '}
          <h3>ENTERPRISE</h3>
        </div>
      </div>

      <h2 class="review_text">See what people are saying about us!</h2>
    </div>
  );
};

export default Home;
