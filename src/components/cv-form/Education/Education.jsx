// components/Education.js
import React from "react";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "antd";
import EducationInput from "./EducationInput";

const Education = ({ onSubmit }) => {
	const initialValues = {
		educations: [{ institute: "", date: [], description: "" }],
	};

	const validationSchema = Yup.object({
		educations: Yup.array()
			.of(
				Yup.object().shape({
					institute: Yup.string().required("Institute name is required"),
					date: Yup.array()
						.of(Yup.date().required("Date is required"))
						.required("Date range is required"),
					description: Yup.string().required("Description is required"),
				})
			)
			.min(1, "At least one education entry is required"),
  });

	return (
		<div className='Container'>
			<h2 style={{ height: 240 }}>Education</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => onSubmit(values)}>
				{({ values }) => (
					<Form>
						<FieldArray name='educations'>
							{({ push, remove }) => (
								<>
									{values.educations.map((education, index) => (
										<EducationInput
											key={index}
											index={index}
											removeEducation={() => remove(index)}
										/>
									))}
									<Button
										type='button'
										onClick={() =>
											push({ institute: "", date: [], description: "" })
										}>
										Add Education
									</Button>
								</>
							)}
						</FieldArray>
						<ErrorMessage name='educations' component='div' />
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Education;
