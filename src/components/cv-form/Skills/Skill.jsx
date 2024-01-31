// components/Skill.js
import React from "react";
import { Space, Input } from "antd";

const Skill = ({ index, removeSkill }) => {
	return (
		<Space>
			<Input name={`skills[${index}].name`} placeholder='Skill Name' />
			<button type='button' onClick={removeSkill}>
				Remove Skill
			</button>
		</Space>
	);
};

export default Skill;
