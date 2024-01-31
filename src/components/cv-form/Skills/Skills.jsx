// components/Skills.js
import React from "react";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "antd";
import Skill from "./Skill";

const Skills = ({ onSubmit }) => {
	const initialValues = {
		skills: [{ name: "" }],
	};

	const validationSchema = Yup.object({
		skills: Yup.array()
			.of(
				Yup.object().shape({
					name: Yup.string().required("Skill name is required"),
				})
			)
			.min(1, "At least one skill is required"),
	});

	return (
		<div className='Container'>
			<h2 style={{ height: 240 }}>Skills</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => onSubmit(values)}>
				{({ values }) => (
					<Form>
						<FieldArray name='skills'>
							{({ push, remove }) => (
								<>
									{values.skills.map((skill, index) => (
										<Skill
											key={index}
											index={index}
											removeSkill={() => remove(index)}
										/>
									))}
									<Button type='button' onClick={() => push({ name: "" })}>
										Add Skill
									</Button>
								</>
							)}
						</FieldArray>
						<ErrorMessage name='skills' component='div' />
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Skills;
