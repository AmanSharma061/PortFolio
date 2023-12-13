import React from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
function Contact() {
  const [querry, setQuerry] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handler = (event) => {
    setQuerry({ ...querry, [event.target.name]: event.target.value });
  };

  const submitHandler = async (e) => {
    console.log("cc");
    e.preventDefault();

    if (!querry.name || !querry.email || !querry.phone || !querry.message) {
      toast.warn("Please fill all the fields.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } else if (typeof querry.email != "email") {
      toast.warn("Please enter a valid email", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return;
    } else if (querry.phone.length != 10) {
      toast.warn("Please enter a valid phone number", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return;
    }

    try {
      const { name, email, phone, message } = querry;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await response.json();
      console.log(data);
      if (data.message === "success") {
        toast.success("Message Sent Successfully", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        setQuerry({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className=" sm:w-[65%] mx-auto flex  items-center text-center sm:mt-[2%] ">
        <div className=" w-[100%] mt-[5vh]  flex justify-center shadow-xl cc">
          <img
            src="./public/contact.png"
            alt=""
            className="w-[50%] h-[60vh] my-auto "
            id="contact"
          />

          <form
            action=""
            className="w-[100%] h-full gap-4  flex flex-col  my-16"
            id="fm"
          >
            <h1 className="  font-bold text-3xl relative top-[-6vh] text-red-400 ">
              {" "}
              Get in Touch
            </h1>

            <div className="flex justify-center items-center text-center">
              <label htmlFor="Name">
                {" "}
                <i
                  className="fa fa-user relative left-3"
                  style={{ fontSize: "12px" }}
                ></i>
              </label>
              <input
                type="text"
                name="name"
                value={querry.name}
                onChange={handler}
                autoComplete="off"
                className=" bg-transparent outline-none px-4 w-[90%] "
                placeholder="Your Name"
              />
              <br />
            </div>

            <div className="flex justify-center items-center text-center">
              <label htmlFor="email">
                <i
                  className="fa fa-envelope relative left-3"
                  style={{ fontSize: "12px" }}
                ></i>
              </label>
              <input
                type="email"
                name="email"
                value={querry.email}
                onChange={handler}
                className=" outline-none px-4 w-[90%]"
                placeholder="Your Email"
              />
              <br />
            </div>
            <div className="flex justify-center items-center text-center">
              <label htmlFor="email">
                <i
                  className="fa fa-phone relative left-3"
                  style={{ fontSize: "12px" }}
                ></i>
              </label>
              <input
                type="Number"
                name="phone"
                value={querry.phone}
                onChange={handler}
                className=" outline-none px-4 w-[90%]"
                placeholder="Mobile Number"
              />
              <br />
            </div>
            <div className="flex justify-center items-center text-center">
              <textarea
                type=""
                name="message"
                value={querry.message}
                onChange={handler}
                rows={5}
                className=" border-2 rounded-sm  px-2 w-[90%]"
                placeholder="Message Here"
              />
              <br />
            </div>

            <div className="flex justify-center items-center text-center">
              <input
                type="button"
                value="Submit"
                className="px-2 py-1 bg-red-400 w-[90%]   box-border font-semibold "
                onClick={submitHandler}
              />
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
