import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProject, updateProject } from "../../actions/projectAction";

const ProjectModal = ({ id, header, proj, submitValue, colorButton }) => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id === "editProject") {
      setValue("title", proj.title);
      setValue("description", proj.description);
      setValue("technologies", proj.technologies);
      setValue("haveLink", proj.haveLink);
      setValue("link", proj.link);
    }
  }, [proj, id, setValue]);

  const onClick = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("technologies", data.technologies);
    formData.append("haveLink", data.haveLink);
    formData.append("link", data.link);
    formData.append("projectImage", data.projectImage[0]);
    if (id === "editProject") {
      dispatch(updateProject(proj._id, formData));
    } else {
      dispatch(addProject(formData));
    }
    reset();
  };
  return (
    <div>
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
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
            <div className="modal-body">
              <div>
                <div className="row">
                  <div className="col-md-12 mb-md-0 mb-5 px-md-5">
                    <form>
                      <div className="row py-md-2">
                        <div className="col-md-12">
                          <div className="md-form mb-0">
                            <label htmlFor="title" className="">
                              Title
                            </label>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              className="form-control shadow-none"
                              {...register("title")}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="md-form">
                            <label htmlFor="message">Description</label>
                            <textarea
                              type="text"
                              name="description"
                              id="description"
                              rows="2"
                              className="form-control md-textarea shadow-none"
                              {...register("description")}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="md-form mb-0">
                            <label htmlFor="city" className="">
                              Technologies
                            </label>
                            <input
                              type="text"
                              id="technologies"
                              name="technologies"
                              className="form-control shadow-none"
                              {...register("technologies")}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="md-form mb-0">
                            <label htmlFor="haveLink" className="">
                              Have Link ?
                            </label>
                            <select
                              defaultValue={false}
                              id="haveLink"
                              name="haveLink"
                              className="form-control shadow-none"
                              {...register("haveLink")}
                            >
                              <option value={true}>Yes</option>
                              <option value={false}>No</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="md-form mb-0">
                            <label htmlFor="link" className="">
                              Link
                            </label>
                            <input
                              type="text"
                              id="link"
                              name="link"
                              className="form-control shadow-none"
                              {...register("link")}
                            />
                          </div>
                        </div>
                        <div className="col-md-10">
                          <div className="md-form mb-0">
                            <label htmlFor="link" className="">
                              Image
                            </label>
                            <input
                              type="file"
                              id="projectImage"
                              name="projectImage"
                              className="form-control shadow-none"
                              multiple={false}
                              {...register("projectImage")}
                            />
                          </div>
                        </div>
                       
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
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
                onClick={handleSubmit(onClick)}
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

export default ProjectModal;
