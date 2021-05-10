import {
  addProjectApi,
  getProjectsApi,
  deleteProjectApi,
  updateProjectApi,
} from "../apis/projectApi";


export const getprojects = () => async (dispatch) => {
  try {
    const { data } = await getProjectsApi();
    dispatch({ type: "GET_PROJECTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addProject = (project) => async (dispatch) => {
  try {
    const { data } = await addProjectApi(project);
    dispatch({ type: "ADD_PROJECT", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await deleteProjectApi(id);
    dispatch({ type: "DELETE_PROJECT", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateProject = (id, project) => async (dispatch) => {
  try {
    const { data } = await updateProjectApi(id, project);
    dispatch({
      type: "UPDATE_PROJECT",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
