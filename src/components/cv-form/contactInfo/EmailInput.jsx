import React from "react";
import { Input, Space} from "antd";

export const EmailInput = ({ setFieldValue, values }) => {
	return (
		<Space>
			<label htmlFor='email'>Email</label>
			<Input
				id='email'
				name='email'
				value={values.email}
				onChange={(e) => setFieldValue("email", e.target.value)}
				placeholder='e.g. example@example.com'
			/>
		</Space>
	);
};

