import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor of about is callsed");
  }

  componentDidMount() {
    console.log("componentDidMount of about is callsed");
  }
  render() {
    console.log("render of about is callsed");
    return (
      <div className="about">
        <h2>About User:</h2>
        <User name={"Pradeep Kumar"} />
        <UserClass name={"Mahika Mehta"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about">
//       <h2>About User:</h2>
//       <User name={"Pradeep Kumar"} />
//       <UserClass name={"Mahika Mehta"} />
//     </div>
//   );
// };

export default About;
