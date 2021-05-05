import {
  addExperienceApi,
  getExperiencesApi,
  deleteExperienceApi,
  updateExperienceApi,
} from "../apis/experienceApi";


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
    // toastr.success("Post Created succecfully", "Congratulation");
  } catch (error) {
    console.log(error);
    //toastr.warning("Post not Created ", "Erreur");
  }
};

export const deleteExperience = (id) => async (dispatch) => {
  try {
    await deleteExperienceApi(id);
    dispatch({ type: "DELETE_EXEPERIENCE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateExperience = (id, experience) => async (dispatch) => {
  try {
    const { data } = await updateExperienceApi(id, experience);
    dispatch({
      type: "UPDATE_EXEPERIENCE",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
