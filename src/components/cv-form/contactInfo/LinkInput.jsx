import React from "react";
import { Input, Space } from "antd";

export const LinkInput = ({ setFieldValue, values, index }) => {
	return (
		<Space>
			<label htmlFor={`links[${index}].label`}>Label</label>
			<Input
				id={`links[${index}].label`}
				name={`links[${index}].label`}
				value={values.links[index].label}
				onChange={(e) => setFieldValue(`links[${index}].label`, e.target.value)}
				placeholder='e.g. LinkedIn'
			/>
			<label htmlFor={`links[${index}].url`}>URL</label>
			<Input
				id={`links[${index}].url`}
				name={`links[${index}].url`}
				value={values.links[index].url}
				onChange={(e) => setFieldValue(`links[${index}].url`, e.target.value)}
				placeholder='e.g. https://www.linkedin.com/in/YourAccountName'
			/>
		</Space>
	);
};
