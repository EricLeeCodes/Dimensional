import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useApplicationData = function () {
  const [error, setError] = useState();
  const [notes, setNotes] = useState([]);

  const fetchData = useCallback(() => {
    Promise.all([axios.get("/api/notes")])
      .then((all) => {
        setNotes(all[0].data.notes);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  }, []);

  // Fetch data on first render
  useEffect(() => {
    fetchData();
  }, []);

  // const addItem = function (name) {
  //   axios
  //     .post("/api/items", { name })
  //     .then((res) => {
  //       console.log(res.data);
  //       setData([res.data, ...data]);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     });
  // };

  // const deleteItem = function (id) {
  //   axios
  //     .delete(`/api/items/${id}`)
  //     .then((res) => {
  //       setData(data.filter((item) => item.id !== id));
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     });

  //   setData(data.filter((item) => item.id !== id));
  // };

  return { notes, fetchData };
};

export default useApplicationData;
