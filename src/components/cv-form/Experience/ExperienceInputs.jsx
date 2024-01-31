import React from "react";
import { Space, Input, DatePicker, Button } from "antd";

const { RangePicker } = DatePicker;

const ExperienceInput = ({ index, removeExperience }) => {
	return (
		<div key={index}>
			<Space direction='vertical'>
				<Input
					name={`experiences[${index}].company`}
					placeholder='Company Name'
				/>
				<RangePicker
					name={`experiences[${index}].date`}
					placeholder={["From", "To"]}
					format='YYYY-MM-DD'
				/>
				<Input.TextArea
					name={`experiences[${index}].description`}
					placeholder='Description'
				/>
				<Button type='button' onClick={removeExperience}>
					Remove Experience
				</Button>
			</Space>
		</div>
	);
};

export default ExperienceInput;
