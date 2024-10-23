import Swal from "sweetalert2";

export const waringStatus =()=>{
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      });
}