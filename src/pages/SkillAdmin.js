import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSkill } from "../actions/skillAction";
import SkillModal from "../components/Admin/SkillModal";
import Table from "../components/Admin/Table";

const SkillAdmin = () => {
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();
  const [selectedSkill, setSelectedSkill] = useState({
    type: "",
    level: 0,
  });

  const ondelteClick = (skill) => {
    dispatch(deleteSkill(skill._id));
  };

  const onEditClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <div className="skill">
      <div className="container">
        <Table
          ondelteClick={ondelteClick}
          idModalAdd="addSkill"
          idModalEdit="editSkill"
          onEditClick={onEditClick}
          title="Skill"
          headerText={["Name", "Level"]}
          headerProprities={["type", "level"]}
          tableData={skills}
        />
      </div>
      <SkillModal
        id="addSkill"
        header="Add Skill"
        skil={selectedSkill}
        submitValue="Add Skill"
        colorButton="success"
      />
      <SkillModal
        id="editSkill"
        header="Edit Skill"
        skil={selectedSkill}
        submitValue="Edit Skill"
        colorButton="warning"
      />
    </div>
  );
};

export default SkillAdmin;
