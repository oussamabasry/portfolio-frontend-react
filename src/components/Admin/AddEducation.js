import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addEducation } from "../../actions/educationAction";

const AddEducation = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onClick = (data) => {
    dispatch(addEducation(data));
    reset();
  };
  return (
    <div>
      <div
        class="modal fade"
        id="addEducationModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Education
              </h5>
              <button
                type="button"
                class="btn-close"
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
                class="btn btn-primary shadow-none"
                data-bs-dismiss="modal"
                onClick={handleSubmit(onClick)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEducation;
