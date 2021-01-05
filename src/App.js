import './App.css';
import React, {useRef, useState, useEffect} from 'react' ;
import './App.css';
let user = {
  name: "naymar",
  image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Bra-Cos_%281%29.jpg",
  description: "i like naymar"
}
let images = [ 
  {
    name: "eyes", 
    link: "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
  },
  {
    name: "sunset", 
    link: "https://static01.nyt.com/images/2019/11/05/science/28TB-SUNSET1/merlin_163473282_fe17fc6b-78b6-4cdd-b301-6f63e6ebdd7a-superJumbo.jpg"
  
  },
  {
    name: "moon" ,
    link: "https://www.nationalgeographic.com/content/dam/photography/rights-exempt/best-of-decade/best-of-the-decade-john-stanmeyer-out-of-eden.jpg"  
  },
  {
    name: "bird" ,
    link: "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
  },
  {
  name: "bridge" ,
  link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
  },
  {
    name: "bridge" ,
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
  },
  {
    name: "bridge" ,
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
  },
  {
    name: "bridge" ,
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
  },

];
const Image =({link, name})=>(
  <div className="image-container">
   <img src={link} alt={name} className="image"/>
   <div className="icon-cantainer">
    <img src="https://img.icons8.com/metro/26/000000/multiply.png" className="icon"/>
   </div>
  </div>
  
  );

const App =()=>(
  <>
    <header className="header-profile" >
      <button className="dropbtn"> انتخاب دسته بندی </button>
      <div className="profile">
         <div className="profile-text-header">
            <h1 className="title">{user.name}</h1>
            <h4 class="description description-header"> {user.description} </h4>
         </div>
      <img className="profile-image"src={user.image} />
      </div>
    </header>
    <div>
    <div className="profile-text-body">
     <h1 className="title">{user.name}</h1>
     <h4 class="description"> {user.description} </h4>
    </div>

    <div className="images">
    { images.map((image) => <Image link={image.link} name={image.name} />)}
    </div>
    </div>
    <footer className="footer">
    <button className="footer-btn"> انتشار </button>
    </footer>
   </>
)
export default App;
