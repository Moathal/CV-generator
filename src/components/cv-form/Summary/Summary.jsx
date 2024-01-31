// components/Summary.js
import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import SummaryText from "./SummaryText";

const Summary = ({ onSubmit }) => {
	const initialValues = {
		summaryText: "",
	};

	const validationSchema = Yup.object({
		summaryText: Yup.string().required("Summary is required"),
	});

	return (
		<div className='Container'>
			<h2 style={{ height: 240 }}>Summary</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => onSubmit(values)}>
				{({ setFieldValue, values }) => (
					<Form>
						<SummaryText setFieldValue={setFieldValue} values={values} />
						<ErrorMessage name='summaryText' component='div' />
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Summary;
