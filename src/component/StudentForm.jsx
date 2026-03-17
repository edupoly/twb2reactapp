import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
function StudentForm() {
  var studentForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      age: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .required("First name is Mandatory")
        .min(3)
        .matches(/^[a-zA-Z]+$/, "first name sarigga ivvu"),
      age: Yup.number().test((a, ctx) => {
        if (a >= 25) {
          return true;
        } else {
          if (ctx.parent.gender === "m" && a < 25) {
            return ctx.createError({
              message: "Arey neeku pellendura nadu,,,",
            });
          }
          if (ctx.parent.gender === "f" && a < 21) {
            return ctx.createError({ message: "koncham time theesko" });
          } else {
            return true;
          }
        }
      }),
    }),
    onSubmit: () => {
      console.log(studentForm.values);
    },
  });
  useEffect(() => {
    studentForm.setValues({
      firstname: "raveena",
      age: 44,
      gender: "f",
      lastname: "tondon",
    });
  }, []);
  return (
    <div className="mybox">
      <h2>StudentForm</h2>
      <p>{JSON.stringify(studentForm.getFieldProps("gender")?.value)}</p>
      <form onSubmit={studentForm.handleSubmit}>
        <input type="text" {...studentForm.getFieldProps("firstname")} />
        <b>
          {studentForm?.touched.firstname && studentForm?.errors?.firstname && (
            <>
              <br />
              <b>{studentForm?.errors.firstname}</b>
            </>
          )}
        </b>
        <br />
        <input type="text" {...studentForm.getFieldProps("lastname")} />
        <br />
        <input
          type="radio"
          {...studentForm.getFieldProps("gender")}
          value="f"
          checked={studentForm.getFieldProps("gender")?.value == "f"}
        />
        :Female
        <input
          type="radio"
          {...studentForm.getFieldProps("gender")}
          value="m"
        />
        :Male
        <input
          type="radio"
          {...studentForm.getFieldProps("gender")}
          value="o"
        />
        :Others
        <br />
        <input type="text" {...studentForm.getFieldProps("age")} />
        <b>
          {studentForm?.touched.age && studentForm?.errors?.age && (
            <>
              <br />
              <b>{studentForm?.errors.age}</b>
            </>
          )}
        </b>
        <br />
        <button type="submit">Show Student</button>
      </form>
    </div>
  );
}

export default StudentForm;
