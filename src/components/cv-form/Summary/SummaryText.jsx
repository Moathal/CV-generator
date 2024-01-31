import React from "react";
import { Input, Space } from "antd";

const SummaryText = ({ setFieldValue, values }) => {
	return (
		<Space>
			<label htmlFor='summaryText'>Summary</label>
			<Input.TextArea
				id='summaryText'
				name='summaryText'
				value={values.summaryText}
				onChange={(e) => setFieldValue("summaryText", e.target.value)}
				placeholder='Enter your summary...'
			/>
		</Space>
	);
};

export default SummaryText;
