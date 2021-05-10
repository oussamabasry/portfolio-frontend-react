import { getMessagesApi, updateMessageApi } from "../apis/messageApi";

export const getMessages = () => async (dispatch) => {
  try {
    const { data } = await getMessagesApi();
    dispatch({ type: "GET_MESSAGES", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateMessage = (id, message) => async (dispatch) => {
  try {
    const { data } = await updateMessageApi(id, message);
    dispatch({
      type: "UPDATE_MESSAGE",
      payload: { ...message, _id: data.message._id },
    });
  } catch (error) {
    console.log(error);
  }
};
