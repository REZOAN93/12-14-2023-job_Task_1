import SayHi from "../Shared/Button/SayHi";
import UpPage from "../UpPage/UpPage";
import './About.css'

const About = () => {
    return (
        <div>
            <div className="aboutContainer">
                <div>
                    <figure>
                        <img style={{ height: "450px" }} src="https://i.ibb.co/Z2ws9Sv/sample-Copy-removebg-preview.png" alt="" />
                    </figure>
                </div>
                <div>
                    <h1 className="title">Say hello!</h1>
                    <p className="description">I'd love to hear from you and always <br /> welcome any feedback -Please don't <br />hesitate to get in touch!</p>
                    <SayHi></SayHi>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: 'end', paddingRight: '30px', paddingBottom: '20px' }}>
                <UpPage></UpPage>
            </div>
        </div>
    );
};

export default About;