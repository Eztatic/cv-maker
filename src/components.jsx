import { useState } from 'react';
import { FaGithub,  FaLinkedin } from "react-icons/fa";
import { MdEmail, MdOutlinePhone, MdLocationPin } from "react-icons/md";
import './components.css';

function ProfileSection() {
      const info = {
            fullName: 'Elliot Alderson',
            profession: 'Cybersecurity Engineer',
            email: 'mrRobot@mail.com',
            number: '123-456-7890',
            location: 'San Francisco, CA',
            linkedIn: '',
            github: ''
      }

      const [editStatus, setEditStatus] = useState(false);
      const [profileInfo, setProfileInfo] = useState(info);

      const showEditProfile = (e) => {
            e.target.classList.toggle('no-click');
            setEditStatus(true);
      }

      const editValues = (e) => {
            const {name, value} = e.target;
            setProfileInfo((prev) => ({...prev, [name]: value}));
      }

      return (
            <>
                  <Profile information={profileInfo} editHandler={showEditProfile} />
                  {editStatus ? <EditProfile information={profileInfo} updateValue={editValues} /> : null}
            </>
      );
}

function Profile({information, editHandler}) {

      return (
            <section className="profile-section">
                  <button className="edit-profile" onClick={editHandler}>Edit</button>
                  <h1>{information.fullName}</h1>
                  <h2>{information.profession}</h2>
                  <div className="profile-links">
                        <a href="#">
                              <MdEmail className='icon'/> {information.email}
                        </a>
                        <a href="#">
                              <MdOutlinePhone className='icon'/> {information.number}
                        </a>
                        <a href="#">
                              <MdLocationPin />
                              {information.location}
                        </a>
                        <a href={information.linkedIn}>
                              <FaLinkedin /> LinkedIn
                        </a>
                        <a href={information.github}>
                              <FaGithub /> Github
                        </a>
                  </div>
            </section>
      );
}

function EditProfile({information, updateValue}) {
      return (
            <section className='edit-profile-section'>
                  <h2>Profile Editor</h2>
                  <form action="#">
                        <div>
                              <label htmlFor="full-name">Full Name:</label>
                              <input type="text" 
                                    name="fullName" 
                                    id="full-name"
                                    placeholder={information.fullName} 
                                    onChange={updateValue} />
                        </div>
                        <div>
                              <label htmlFor="profession">Profession:</label>
                              <input type="text" 
                                    name="profession" 
                                    id="profession" 
                                    placeholder={information.profession}
                                    onChange={updateValue} />
                        </div>
                        <div>
                              <label htmlFor="email">Email:</label>
                              <input type="email" 
                                    name="email" 
                                    id="email" 
                                    autoComplete='email'
                                    placeholder={information.email}
                                    onChange={updateValue} />
                        </div>
                        <div>
                              <label htmlFor="phone-number">Phone Number:</label>
                              <input type="tel" 
                                    name="number" 
                                    id="phone-number" 
                                    placeholder={information.number} 
                                    onChange={updateValue}/>
                        </div>
                        <div>
                              <label htmlFor="location">Location:</label>
                              <input type="text" 
                                    name="location" 
                                    id="location" 
                                    placeholder={information.location} 
                                    onChange={updateValue} />
                        </div>
                        <div>
                              <label htmlFor="linkedin-account">LinkedIn Account:</label>
                              <input type="text" 
                                    name="linkedIn" 
                                    id="linkedin-account"
                                    placeholder={information.linkedIn} 
                                    onChange={updateValue} />
                        </div>
                        <div>
                              <label htmlFor="github-account">GitHub Account:</label>
                              <input type="text" 
                                    name="github" 
                                    id="github-account" 
                                    placeholder={information.github}
                                    onChange={updateValue} />
                        </div>                                                
                  </form>
                  <div className="button-group">
                              <button className="cancel">Cancel</button>
                              <button className="save">Save</button>
                  </div>
            </section>
      );
}

export {
      Profile,
      EditProfile,
      ProfileSection,     
}