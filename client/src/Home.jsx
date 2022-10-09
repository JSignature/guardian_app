import { React, useState } from 'react'
import './Home.css'
import SignUpModal from './components/modals/SignUpModal'
import SignInModal from './components/modals/SignInModal'
import { Btn } from './components/styles/ButtonStyle'
import logo2 from './components/styles/logo2.png'

const Home = () => {
  const [signUpIsOpen, setSignUpIsOpen] = useState(false)
  const [signInIsOpen, setSignInIsOpen] = useState(false)

  return (
    <div>
      <div class="navHome">
        <div className="navLogo">
          <img src={logo2} alt="picture of company logo" />
        </div>

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
          alt="picture of kid playing"
        />
      </div>
      <div class="hero_image_2">
        <img
          class="block_img"
          src="https://blog.bonsecours.com/wp-content/uploads/2021/01/Limiting-Screen-Time_1200x628-1.jpg"
          alt="picture of kid on computer"
        />
        <p class="block_text_2">
          Easy to learn with just a few clicks of a button, you will have your
          App up and running <br />
          faster than a toddler chasing the ice cream man. Our easy to use
          interface is designed to <br />
          be quick reacting and responsive even on your busiest daycare days.
          Log kid's actvities minute <br /> by minute and never lose track of
          who was fed last, who is missed a nap, or how long outdoor <br /> play
          lasted! No child will fly under your radar with this specially
          designed kid tracker app.
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
          alt="picture of teacher"
        />
      </div>

      <div class="pricing_boxes">
        <div class="price_box_1">
          <h3>BASIC</h3>
          <h4>$19.99 a month</h4>
          <ul>
            <li>Parent contacts</li>
            <li>Activity Dashboard</li>
            <li>Link to Quickbooks</li>
            <li>Up to 5 Users</li>
            <li>Syncs to Google </li>
            <li>Texting </li>
          </ul>
        </div>
        <div class="price_box_2">
          <h3> MOST POPULAR</h3>
          <h4>$39.99 a month</h4>
          <ul>
            <li>Parent contacts</li>
            <li>Activity Center</li>
            <li>Link to Quickbooks</li>
            <li>Up to 10 Users</li>
            <li>Syncs to Google </li>
            <li>Texting</li>
          </ul>
        </div>
        <div class="price_box_3">
          <h3>ENTERPRISE</h3>
          <h4>$69.99 a month</h4>
          <ul>
            <li>Parent contacts</li>
            <li>Activity Center</li>
            <li>Link to Quickbooks</li>
            <li>Unlimited Users</li>
            <li>Syncs to Google</li>
            <li>Texting </li>
          </ul>
        </div>
      </div>

      <h2 class="review_text">Try our free 30 day trial!</h2>
    </div>
  )
}

export default Home
