import React, { useEffect, useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { Button } from "antd";

const PdfGenerator = ({ formData }) => {
	const [pdfBytes, setPdfBytes] = useState(null);

	useEffect(() => {
		const generatePDF = async () => {
			const pdfDoc = await PDFDocument.create();
			const page = pdfDoc.addPage([612, 792]); // Standard US Letter size
			const { width, height } = page.getSize();

			const sections = [
				{ title: "Personal Information", data: formData.contactInfo },
				{ title: "Summary", data: formData.summary },
				{ title: "Education", data: formData.education },
				{ title: "Experience", data: formData.experience },
				{ title: "Skills", data: formData.skills },
			];
			let yOffset = height - 50;
			const fontSize = 18;

			sections.forEach(({ title, data }) => {
				page.drawText(title, {
					x: 50,
					y: yOffset,
					size: fontSize,
					color: rgb(0, 0, 0),
				});
				yOffset -= fontSize + 10; // Adjust vertical position for next section

				if (data) {
					if (Array.isArray(data)) {
						data.forEach((item) => {
							Object.entries(item).forEach(([key, value]) => {
								page.drawText(`${key}: ${value}`, {
									x: 70,
									y: yOffset,
									size: fontSize,
									color: rgb(0, 0, 0),
								});
								yOffset -= fontSize + 5;
							});
						});
					} else {
						Object.entries(data).forEach(([key, value]) => {
							page.drawText(`${key}: ${value}`, {
								x: 70,
								y: yOffset,
								size: fontSize,
								color: rgb(0, 0, 0),
							});
							yOffset -= fontSize + 5;
						});
					}
				}
			});

			const pdfBytes = await pdfDoc.save();
			setPdfBytes(pdfBytes);
		};

		generatePDF();
	}, [formData]);


	const handleDownload = () => {
		const blob = new Blob([pdfBytes], { type: "application/pdf" });
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "styled_cv.pdf";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		window.URL.revokeObjectURL(url);
	};

	return (
		<div>
			<Button type='link' onClick={handleDownload} download='styled_cv.pdf'>
				Download PDF
			</Button>
		</div>
	);
};

export default PdfGenerator;
