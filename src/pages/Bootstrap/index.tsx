import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import Header from "../../components/Header";
import ModalAuth from "../../components/ModalAuth";
import Banner from "../../components/Banner";

function BoostrapEx() {
  const [show, setShow] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState<string>("login");

  const handleToggle = (status: boolean, type: string) => {
    setIsLoginForm(type);
    setShow(status);
  };
  const notify = () =>
    toast.error("Wow so easy!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <>
      <Header onShow={handleToggle} />
      <ModalAuth show={show} onClose={handleToggle} isLoginForm={isLoginForm} />
      <Banner />

      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </>
  );
}

export default BoostrapEx;
