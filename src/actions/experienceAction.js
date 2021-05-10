import {
  addExperienceApi,
  getExperiencesApi,
  deleteExperienceApi,
  updateExperienceApi,
} from "../apis/experienceApi";
import { toastSuccess, toastError } from "../shared/toast";

export const getExperiences = () => async (dispatch) => {
  try {
    const { data } = await getExperiencesApi();
    dispatch({ type: "GET_EXPERIENCES", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addExperience = (experience) => async (dispatch) => {
  try {
    const { data } = await addExperienceApi(experience);
    dispatch({ type: "ADD_EXEPERIENCE", payload: data });
    toastSuccess("Experience Added Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error while adding experience");
  }
};

export const deleteExperience = (id) => async (dispatch) => {
  try {
    await deleteExperienceApi(id);
    dispatch({ type: "DELETE_EXEPERIENCE", payload: id });
    toastSuccess("Experience deleted Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error while deleting experience");
  }
};

export const updateExperience = (id, experience) => async (dispatch) => {
  try {
    const { data } = await updateExperienceApi(id, experience);
    dispatch({
      type: "UPDATE_EXEPERIENCE",
      payload:{...experience,_id: data.experience._id},
    });
    toastSuccess("Experience Updated Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error while updating experience");
  }
};
