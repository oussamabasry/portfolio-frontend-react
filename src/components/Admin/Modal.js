import React from "react";

const Modal = ({ id, header, submitValue, colorButton, children, onClick }) => {
  return (
    <div>
      <div
        className="modal fade"
        id={id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {header}
              </h5>
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary shadow-none"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className={`btn btn-${colorButton} shadow-none`}
                data-bs-dismiss="modal"
                onClick={() => onClick()}
              >
                {submitValue}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
