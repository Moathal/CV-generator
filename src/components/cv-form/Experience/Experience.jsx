import React from "react";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "antd";
import ExperienceInput from "./ExperienceInputs";

const Experience = ({ onSubmit }) => {
	const initialValues = {
		experiences: [{ company: "", date: [], description: "" }],
	};

	const validationSchema = Yup.object({
		experiences: Yup.array()
			.of(
				Yup.object().shape({
					company: Yup.string().required("Company name is required"),
					date: Yup.array()
						.of(Yup.date().required("Date is required"))
						.required("Date range is required"),
					description: Yup.string().required("Description is required"),
				})
			)
			.min(1, "At least one experience is required"),
	});

	return (
		<div className='Container'>
			<h2 style={{ height: 240 }}>Experience</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => onSubmit(values)}>
				{({ values }) => (
					<Form>
						<FieldArray name='experiences'>
							{({ push, remove }) => (
								<>
									{values.experiences.map((experience, index) => (
										<ExperienceInput
											key={index}
											index={index}
											removeExperience={() => remove(index)}
										/>
									))}
									<Button
										type='button'
										onClick={() =>
											push({ company: "", date: [], description: "" })
										}>
										Add Experience
									</Button>
								</>
							)}
						</FieldArray>
						<ErrorMessage name='experiences' component='div' />
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Experience;
