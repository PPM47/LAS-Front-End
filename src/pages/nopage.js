
import "../styles/component.css";
import "../styles/layout.css";
import Welcom from '../png/66_generated.png';
export default function NoPage() {
    return (
      <>
        <div className="welcome-user">
          <div className="welcom-img-con">
            <img className="welcom-img" src={Welcom} alt="" />
          </div>
          <h1>Welcome Admin</h1>
          
         
        </div>
      </>
    );
  }