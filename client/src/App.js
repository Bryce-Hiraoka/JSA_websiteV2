import React, { useEffect, useState } from 'react';
import AppRoutes from "./routes";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
      <Layout>
        <AppRoutes />
      </Layout>
  );
}

export default App;