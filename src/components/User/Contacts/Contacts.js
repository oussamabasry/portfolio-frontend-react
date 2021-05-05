import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import serverApi from "../../../apis/serverApi";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setloading] = useState(false);

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

  console.log(errors);

  return (
    <div>
      <section id="contact" class="py-5" style={{ backgroundColor: "#fff" }}>
        <div class="container pb-5">
          <h2 class="h1-responsive font-weight-bold text-center mb-5">
            Contact
          </h2>

          <div class="row">
            <div class="col-md-9 mb-md-0 mb-5 px-md-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row py-md-2">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <label htmlFor="name" class="">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-control shadow-none"
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

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <label for="email" class="">
                        Your email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        class="form-control shadow-none"
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

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <label htmlFor="subject" class="">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        class="form-control shadow-none"
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

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <label htmlFor="message">Your message</label>
                      <textarea
                        type="text"
                        name="message"
                        id="message"
                        rows="3"
                        class="form-control md-textarea shadow-none"
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
                <div class="row">
                  <div className="col text-center text-md-left mt-3">
                    {!loading && (
                      <input
                        type="submit"
                        className="btn btn-primary shadow-none "
                        value="Send"
                      />
                    )}
                    {loading && (
                      <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div class="col-md-3 text-center">
              <ul class="list-unstyled mb-0">
                <li>
                  <i class="fa fa-map-marker fa-2x text-primary"></i>
                  <p>Casablanca, Mohammedia, Morocco</p>
                </li>
                <li>
                  <i class="fa fa-phone fa-2x mt-4 text-primary"></i>
                  <p>+212 6 50 56 38 27</p>
                </li>
                <li>
                  <i class="fa fa-envelope fa-2x mt-4 text-primary"></i>
                  <p class="mb-0">obasry@gmail.com</p>
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
