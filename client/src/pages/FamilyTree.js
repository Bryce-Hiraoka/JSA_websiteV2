import React, { useState, useEffect } from "react";
import FamilyTree from "../components/FamilyTree";
import { useParams } from "react-router-dom";

const FamilyTreePage = () => {

  const { id } = useParams();

  const [family, setFamily] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/tree/get_json/${id}`)
    .then((res) => res.json())
    .then((json) => setFamily(json))
    .catch((err) => console.error("Error Fetching Tree: ", err));
  }, []);

  return (

    <div style={{}}>
      <h2 style={styles.title}>Family Tree</h2>
      <FamilyTree data={family} />
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
};

export default FamilyTreePage;
