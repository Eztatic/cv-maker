import { useState } from 'react';
import { FaGithub,  FaLinkedin } from "react-icons/fa";
import { MdEmail, MdOutlinePhone, MdLocationPin } from "react-icons/md";
import './components.css';

function Profile() {
      return (
            <section className="profile-section">
                  <button className="edit-profile">Edit</button>
                  <h1>Elliot Alderson</h1>
                  <h2>Cybersecurity Engineer</h2>
                  <div className="profile-links">
                        <a href="#">
                              <MdEmail className='icon'/> mrRobot@mail.com
                        </a>
                        <a href="#">
                              <MdOutlinePhone className='icon'/> 123-456-7890
                        </a>
                        <a href="#">
                              <MdLocationPin />
                              San Francisco, CA
                        </a>
                        <a href="#">
                              <FaLinkedin /> LinkedIn
                        </a>
                        <a href="#">
                              <FaGithub /> Github
                        </a>
                  </div>
            </section>
      );
}

function EditProfile() {
      return (
            <section className='edit-profile-section'>
                  <h2>Profile Editor</h2>
                  <form action="#">
                        <div class="form-group">
                              <label htmlFor="full-name">Full Name:</label>
                              <input type="text" name="full-name" />
                        </div>
                        <div class="form-group">
                              <label htmlFor="profession">Profession:</label>
                              <input type="text" name="profession" />
                        </div>
                        <div class="form-group">
                              <label htmlFor="email">Email:</label>
                              <input type="email" name="email" />
                        </div>
                        <div class="form-group">
                              <label htmlFor="phone-number">Phone Number:</label>
                              <input type="tel" name="phone-number" />
                        </div>
                        <div class="form-group">
                              <label htmlFor="location">Location:</label>
                              <input type="text" name="location" />
                        </div>
                        <div class="form-group">
                              <label htmlFor="linkedin-account">LinkedIn Account:</label>
                              <input type="text" name="linkedin-account" />
                        </div>
                        <div class="form-group">
                              <label htmlFor="github-account">GitHub Account:</label>
                              <input type="text" name="github-account" />
                        </div>                                                
                        <div className="button-group">
                              <button className="cancel">Cancel</button>
                              <button className="cancel">Save</button>
                        </div>
                  </form>
            </section>
      );
}

export {
      Profile,
      EditProfile     
}