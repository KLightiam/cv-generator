import { Fragment, useState } from "react";
import "../styles/AddForm.css";

export default function AddForm() {
  const [countEdu, setCountEdu] = useState(["edu"]);
  const [countExp, setCountExp] = useState(["exp"]);

  const [fullname, setFullname] = useState("");
  const [occupation, setOccupation] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [languages, setLanguages] = useState("");
  const [profile, setProfile] = useState("");

  const [degName, setDegName] = useState({});
  const [school, setSchool] = useState({});
  const [schPeriod, setSchPeriod] = useState({});

  const [company, setCompany] = useState({});
  const [wkPeriod, setWkPeriod] = useState({});
  const [duties, setDuties] = useState({});

  function addEdu() {
    setCountEdu([...countEdu, "edu"]);
  }

  function addExp() {
    setCountExp([...countExp, "exp"]);
  }

  function getFullname(e) {
    setFullname(e.target.value);
  }

  function getOccupation(e) {
    setOccupation(e.target.value);
  }
  return (
    <>
      <div className="form">
        <div className="contact">
          <fieldset>
            <legend>CONTACT</legend>
            <div className="fullname">
              <label htmlFor="fullname">Full Name</label>
              <br />
              <input
                type="text"
                name="fullname"
                id="fullname"
                onChange={getFullname}
              />
            </div>
            <div className="occupation">
              <label htmlFor="occupation">Occupation</label>
              <br />
              <input
                type="text"
                name="occupation"
                id="occupation"
                onChange={getOccupation}
              />
            </div>
            <div className="tel">
              <label htmlFor="tel">Telephone</label>
              <br />
              <input
                type="tel"
                name="tel"
                id="tel"
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="website">
              <label htmlFor="website">Website</label>
              <br />
              <input
                type="url"
                name="website"
                id="website"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="map">
              <label htmlFor="map">Location</label>
              <br />
              <input
                type="text"
                name="map"
                id="map"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </fieldset>
        </div>
        <div className="skills">
          <fieldset>
            <legend>SKILLS</legend>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={(e) => setSkills(e.target.value)}
            ></textarea>
            <br />
          </fieldset>
        </div>
        <div className="education">
          <fieldset>
            <legend>Education</legend>
            <div className="edudetails">
              {countEdu.map((schooldetails, index) => (
                <Fragment key={index}>
                  <label htmlFor="degreeName">Degree Name</label>
                  <br />
                  <input
                    type="text"
                    name="degreeName"
                    id="degreeName"
                    onChange={(e) =>
                      setDegName({ ...degName, [index]: e.target.value })
                    }
                  />
                  <br />
                  <label htmlFor="institution">Institution Name</label>
                  <br />
                  <input
                    type="text"
                    name="institution"
                    id="institution"
                    onChange={(e) =>
                      setSchool({ ...school, [index]: e.target.value })
                    }
                  />
                  <br />
                  <label htmlFor="period">Period</label>
                  <br />
                  <input
                    type="text"
                    name="period"
                    id="period"
                    placeholder="eg. 2015 - 2019"
                    onChange={(e) =>
                      setSchPeriod({ ...schPeriod, [index]: e.target.value })
                    }
                  />
                  <br />
                  <br />
                  <br />
                </Fragment>
              ))}
            </div>
            <button type="button" onClick={addEdu}>
              Add Another School
            </button>
          </fieldset>
        </div>
        <div className="lang">
          <fieldset>
            <legend>Languages</legend>
            <textarea
              name="lang"
              id="lang"
              cols="30"
              rows="10"
              placeholder="eg. English, French"
              onChange={(e) => setLanguages(e.target.value)}
            ></textarea>
          </fieldset>
        </div>
        <div className="profile">
          <fieldset>
            <legend>Profile</legend>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={(e) => setProfile(e.target.value)}
            ></textarea>
          </fieldset>
        </div>
        <div className="work">
          <fieldset>
            <legend>Work Experience</legend>
            {countExp.map((exp, index) => (
              <div key={index}>
                <label htmlFor="company">Company</label>
                <br />
                <input
                  type="text"
                  name="company"
                  id="company"
                  onChange={(e) =>
                    setCompany({ ...company, [index]: e.target.value })
                  }
                />
                <br />
                <label htmlFor="Wkperiod">Period</label>
                <br />
                <input
                  type="text"
                  name="Wkperiod"
                  id="Wkperiod"
                  onChange={(e) =>
                    setWkPeriod({ ...wkPeriod, [index]: e.target.value })
                  }
                />
                <br />
                <label htmlFor="duties">Responsibilities</label>
                <br />
                <textarea
                  name="duties"
                  id="duties"
                  cols="30"
                  rows="10"
                  onChange={(e) =>
                    setDuties({ ...duties, [index]: e.target.value })
                  }
                ></textarea>
                <br />
                <br />
              </div>
            ))}
            <button onClick={addExp}>Add Experience</button>
          </fieldset>
        </div>
      </div>
      <div className="cv">
        <header>
          <div className="name">{fullname}</div>
          <div className="profession">{occupation}</div>
        </header>
        <aside>
          <div className="contact">
            <h2>CONTACT</h2>
            {telephone} <br />
            {email} <br />
            {website} <br />
            {location}
          </div>
          <div className="skills">
            <h2>SKILLS</h2>
            {skills}
          </div>
          <div className="education">
            <h2>EDUCATION</h2>
            {countEdu.map((edu, index) => (
              <div className="ed">
                <h3 className="degName">{degName[index]}</h3>
                <h4 className="school">{school[index]}</h4>
                <p className="period">{schPeriod[index]}</p>
              </div>
            ))}
          </div>
          <div className="languages">
            <h2>LANGUAGES</h2>
            {languages}
          </div>
        </aside>
        <main>
          <div className="profile">
            <h2>PROFILE</h2>
            {profile}
          </div>
          <div className="wkExp">
            <h2>WORK EXPERIENCE</h2>
            {countExp.map((exp, index) => (
              <div key={index}>
                <h2 className="company">{company[index]}</h2>
                <h3 className="period">{wkPeriod[index]}</h3>
                <p className="duties">{duties[index]}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
