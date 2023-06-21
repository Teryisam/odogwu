import './index.css';
import Landing from './Landing';
import videoBg from './videoBg.mp4'
import pic1 from './1932042689-shutterstock-1932042690.jpg';
import pic2 from './banker-job-description-4088x2725-20201113.jpeg';
import pic3 from './banking-technology-concept-cropped.jpg';
import pic4 from './gettyimages-1063751274_1200xx2121-1193-0-111.jpg';
import Background from './Background';
import Sliding from './Sliding.jsx';
import Working from './Working';


function App() {
  return (
    <div>

      
      <div className="overlay"></div>
      <Sliding />
      {/* <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content"> */}
        <Landing className="content"/>
      {/* </div> */}
    </div>
  );
}

export default App;
