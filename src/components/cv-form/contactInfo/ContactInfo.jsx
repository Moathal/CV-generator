// components/ContactInfo.js
import React from "react";
import { Formik, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { Flex, Button } from "antd";
import { FullNameInput } from "./FullNameInput";
import { LinkInput } from "./LinkInput";
import { EmailInput } from "./EmailInput";
import { AddressInput } from "./AddressInput";
import { PhoneNumberInput } from "./PhoneNumberInput";

const ContactInfo = ({ onSubmit }) => {
	const initialValues = {
		fullName: "",
		email: "",
		address: "",
		phoneNumber: "",
		links: [{ label: "", url: "" }],
	};

const validationSchema = Yup.object({
	fullName: Yup.string().required("Full Name is required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	address: Yup.string().required("Address is required"),
	phoneNumber: Yup.string().required("Phone Number is required"),
	links: Yup.array().of(
		Yup.object().shape({
			label: Yup.string().required("Label is required"),
			url: Yup.string().url("Invalid URL").required("URL is required"),
		})
	),
});



	  const handleSubmit = (values) => {
			// Save form data and call the onSubmit callback
			// You can save form data using local storage or API calls
			console.log(values);
			onSubmit(values);
		};


	return (
		<div className='Container'>
			<h2 style={{ height: 240 }}>Personal Information</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				{({ setFieldValue, values }) => (
					<Form>
						<Flex align='center' justify='center' gap='middle' horizontal>
							<FullNameInput setFieldValue={setFieldValue} values={values} />
							<ErrorMessage name='fullName' component='div' />
							<EmailInput setFieldValue={setFieldValue} values={values} />
							<ErrorMessage name='email' component='div' />
							<AddressInput setFieldValue={setFieldValue} values={values} />
							<ErrorMessage name='address' component='div' />
							<PhoneNumberInput setFieldValue={setFieldValue} values={values} />
							<ErrorMessage name='phoneNumber' component='div' />
							<FieldArray name='links'>
								{({ push, remove }) => (
									<>
										{values.links.map((link, index) => (
											<div key={index}>
												<LinkInput
													setFieldValue={setFieldValue}
													values={values}
													index={index}
												/>
												<Button type='button' onClick={() => remove(index)}>
													Remove Link
												</Button>
											</div>
										))}
										<Button
											type='button'
											onClick={() => push({ label: "", url: "" })}>
											Add Link
										</Button>
									</>
								)}
							</FieldArray>
						</Flex>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ContactInfo;
