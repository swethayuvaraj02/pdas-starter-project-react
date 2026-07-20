import "bulma/css/bulma.css";
import ProfileCard from "./Profilecard";

import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Personal Digital Assistants</h1>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">

            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa is a virtual assistant created by Amazon for the Amazon Echo and Amazon Echo Dot smart speakers."
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana is a virtual assistant created by Microsoft."
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri is a virtual assistant created by Apple."
              />
            </div>

          </div>
        </section>
      </div>
    </>
  );
}

export default App;