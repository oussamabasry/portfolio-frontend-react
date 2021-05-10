import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import serverApi from "../../../apis/serverApi";
import { getMessages } from "../../../actions/messageAction";
import { useDispatch } from "react-redux";

const Contacts = ({ reff }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      setloading(true);
      await serverApi.post("/messages", data);
      setloading(false);
      toast.success("Sent Successfully", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      reset();
      dispatch(getMessages());
    } catch (error) {
      toast.error("an error happened while sending the message", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setloading(false);
  };


  return (
    <div>
      <section
        ref={reff}
        id="contact"
        className="py-5"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container pb-5">
          <h2 className="h1-responsive font-weight-bold text-center mb-5">
            Contact
          </h2>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5 px-md-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row py-md-2">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="name" className="">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control shadow-none"
                        {...register("name", {
                          required: "Name Required",
                          maxLength: 20,
                          minLength: 5,
                        })}
                      />
                      {errors.name && errors.name.type === "required" && (
                        <div className="text-danger">
                          You must enter your name
                        </div>
                      )}
                      {errors.name && errors.name.type === "minLength" && (
                        <div className="text-danger">
                          Your name must be at least 5 characters
                        </div>
                      )}
                      {errors.name && errors.name.type === "maxLength" && (
                        <div className="text-danger">
                          Your name must be at most 20 characters
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email" className="">
                        Your email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control shadow-none"
                        {...register("email", {
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                      />
                      {errors.email && errors.email.type === "required" && (
                        <div className="text-danger">
                          You must enter your email
                        </div>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <div className="text-danger">
                          You must enter a valid email
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject" className="">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="form-control shadow-none"
                        name="subject"
                        {...register("subject", {
                          required: true,
                          maxLength: 50,
                          minLength: 5,
                        })}
                      />
                      {errors.subject && errors.subject.type === "required" && (
                        <div className="text-danger">
                          You must enter a subject
                        </div>
                      )}
                      {errors.subject &&
                        errors.subject.type === "minLength" && (
                          <div className="text-danger">
                            Subject must be at least 5 characters
                          </div>
                        )}
                      {errors.subject &&
                        errors.subject.type === "maxLength" && (
                          <div className="text-danger">
                            Subject must be at most 50 characters
                          </div>
                        )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <label htmlFor="message">Your message</label>
                      <textarea
                        type="text"
                        name="message"
                        id="message"
                        rows="3"
                        className="form-control md-textarea shadow-none"
                        {...register("message", {
                          required: true,
                          minLength: 20,
                        })}
                      />
                      {errors.message && errors.message.type === "required" && (
                        <div className="text-danger">
                          You must enter a message
                        </div>
                      )}
                      {errors.message &&
                        errors.message.type === "minLength" && (
                          <div className="text-danger">
                            Message must be at least 20 characters
                          </div>
                        )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center text-md-left mt-3">
                    {!loading && (
                      <input
                        type="submit"
                        className="btn btn-primary shadow-none "
                        value="Send"
                      />
                    )}
                    {loading && (
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fa fa-map-marker fa-lg text-primary "></i>
                  <p>Casablanca, Mohammedia, Morocco</p>
                </li>
                <li>
                  <i className="fa fa-phone fa-lg mt-4 text-primary"></i>
                  <p>+212 6 50 56 38 27</p>
                </li>
                <li>
                  <i className="fa fa-envelope fa-lg mt-4 text-primary"></i>
                  <p className="mb-0">obasry@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
