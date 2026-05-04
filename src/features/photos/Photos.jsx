import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

function Photos() {
  var [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3600/photos", {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPhotos([...data]);
      });
  }, []);
  var photoForm = useFormik({
    initialValues: {
      photo: "",
    },
    onSubmit: (values) => {
      var fd = new FormData();
      fd.append("photo", values.photo);

      console.log(values);
      fetch("http://localhost:3600/uploadPhoto", {
        method: "POST",
        headers: {
          token: window.localStorage.getItem("token"),
        },
        body: fd,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    },
  });
  return (
    <div>
      <h1>Photos</h1>
      <form onSubmit={photoForm.handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          name="photo"
          onChange={(ev) => {
            photoForm.setFieldValue("photo", ev.currentTarget.files[0]);
          }}
        />
        <button>Upload</button>
      </form>
      <ul>
        {photos?.map((photo) => {
          return (
            <li>
              <img
                src={"http://localhost:3600/" + photo.photoUrl}
                width="100px"
                alt=""
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Photos;
