import {
  addSkillApi,
  getSkillsApi,
  deleteSkillApi,
  updateSkillApi,
} from "../apis/skillApi";
//import toastr from "toastr";
//import "toastr/build/toastr.css";

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
    // toastr.success("Post Created succecfully", "Congratulation");
  } catch (error) {
    console.log(error);
    //toastr.warning("Post not Created ", "Erreur");
  }
};

export const deleteSkill = (id) => async (dispatch) => {
  try {
    await deleteSkillApi(id);
    dispatch({ type: "DELETE_SKILL", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateSkill = (id, skill) => async (dispatch) => {
  try {
    const { data } = await updateSkillApi(id, skill);
    dispatch({
      type: "UPDATE_SKILL",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
