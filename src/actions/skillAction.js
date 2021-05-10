import {
  addSkillApi,
  getSkillsApi,
  deleteSkillApi,
  updateSkillApi,
} from "../apis/skillApi";
import { toastSuccess, toastError } from "../shared/toast";

export const getSkills = () => async (dispatch) => {
  try {
    const { data } = await getSkillsApi();
    dispatch({ type: "GET_SKILLS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addSkill = (skill) => async (dispatch) => {
  try {
    const { data } = await addSkillApi(skill);
    dispatch({ type: "ADD_SKILL", payload: data });
    toastSuccess("Skill Added Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error while adding Skill");
  }
};

export const deleteSkill = (id) => async (dispatch) => {
  try {
    await deleteSkillApi(id);
    dispatch({ type: "DELETE_SKILL", payload: id });
    toastSuccess("Skill deleted successfully");
  } catch (error) {
    console.log(error);
    toastError("Error while deleting Skill");
  }
};

export const updateSkill = (id, skill) => async (dispatch) => {
  try {
    const { data } = await updateSkillApi(id, skill);
    dispatch({
      type: "UPDATE_SKILL",
      payload: { ...skill, _id: data.skill._id },
    });
    toastSuccess("Skill updated successfully");
  } catch (error) {
    console.log(error);
    toastError("Error while updating Skill");
  }
};
