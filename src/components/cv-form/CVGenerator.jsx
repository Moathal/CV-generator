import React, { useState } from "react";
import Summary from "./Summary/Summary";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Preview from "./PreviewAndDownload/Preview";
import { Button, message, Steps, theme } from "antd";
import ContactInfo from "./contactInfo/ContactInfo";

const { Step } = Steps;

export const CvGenerator = () => {
	const { token } = theme.useToken();
	const [current, setCurrent] = useState(0);
	const [formData, setFormData] = useState({});

	const handleContactInfoSubmit = (data) => {
		setFormData((prevData) => ({ ...prevData, contactInfo: data }));
		next();
	};

	const handleSummarySubmit = (data) => {
		setFormData((prevData) => ({ ...prevData, summary: data }));
		next();
	};

	const handleSkillsSubmit = (data) => {
		setFormData((prevData) => ({ ...prevData, skills: data }));
		next();
	};

	const handleEducationSubmit = (data) => {
		setFormData((prevData) => ({ ...prevData, education: data }));
		next();
	};

	const handleExperienceSubmit = (data) => {
		setFormData((prevData) => ({ ...prevData, experience: data }));
		next();
	};

	const next = () => {
		setCurrent((prevCurrent) => prevCurrent + 1);
	};

	const prev = () => {
		setCurrent((prevCurrent) => prevCurrent - 1);
	};

	const items = [
		{ key: "Contact Info", title: "Contact Info" },
		{ key: "Summary", title: "Summary" },
		{ key: "Skills", title: "Skills" },
		{ key: "Education", title: "Education" },
		{ key: "Experience", title: "Experience" },
		{ key: "Preview", title: "Preview" },
	];

	const contentStyle = {
		lineHeight: "260px",
		textAlign: "center",
		color: token.colorTextTertiary,
		backgroundColor: token.colorFillAlter,
		borderRadius: token.borderRadiusLG,
		border: `1px dashed ${token.colorBorder}`,
		marginTop: 16,
	};

	return (
		<>
			<Steps current={current} items={items} />
			<div style={contentStyle}>
				{current === 0 && <ContactInfo onSubmit={handleContactInfoSubmit} />}
				{current === 1 && <Summary onSubmit={handleSummarySubmit} />}
				{current === 2 && <Skills onSubmit={handleSkillsSubmit} />}
				{current === 3 && <Education onSubmit={handleEducationSubmit} />}
				{current === 4 && <Experience onSubmit={handleExperienceSubmit} />}
				{current === 5 && <Preview formData={formData} />}
			</div>
			<div style={{ marginTop: 24 }}>
				{current < items.length - 1 && (
					<Button type='primary' onClick={next}>
						Next
					</Button>
				)}
				{current === items.length - 1 && (
					<Button
						type='primary'
						onClick={() => message.success("Processing complete!")}>
						Done
					</Button>
				)}
				{current > 0 && (
					<Button style={{ margin: "0 8px" }} onClick={prev}>
						Previous
					</Button>
				)}
			</div>
		</>
	);
};
