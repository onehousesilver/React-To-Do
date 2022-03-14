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
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("Email", { required: true })} placeholder="Email" />
        <input
          {...register("firstname", { required: true })}
          placeholder="firstname"
        />
        <input
          {...register("lastname", { required: true })}
          placeholder="lastname"
        />
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder="username"
        />
        <input
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 5,
              message: "Your password too shorts",
            },
          })}
          placeholder="password"
        />

        <input
          {...register("password1", { required: true })}
          placeholder="password1"
        />
        <button>add</button>
      </form>
    </div>
  );
}
export default ToDoList;
