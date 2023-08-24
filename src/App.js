import "./App.scss";
import "./Mobile.scss";
import { logo } from "./photos";
import { tel } from "./photos";
import { syze } from "./photos";
import { ora2} from "./photos";
import { qesh} from "./photos";
import { dizanji2} from "./photos";
import { dizanji} from "./photos";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons'
import { faPenFancy } from '@fortawesome/free-solid-svg-icons'
import { Search } from "./Icons/Search";


export const App = () => {
  return (
    <div className="container">
      <div className="header">
      <div className="imazh">
        <img src={logo} alt="test"  height={'50px'}/>
      </div>
        <div className="phead">Te mesohemi me React</div>
      </div>
      <div className="ora">
        <div className="pora">
          <div className="pora1">Building bulletproof apps</div>
          <div className="pora2">
            Kickstarter umami Intelligentsia kogi. Try-hard flannel literally,
            chambray blog crucifix put a bird on it four dollar toast cardigan
            scenester aesthetic sartorial chia messenger bag Pinterest. 3 wolf
            moon Thundercats Banksy paleo, yr four loko Shoreditch dreamcatcher.
          </div>
        </div>
      </div>
      <section className="sec2">
        <div className="cont1">
          <h2 className="hd2">Super Duper & such</h2>
          <p className="thd2">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
          <button href="#" class="btn">See More</button>
        </div>
        <div className="cont2">
        <img className = "tel" src={tel} alt="tel"/>
        </div>
      </section>
      <section className="sec3">

    <div className="benefits"> 
        <h3 className="title"> Design & Features </h3>
        <h5 className="description1">Flannel ennui narwhal, craft beer twee Vice plaid authentic synth.</h5>
        <p className="description2">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        <button href="#" class="btn">See More</button>
    </div>
    <div className="benefits"> 
        <h3 className="title"> Design & Features </h3>
        <h5 className="description1">Flannel ennui narwhal, craft beer twee Vice plaid authentic synth.</h5>
        <p className="description2">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        <button href="#" class="btn">See More</button>
    </div>
    <div className="benefits"> 
        <h3 className="title"> Design & Features </h3>
        <h5 className="description1">Flannel ennui narwhal, craft beer twee Vice plaid authentic synth.</h5>
        <p className="description2">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        <button href="#" class="btn">See More</button>
    </div>
</section>
<section className="sec4">
<div className="benefits"> 
<p className="description1"> Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
<h2 className="title"> Designed for humans </h2>
</div> 
<div className="imazh">
        <img className= "syze" src={syze} alt="test"/>
      </div>
</section>

<section className="sec5">

    <div className="services"> 
    <FontAwesomeIcon icon={faPen} size="2xl" color="#3dd2ae" />
        <h4 class="title"> 01 Design </h4>
        <p class="description">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
    </div>

    <div className="services"> 
    <FontAwesomeIcon icon={faPersonChalkboard} size="2xl" color="#3dd2ae" />
        <h4 class="title"> 02 Refinement </h4>
        <p class="description">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
    </div>

    <div className="services"> 
    <FontAwesomeIcon icon={faPenFancy} size="2xl" color="#3dd2ae" />
        <h4 class="title"> 03 Dive in </h4>
        <p class="description">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
    </div>
    <div className="services"> 
    <Search width={'30px'}  height={'30px'} fill={'#3dd2ae'}/>
        <h4 class="title"> 04 Research</h4>
        <p class="description">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
    </div>

    </section>

    <section className="sec6">
      <div className="cont">
<div className="benefits"> 
<h2 className="title">Conectivity</h2>
<h5 className="description1"> Flannel ennui narwhal, craft beer twee Vice plaid authentic synth Intelligentsia stumptown gluten-free drinking vinegar Schlitz mixtape.</h5>
<p className="description2"> Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
</div> 
</div>
<div className="imazh">
        <img className= "ora2" src={ora2} alt="test"/>
      </div>

</section>

<section className="sec7">
<div className="imazh">
        <img className= "dizanji2" src={dizanji2} alt="test"/>
      </div>
      <div className="benefits"> 
<div className="title">12th June 2023</div>
<h2 className="description2"> Lorem ipsum dolor sit amet, cotur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h2>
<img className= "qesh" src={qesh} alt="test"/>
<p>Irma Hodges</p>
</div> 

</section>

<section className="sec8">
<div className="cont">
      <div className="benefits"> 
<h3>See our awesome gallery</h3>
<h5>Flannel ennui narwhal, craft beer twee Vice plaid authentic synth Intelligentsia stumptown gluten-free drinking vinegar Schlitz mixtape.</h5>
<p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
</div> 
</div>
<div className="imazh">
        <img className= "dizanji" src={dizanji} alt="test"/>
      </div>
</section>


<section className="sec9">
        <div className="shkruaj">
          <h2>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </h2>
        </div>
      </section>
      <footer className="footer">
      <a href="#" className="link">Template</a> <p>created by</p> <a href="#" className="link"> Klejdi </a>
      </footer>
</div>
  );
};
