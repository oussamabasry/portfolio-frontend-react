import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addEducation, updateEducation } from "../../actions/educationAction";

const EducationModal = ({ id, header, edu, submitValue, colorButton }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id === "editEducationModal") {
      setValue("title", edu.title);
      setValue("school", edu.school);
      setValue("city", edu.city);
      setValue("startDate", "24/03/2020");
      setValue("endDate", edu.endDate);
    }
  }, [edu]);

  const onClick = (data) => {
    if (id === "editEducationModal") {
      dispatch(updateEducation(edu._id, data));
    } else {
      dispatch(addEducation(data));
    }
    reset();
  };
  return (
    <div>
      <div
        class="modal fade"
        id={id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {header}
              </h5>
              <button
                type="button"
                class="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <div class="row">
                  <div class="col-md-12 mb-md-0 mb-5 px-md-5">
                    <form>
                      <div class="row py-md-2">
                        <div class="col-md-12">
                          <div class="md-form mb-0">
                            <label htmlFor="title" class="">
                              Title
                            </label>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              class="form-control shadow-none"
                              {...register("title")}
                            />
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="md-form mb-0">
                            <label for="school" class="">
                              School
                            </label>
                            <input
                              type="text"
                              id="school"
                              name="school"
                              class="form-control shadow-none"
                              {...register("school")}
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="md-form mb-0">
                            <label for="city" class="">
                              City
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              class="form-control shadow-none"
                              {...register("city")}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="md-form mb-0">
                            <label for="school" class="">
                              Start Date
                            </label>
                            <input
                              class="form-control shadow-none"
                              type="date"
                              id="example-date-input"
                              {...register("startDate")}
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="md-form mb-0">
                            <label for="school" class="">
                              End Date
                            </label>
                            <input
                              class="form-control shadow-none"
                              type="date"
                              id="example-date-input"
                              {...register("endDate")}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary shadow-none"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class={`btn btn-${colorButton} shadow-none`}
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

export default EducationModal;
