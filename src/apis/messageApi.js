import api from "./serverApi";

export const getMessagesApi = () => {
  return api.get("/messages/", {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("userData")).token
      }`,
    },
  });
};

export const updateMessageApi = (messageId, message) => {
  return api.put(`/messages/${messageId}`, message);
};
