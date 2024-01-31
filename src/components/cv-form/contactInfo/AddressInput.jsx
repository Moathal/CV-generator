import React from "react";
import { Input, Space } from "antd";

export const AddressInput = ({ setFieldValue, values }) => {
	return (
		<Space>
			<label htmlFor='address'>Address</label>
			<Input
				id='address'
				name='address'
				value={values.address}
				onChange={(e) => setFieldValue("address", e.target.value)}
				placeholder='e.g. 123 Main St, City, Country'
			/>
		</Space>
	);
};
