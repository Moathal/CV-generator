import React from "react";
import { Input, Space } from "antd";

export const FullNameInput = ({ setFieldValue, values }) => {
	return (
		<Space>
			<label htmlFor='fullName'>Full Name</label>
			<Input
				id='fullName'
				name='fullName'
				value={values.fullName}
				onChange={(e) => setFieldValue("fullName", e.target.value)}
				placeholder='e.g. John Doe'
			/>
		</Space>
	);
};
