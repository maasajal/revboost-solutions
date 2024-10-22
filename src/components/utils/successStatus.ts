import Swal from "sweetalert2";

export const messageStatus = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your message send successfully",
    showConfirmButton: false,
    timer: 1500,
  });
};
