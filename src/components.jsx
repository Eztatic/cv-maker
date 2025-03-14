import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
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
            linkedIn: 'https://www.linkedin.com/login',
            github: 'https://github.com/'
      }

      const [editStatus, setEditStatus] = useState(false);
      const [profileInfo, setProfileInfo] = useState(info);
      const [currentProfile, setCurrentProfile] = useState(profileInfo);

      const showEditProfile = () => {
            setEditStatus(true);
            setCurrentProfile({... profileInfo});
      }

      const cancelEditProfile = () => {
            setTimeout(() => setEditStatus(false), 250);
            setProfileInfo(currentProfile);
      }

      const saveEditProfile = () => {
            setTimeout(() => setEditStatus(false), 250);
      }

      const editValues = (e) => {
            setProfileInfo(prev => ({...prev, [e.target.name]: e.target.value}));
      }

      return (
            <>
                  <Profile information={profileInfo} 
                           editHandler={showEditProfile} 
                           isEditing={editStatus}/>
                  <AnimatePresence>
                        {editStatus && 
                              <EditProfile information={profileInfo} 
                                          updateValue={editValues}
                                          cancelEditHandler={cancelEditProfile}
                                          saveEditHandler={saveEditProfile} 
                                          isEditing={editStatus} />}
                  </AnimatePresence>
            </>
      );
}

function Profile({information, editHandler, isEditing}) {

      return (
            <section className="profile-section">
                  <button className={`edit-profile ${isEditing ? 'no-click' : ""}`} onClick={editHandler}>Edit</button>
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
                        <a href={information.linkedIn} target='_blank' rel="noopener noreferrer">
                              <FaLinkedin /> LinkedIn
                        </a>
                        <a href={information.github} target='_blank' rel="noopener noreferrer">
                              <FaGithub /> Github
                        </a>
                  </div>
            </section>
      );
}

function EditProfile({information, updateValue, cancelEditHandler, saveEditHandler, isEditing}) {
      return (
            <motion.section 
                  className="edit-profile-section"
                  initial={{ height: 0, opacity: 0}}
                  animate={{ height: isEditing ? "auto" : 0, opacity: isEditing ? 1 : 0 }}
                  exit={{ height: 0, opacity: 0, translateY: -50}}
                  transition={{ duration: 0.500, ease: "easeIn" }}
                  style={{ overflow: "hidden" }}
            >
                  <h2>Profile Editor</h2>
                  <form action="#">
                        <div>
                              <label htmlFor="full-name">Full Name:</label>
                              <input type="text" 
                                    name="fullName" 
                                    id="full-name"
                                    value={information.fullName} 
                                    onChange={updateValue} />
                        </div>
                        <div>
                              <label htmlFor="profession">Profession:</label>
                              <input type="text" 
                                    name="profession" 
                                    id="profession" 
                                    value={information.profession}
                                    onChange={updateValue} />
                        </div>
                        <div>
                              <label htmlFor="email">Email:</label>
                              <input type="email" 
                                    name="email" 
                                    id="email" 
                                    autoComplete='email'
                                    value={information.email}
                                    onChange={updateValue} />
                        </div>
                        <div>
                              <label htmlFor="phone-number">Phone Number:</label>
                              <input type="tel" 
                                    name="number" 
                                    id="phone-number" 
                                    value={information.number} 
                                    onChange={updateValue}/>
                        </div>
                        <div>
                              <label htmlFor="location">Location:</label>
                              <input type="text" 
                                    name="location" 
                                    id="location" 
                                    value={information.location} 
                                    onChange={updateValue} />
                        </div>
                        <div>
                              <label htmlFor="linkedin-account">LinkedIn Account:</label>
                              <input type="text" 
                                    name="linkedIn" 
                                    id="linkedin-account"
                                    value={information.linkedIn} 
                                    onChange={updateValue} />
                        </div>
                        <div>
                              <label htmlFor="github-account">GitHub Account:</label>
                              <input type="text" 
                                    name="github" 
                                    id="github-account" 
                                    value={information.github}
                                    onChange={updateValue} />
                        </div>                                                
                  </form>
                  <div className="button-group">
                              <button className="cancel" onClick={cancelEditHandler}>Cancel</button>
                              <button className="save" onClick={saveEditHandler}>Save</button>
                  </div>
            </motion.section>
      );
}

export {
      Profile,
      EditProfile,
      ProfileSection,     
}