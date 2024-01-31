// Preview.js
import React, { useState } from "react";
import { Button } from "antd";
import PdfGenerator from "./PdfGenerator";
import DocxGenerator from "./DocxGenerator";

const Preview = ({ formData }) => {
	console.log(formData);
	const [pdfDataUrl, setPdfDataUrl] = useState("");
	const [docxDataUrl, setDocxDataUrl] = useState("");

	const generatePDF = (pdfData) => {
		const blob = new Blob([pdfData], { type: "application/pdf" });
		setPdfDataUrl(URL.createObjectURL(blob));
	};

	const generateDOCX = (docxData) => {
		const blob = new Blob([docxData], {
			type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		});
		setDocxDataUrl(URL.createObjectURL(blob));
	};

	return (
		<div>
			<h1>CV Preview</h1>
			{/* Render PDF document */}
			{pdfDataUrl && (
				<iframe
					title='PDF Preview'
					src={pdfDataUrl}
					style={{ width: "100%", height: "500px", border: "none" }}
				/>
			)}

			{/* Render DOCX document */}
			{docxDataUrl && (
				<embed
					src={docxDataUrl}
					style={{ width: "100%", height: "500px", border: "none" }}
				/>
			)}

			<PdfGenerator formData={formData} onPdfGenerated={generatePDF} />
			{/* <DocxGenerator formData={formData} onDocxGenerated={generateDOCX} /> */}
		</div>
	);
};

export default Preview;
