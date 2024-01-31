// components/EducationInput.js
import React from "react";
import { Space, Input, DatePicker, Button } from "antd";

const { RangePicker } = DatePicker;

const EducationInput = ({ index, removeEducation }) => {
	return (
		<div key={index}>
			<Space direction='vertical'>
				<Input
					name={`educations[${index}].institute`}
					placeholder='Institute Name'
				/>
				<RangePicker
					name={`educations[${index}].date`}
					placeholder={["From", "To"]}
					format='YYYY-MM-DD'
				/>
				<Input.TextArea
					name={`educations[${index}].description`}
					placeholder='Description'
				/>
				<Button type='button' onClick={removeEducation}>
					Remove Education
				</Button>
			</Space>
		</div>
	);
};

export default EducationInput;
