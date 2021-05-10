import {
  addEducationApi,
  getEducationsApi,
  deleteEducationApi,
  updateEducationApi,
} from "../apis/educationApi";
import { toastSuccess, toastError } from "../shared/toast";

export const getEducations = () => async (dispatch) => {
  try {
    const { data } = await getEducationsApi();
    dispatch({ type: "GET_EDUCATIONS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addEducation = (education) => async (dispatch) => {
  try {
    const { data } = await addEducationApi(education);
    dispatch({ type: "ADD_EDUCATION", payload: data });
    toastSuccess("Education Added Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error while adding education");
  }
};

export const deleteEducation = (id) => async (dispatch) => {
  try {
    await deleteEducationApi(id);
    toastSuccess("Education Deleted Successfully");
    dispatch({ type: "DELETE_EDUCATION", payload: id });
  } catch (error) {
    console.log(error);
    toastError("Error while deleting education");
  }
};

export const updateEducation = (id, education) => async (dispatch) => {
  try {
    const { data } = await updateEducationApi(id, education);
    dispatch({
      type: "UPDATE_EDUCATION",
      payload: {...education,_id: data.education._id}
    });
    toastSuccess("Education Updated Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error while Updated education");
  }
};
