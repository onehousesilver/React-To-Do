import React, { useState } from "react";
import { useForm } from "react-hook-form";
// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = e;
//     setToDoError("");
//     setToDo(value);
//   };
//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError("To do should be longer");
//     }
//     console.log("submit");
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           type="text"
//           onChange={onChange}
//           value={toDo}
//           placeholder="뭐라도 쓰셈"
//         />
//         <button>add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("firstname")} placeholder="firstname" />
        <input {...register("lastname")} placeholder="lastname" />
        <input {...register("username")} placeholder="username" />
        <input {...register("password")} placeholder="password" />
        <input {...register("password1")} placeholder="password1" />
        <button>add</button>
      </form>
    </div>
  );
}
export default ToDoList;
