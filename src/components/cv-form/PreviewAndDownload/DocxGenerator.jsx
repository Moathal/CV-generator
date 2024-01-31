import React from "react";
import { saveAs } from "file-saver";
import { Button } from "antd";
import { Document, Packer, Paragraph, TextRun } from "docx";

async function DocxGenerator(formData) {
	const doc = new Document();

	// Personal Information Section
	const personalInfoSection = new Paragraph({
		children: [
			new TextRun({
				text: "Personal Information",
				bold: true,
				underline: true,
				size: 20,
			}),
		],
		spacing: {
			after: 200,
		},
	});
	doc.addParagraph(personalInfoSection);

	// Education Section
	const educationSection = new Paragraph({
		children: [
			new TextRun({
				text: "Education",
				bold: true,
				underline: true,
				size: 20,
			}),
		],
		spacing: {
			after: 200,
		},
	});
	doc.addParagraph(educationSection);

	// Work Experience Section
	const workExperienceSection = new Paragraph({
		children: [
			new TextRun({
				text: "Work Experience",
				bold: true,
				underline: true,
				size: 20,
			}),
		],
		spacing: {
			after: 200,
		},
	});
	doc.addParagraph(workExperienceSection);

	// Skills Section
	const skillsSection = new Paragraph({
		children: [
			new TextRun({
				text: "Skills",
				bold: true,
				underline: true,
				size: 20,
			}),
		],
		spacing: {
			after: 200,
		},
	});
	doc.addParagraph(skillsSection);

	// Additional Information Section
	const additionalInfoSection = new Paragraph({
		children: [
			new TextRun({
				text: "Additional Information",
				bold: true,
				underline: true,
				size: 20,
			}),
		],
		spacing: {
			after: 200,
		},
	});
	doc.addParagraph(additionalInfoSection);

	const docxBytes = await Packer.toBuffer(doc);
	return docxBytes;
}

export default DocxGenerator;
