import React from "react";
import { Input, Space } from "antd";

export const PhoneNumberInput = ({ setFieldValue, values }) => {
	return (
		<Space>
			<label htmlFor='phoneNumber'>Phone Number</label>
			<Input
				id='phoneNumber'
				name='phoneNumber'
				value={values.phoneNumber}
				onChange={(e) => setFieldValue("phoneNumber", e.target.value)}
				placeholder='e.g. +1234567890'
			/>
		</Space>
	);
};
