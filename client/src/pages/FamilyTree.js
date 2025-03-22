import React from "react";
import FamilyTree from "../components/FamilyTree";

// Sample JSON data for the family tree
const familyData = {}

const FamilyTreePage = () => {
  return (
    <div style={{}}>
      <h2 style={styles.title}>Family Tree</h2>
      <FamilyTree data={familyData} />
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
