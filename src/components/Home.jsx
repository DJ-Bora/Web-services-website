import React from 'react';
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
 

const Home = () => {
  return (
    <>
      <div className="home" id='home'>
        <main>
          <h1>My Web</h1>
          <p>Solution to all problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt='Graphics' />

        <div>
          <p>
            We are your one and only solution to the tech problems
            you face
            everyday. We are leading tech company whose aim is to increase the problem solving ability in children.
          </p>
        </div>

      </div>


      <div className='home3' id='about'>
    <div>
      <h1>Who we are?</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quis dolor, voluptatem placeat atque necessitatibus ducimus, 
        architecto doloribus quia maxime nulla ex? Deleniti dolores laboriosam odit officia obcaecati 
        voluptatum consequuntur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, fugit. 
        Est quas quibusdam voluptatibus quisquam possimus nostrum perspiciatis, nam ut ex vitae molestias 
        quia odit. Fugiat rem blanditiis incidunt voluptate?</p>
    </div>
      </div>

      <div className='home4' id='brands'>
        <div>
          <h1>Brands</h1>

          <article>
            
            <div style={{
              animationDelay:"0.3s"
            }}
            >
              <AiFillGoogleCircle />
            <p>Google</p>
            </div>

            <div style={{
              animationDelay:"0.5s"
            }}
            >
              <AiFillAmazonCircle />
            <p>Amazom</p>
            </div>

            <div style={{
              animationDelay:"0.7s"
            }}
            >
              <AiFillYoutube />
            <p>Youtube</p>
            </div>

            <div style={{
              animationDelay:"1s"
            }}
            >
              <AiFillInstagram />
            <p>Instagram</p>
            </div>
            
          </article>
        </div>
      </div>
    </>
  )
}

export default Home