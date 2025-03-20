import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaCalendarAlt } from "react-icons/fa";
import { MdEmail, MdOutlinePhone, MdLocationPin } from "react-icons/md";
import "./components.css";

const profileData = {
	fullName: "The Unknown",
	profession: "Cybersecurity Engineer",
	email: "mrRobot@mail.com",
	number: "123-456-7890",
	location: "San Francisco, CA",
	linkedIn: "https://www.linkedin.com/login",
	github: "https://github.com/",
};

function ProfileSection() {
	const [editStatus, setEditStatus] = useState(false);
	const [profileInfo, setProfileInfo] = useState(profileData);
	const [currentProfile, setCurrentProfile] = useState(profileInfo);

	const showEditProfile = () => {
		setEditStatus(true);
		setCurrentProfile({ ...profileInfo });
	};

	const cancelEditProfile = () => {
		setEditStatus(false);
		setProfileInfo({ ...currentProfile });
	};

	const saveEditProfile = () => {
		setTimeout(() => setEditStatus(false), 250);
	};

	const editValues = (e) => {
		setProfileInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<>
			<Profile
				information={profileInfo}
				editHandler={showEditProfile}
				isEditing={editStatus}
			/>
			<AnimatePresence>
				{editStatus && (
					<EditProfile
						information={profileInfo}
						updateValue={editValues}
						cancelEditHandler={cancelEditProfile}
						saveEditHandler={saveEditProfile}
						isEditing={editStatus}
					/>
				)}
			</AnimatePresence>
		</>
	);
}

function Profile({ information, editHandler, isEditing }) {
	return (
		<section className="profile-section">
			<button
				className={`edit-profile ${isEditing ? "no-click" : ""}`}
				onClick={editHandler}
			>
				Edit
			</button>
			<h1>{information.fullName}</h1>
			<h2>{information.profession}</h2>
			<div className="profile-links">
				<a href="#">
					<MdEmail className="icon" /> {information.email}
				</a>
				<a href="#">
					<MdOutlinePhone className="icon" /> {information.number}
				</a>
				<a href="#">
					<MdLocationPin />
					{information.location}
				</a>
				<a
					href={information.linkedIn}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin /> LinkedIn
				</a>
				<a href={information.github} target="_blank" rel="noopener noreferrer">
					<FaGithub /> Github
				</a>
			</div>
		</section>
	);
}

function EditProfile({
	information,
	updateValue,
	cancelEditHandler,
	saveEditHandler,
	isEditing,
}) {
	return (
		<motion.section
			className="edit-profile-section"
			initial={{ height: 0, opacity: 0 }}
			animate={{ height: isEditing ? "auto" : 0, opacity: isEditing ? 1 : 0 }}
			exit={{ height: 0, opacity: 0, translateY: -50 }}
			transition={{ duration: 0.5, ease: "easeIn" }}
			style={{ overflow: "hidden" }}
		>
			<h2>Profile Editor</h2>
			<form action="#">
				<div>
					<label htmlFor="full-name">Full Name:</label>
					<input
						type="text"
						name="fullName"
						id="full-name"
						value={information.fullName}
						onChange={updateValue}
					/>
				</div>
				<div>
					<label htmlFor="profession">Profession:</label>
					<input
						type="text"
						name="profession"
						id="profession"
						value={information.profession}
						onChange={updateValue}
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						id="email"
						autoComplete="email"
						value={information.email}
						onChange={updateValue}
					/>
				</div>
				<div>
					<label htmlFor="phone-number">Phone Number:</label>
					<input
						type="tel"
						name="number"
						id="phone-number"
						value={information.number}
						onChange={updateValue}
					/>
				</div>
				<div>
					<label htmlFor="location">Location:</label>
					<input
						type="text"
						name="location"
						id="location"
						value={information.location}
						onChange={updateValue}
					/>
				</div>
				<div>
					<label htmlFor="linkedin-account">LinkedIn Account:</label>
					<input
						type="text"
						name="linkedIn"
						id="linkedin-account"
						value={information.linkedIn}
						onChange={updateValue}
					/>
				</div>
				<div>
					<label htmlFor="github-account">GitHub Account:</label>
					<input
						type="text"
						name="github"
						id="github-account"
						value={information.github}
						onChange={updateValue}
					/>
				</div>
			</form>
			<div className="button-group">
				<button className="cancel" onClick={cancelEditHandler}>
					Cancel
				</button>
				<button className="save" onClick={saveEditHandler}>
					Save
				</button>
			</div>
		</motion.section>
	);
}

const eduData = [
	{
		id: uuidv4(),
		degree: 'Bachelor of Science in Computer Science',
		institution: 'Harvard University',
		studyPeriod: 'June 20XX - September 20XX',
		location: 'West Avenue, IN'
	},
	{
		id: uuidv4(),
		degree: 'Bachelor of Science in Information Technology',
		institution: 'Umbrella Academy',
		studyPeriod: 'January 20XX - December 20XX',
		location: 'Unknown'
	}
];

function EducationSection() {
	const [editStatus, setEditStatus] = useState(false);
	const [educationInfo, setEducationInfo] = useState(eduData);
	const [currentEducation, setCurrentEducation] = useState(educationInfo);

	const showEditProfile = () => {
		setEditStatus(true);
		setCurrentEducation(educationInfo.map(item => ({ ...item })));
	};

	const cancelEditEducation = () => {
		setEditStatus(false);
		setEducationInfo(currentEducation);
	};

	const saveEditEducation = () => {
		setTimeout(() => setEditStatus(false), 250);
	};

	const editValues = (id, property, value) => {
		setEducationInfo(prev => prev.map(item =>
			item.id === id ? { ...item, [property]: value } : item
		));
	};

	const removeEducation = (id) => {
		setEducationInfo((prev) => prev.filter((obj) => obj.id !== id));
	}

	const addEducation = () => {
		const newEducation = [...educationInfo,
		{ id: uuidv4(), degree: "", institution: "", studyPeriod: "", location: "" }];
		setEducationInfo(newEducation);
	}

	return (
		<>
			<Education
				info={educationInfo}
				isEditing={editStatus}
				editHandler={showEditProfile} />
			<AnimatePresence>
				{editStatus && (
					<EditEducation
						info={educationInfo}
						isEditing={editStatus}
						updateValue={editValues}
						cancelEditHandler={cancelEditEducation}
						removeItemHandler={removeEducation}
						saveEditHandler={saveEditEducation}
						addItemHandler={addEducation}
					/>
				)}
			</AnimatePresence>
		</>
	);
}

function Education({ info, isEditing, editHandler }) {
	const extractData = (information) => {
		return information.map((data) => (
			<li key={data.id}>
				<h2 className="degree">{data.degree}</h2>
				<h3 className="institution">{data.institution}</h3>
				<p className="duration">
					<FaCalendarAlt /> {data.studyPeriod}
				</p>
				<p className="location">
					<MdLocationPin /> {data.location}
				</p>
			</li>
		));
	}

	return (
		<section className="education-section">
			<button className={`edit-education ${isEditing ? "no-click" : ""}`}
				onClick={editHandler}>Edit</button>
			<h1>Education</h1>
			<hr />
			<ul>
				{extractData(info)}
			</ul>
		</section >
	);
}

function EditEducation({
	info,
	isEditing,
	updateValue,
	cancelEditHandler,
	removeItemHandler,
	saveEditHandler,
	addItemHandler }) {

	const extractData = (information) => {
		return information.map((data) => (
			<li key={data.id}>
				<button className="remove" onClick={() => { removeItemHandler(data.id) }}>X</button>
				<div>
					<label htmlFor="degree">Degree: </label>
					<input
						type="text"
						name="degree"
						id="degree"
						value={data.degree}
						onChange={(e) => {
							updateValue(data.id, "degree", e.target.value)
						}} />
				</div>
				<div>
					<label htmlFor="institution">Institution: </label>
					<input
						type="text"
						name="institution"
						id="institution"
						value={data.institution}
						onChange={(e) => { updateValue(data.id, "institution", e.target.value) }} />
				</div>
				<div>
					<label htmlFor="study-period">Study Period: </label>
					<input
						type="text"
						name="studyPeriod"
						id="study-period"
						value={data.studyPeriod}
						onChange={(e) => { updateValue(data.id, "studyPeriod", e.target.value) }} />
				</div>
				<div>
					<label htmlFor="location">Location: </label>
					<input
						type="text"
						name="location"
						id="location"
						value={data.location}
						onChange={(e) => { updateValue(data.id, "location", e.target.value) }} />
				</div>
			</li>
		));
	}

	return (
		<motion.section
			className="edit-education-section"
			initial={{ height: 0, opacity: 0 }}
			animate={{ height: isEditing ? "auto" : 0, opacity: isEditing ? 1 : 0 }}
			exit={{ height: 0, opacity: 0, translateY: -50 }}
			transition={{ duration: 0.5, ease: "easeIn" }}
			style={{ overflow: "hidden" }}>
			<h2>Education Editor</h2>
			<form action="#">
				<ul>
					{extractData(info)}
				</ul>
			</form>
			<div className="button-group">
				<button className="addEducation" onClick={addItemHandler}>Add Education</button>
				<div>
					<button className="cancel" onClick={cancelEditHandler}>Cancel</button>
					<button className="save" onClick={saveEditHandler}>Save</button>
				</div>
			</div>
		</motion.section>
	);
}

const expData = [
	{
		id: uuidv4(),
		position: 'IT Tech Support',
		company: 'Company A',
		duration: 'June 20XX - September 20XX',
		location: 'Somewhere Else',
		description: [
			{ id: uuidv4(), text: "description 1" },
			{ id: uuidv4(), text: "description 2" },
			{ id: uuidv4(), text: "description 3" }
		]
	},
	{
		id: uuidv4(),
		position: 'IT Engineer',
		company: 'Company B',
		duration: 'June 20XX - September 20XX',
		location: 'Somewhere Else',
		description: [
			{ id: uuidv4(), text: "description 1" },
			{ id: uuidv4(), text: "description 2" },
			{ id: uuidv4(), text: "description 3" }
		]
	}
];

function ExperienceSection() {
	const [editStatus, setEditStatus] = useState(false);
	const [experienceInfo, setExperienceInfo] = useState(expData);
	const [currentExperience, setCurrentExperience] = useState(experienceInfo);

	const showEditExperience = () => {
		setEditStatus(true);
		setCurrentExperience(experienceInfo.map(item => ({ ...item })));
	};

	const cancelEditExperience = () => {
		setEditStatus(false);
		setExperienceInfo(currentExperience);
	};

	const saveEditExperience = () => {
		setTimeout(() => setEditStatus(false), 250);
	};

	const editValues = (id, property, value) => {
		setExperienceInfo(prev => prev.map(item => {
			if (property === "description") {
				return {
					...item,
					description: item.description.map(desc =>
						desc.id === id ? { ...desc, text: value } : desc
					)
				}
			}
			return item.id === id ? { ...item, [property]: value } : item
		}));
	};

	const removeExperience = (id) => {
		setExperienceInfo((prev) => prev.filter((obj) => obj.id !== id));
	}

	const removeExpDesc = (id) => {
		setExperienceInfo((prev) =>
			prev.map((obj) => ({
				...obj,
				description: obj.description.filter((desc) => desc.id !== id)
			})));
	}

	const addExperience = () => {
		const newExperience = [...experienceInfo,
		{
			id: uuidv4(),
			position: "",
			duration: "",
			company: "",
			location: "",
			description: [
				{ id: uuidv4(), text: "description 1" },
				{ id: uuidv4(), text: "description 2" },
				{ id: uuidv4(), text: "description 3" }
			]
		}];
		setExperienceInfo(newExperience);
	}

	const addDescription = (parentID) => {
		const newDesc = { id: uuidv4(), text: "" };
		setExperienceInfo((prev) => {
			return prev.map((item) =>
				item.id === parentID ?
					{ ...item, description: [...item.description, newDesc] } : item)
		})
	}

	return (
		<>
			<Experience
				info={experienceInfo}
				isEditing={editStatus}
				editHandler={showEditExperience} />
			<AnimatePresence>
				{editStatus && (
					<EditExperience
						info={experienceInfo}
						isEditing={editStatus}
						updateValue={editValues}
						cancelEditHandler={cancelEditExperience}
						removeItemHandler={removeExperience}
						saveEditHandler={saveEditExperience}
						removeDescHandler={removeExpDesc}
						addDescHandler={addDescription}
						addItemHandler={addExperience}
					/>
				)}
			</AnimatePresence>
		</>
	);
}

function Experience({ info, isEditing, editHandler }) {
	const ExperienceDescription = ({ data }) => {
		return (
			<ul className="experience-description">
				{data.map((description) =>
					<li key={description.id}>{description.text}</li>
				)}
			</ul>
		);
	}

	const ExperienceData = ({ information }) => {
		return (
			<ul>
				{
					information.map((data) => (
						<li key={data.id}>
							<h2 className="position">{data.position}</h2>
							<h3 className="company">{data.company}</h3>
							<p className="duration">
								<FaCalendarAlt /> {data.duration}
							</p>
							<p className="location">
								<MdLocationPin /> {data.location}
							</p>
							<ExperienceDescription data={data.description} />
						</li>
					))
				}
			</ul>
		);
	}

	return (
		<section className="experience-section">
			<button
				className={`edit-experience ${isEditing ? "no-click" : ""}`}
				onClick={editHandler}>
				Edit</button>
			<h1>Experience</h1>
			<hr />
			<ExperienceData information={info} />
		</section>
	);
}

function EditExperience({
	info,
	isEditing,
	updateValue,
	saveEditHandler,
	cancelEditHandler,
	removeItemHandler,
	removeDescHandler,
	addDescHandler,
	addItemHandler }) {

	const experienceDescription = (parentID, data) => {
		return (
			<div className="description">
				<label>Description</label>
				<ul>
					{
						data.map((description) => {
							return (
								<li key={description.id}>
									<input
										type="text"
										name="description"
										id="description"
										value={description.text}
										onChange={(e) => {
											updateValue(description.id, "description", e.target.value)
										}}
									/>
									<button
										className="delete-description"
										onClick={() => removeDescHandler(description.id)}>X</button>
								</li>
							);
						})
					}
				</ul>
				<button className="addDescription"
					onClick={(e) => {
						e.preventDefault();
						addDescHandler(parentID);
					}}>
					Add Description</button>
			</div>
		);
	}

	const experienceData = (information) => {
		return (
			<ul>
				{
					information.map((data) => (
						<li key={data.id}>
							<button className="remove" onClick={() => removeItemHandler(data.id)}>X</button>
							<div>
								<label htmlFor="position">Position: </label>
								<input
									type="text"
									name="position"
									id="position"
									value={data.position}
									onChange={(e) => {
										updateValue(data.id, "position", e.target.value)
									}}
								/>
							</div>
							<div>
								<label htmlFor="company">Company: </label>
								<input
									type="text"
									name="company"
									id="company"
									value={data.company}
									onChange={(e) => {
										updateValue(data.id, "company", e.target.value)
									}}
								/>
							</div>
							<div>
								<label htmlFor="duration">Duration: </label>
								<input
									type="text"
									name="duration"
									id="duration"
									value={data.duration}
									onChange={(e) => {
										updateValue(data.id, "duration", e.target.value)
									}}
								/>
							</div>
							<div>
								<label htmlFor="location">Location: </label>
								<input
									type="text"
									name="location"
									id="location"
									value={data.location}
									onChange={(e) => {
										updateValue(data.id, "location", e.target.value)
									}}
								/>
							</div>
							{experienceDescription(data.id, data.description)}
						</li>
					))
				}
			</ul>
		);
	}

	return (
		<motion.section
			className="edit-experience-section"
			initial={{ height: 0, opacity: 0 }}
			animate={{ height: isEditing ? "auto" : 0, opacity: isEditing ? 1 : 0 }}
			exit={{ height: 0, opacity: 0, translateY: -50 }}
			transition={{ duration: 0.5, ease: "easeIn" }}
			style={{ overflow: "hidden" }}
		>
			<h2>Experience Editor</h2>
			<form action="#">
				{experienceData(info)}
			</form>
			<div className="button-group">
				<button className="addExperience" onClick={addItemHandler}>Add Experience</button>
				<div>
					<button className="cancel" onClick={cancelEditHandler}>Cancel</button>
					<button className="save" onClick={saveEditHandler}>Save</button>
				</div>
			</div>
		</motion.section>
	);
}

export { ProfileSection, EducationSection, ExperienceSection };
