import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { updateMessage, getMessages } from "../actions/messageAction";

const MessageAdmin = () => {
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  const onMessageClick = (message) => {
    if (!message.isSeen) {
      dispatch(updateMessage(message._id, { ...message, isSeen: true }));
    }
    setSelectedMessage(message);
  };

  const listMessages = messages.map((msg) => {
    return (
      <div
        key={msg._id}
        className="list-group-item my-1 bg-dark text-white"
        aria-current="true"
        style={{ cursor: "pointer" }}
        onClick={() => onMessageClick(msg)}
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{msg.subject}</h5>
          <small>{moment(msg.date).format("MMMM Do YYYY, h:mm:ss a")}</small>
        </div>
        <p className="mb-1">
          {msg.message.substring(0, 100)}
          {"   . . ."}
        </p>
        <p className="text-warning">See More</p>
        <div className=" d-flex justify-content-between align-items-center">
          <div>
            <strong> Send by: </strong>
            <small>{msg.name}</small>
          </div>
          {!msg.isSeen && (
            <span className="badge bg-warning rounded-pill">1</span>
          )}
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-7">
          <h2>Message Details</h2>
          {selectedMessage && (
            <div
              className="text-white bg-dark my-5 p-3"
              style={{ maxWidth: "34rem" }}
            >
              <div className="card-header">
                <span className="text-warning me-2">From:</span>
                {selectedMessage.name}
                <div>
                  <span className="text-warning me-2">Date:</span>
                  {moment(selectedMessage.date).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </div>
              </div>
              <div className="card-body">
                <div>
                  <span className="text-warning me-2">Email:</span>
                  <p className="card-text d-inline">{selectedMessage.email}</p>
                </div>
                <div className="card-title mt-2">
                  <span className="text-warning me-3">Subject: </span>
                  <strong className="d-inline">
                    {selectedMessage.subject}
                  </strong>
                </div>
                <div className="container">
                  <span className="text-warning me-3">Message:</span>
                  <p className="card-text">{selectedMessage.message}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-5  px-5">
          <h2>Conversations</h2>
          <div className="list-group">{listMessages}</div>
        </div>
      </div>
    </div>
  );
};

export default MessageAdmin;
