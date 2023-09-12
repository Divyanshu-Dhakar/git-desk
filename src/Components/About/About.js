import React from 'react'
import imgabout from '../../Images/img3.jpeg'
import './About.css'

const About = () => {
  return (
    <div>
      <div className="about-us" id="About">
  <div className="aboutright">
    <img src={imgabout} />
  </div>
  <div className="aboutleft">
    <h1>How Can we <span>help you?</span></h1>
    <p>
      Unleash your brand's full potential with Jeevan Productions! Our
      passionate team of creatives transforms businesses into remarkable brands
      through compelling narratives and visually stunning content. We understand
      the art of storytelling and its impact on brand perception, collaborating
      closely with clients to align every aspect with their vision and values.
      Offering a comprehensive range of services such as brand strategy, lphotography, videography, social media marketing, and video production, etc. we tailor
      solutions to meet specific needs. Stand out in a crowded market, connect
      with your target audience on a deeper level, and elevate your brand with
      our years of industry experience.
    </p>
    <br />
    <p>
      <span>
        Passion | Brand Empowerment | Collaborative Approach | Extensive
        Experience | Comprehensive Services | Results-Driven</span>
        <br/>
        <br/>
    </p>
<button><a target='_blank' href="https://www.instagram.com/jeevan_productions/">
         <div><i className="fa-brands fa-instagram color-white" /></div> 
        <div>Know more About Jeevan</div></a></button>

  </div>
</div>

    </div>
  )
}

export default About
