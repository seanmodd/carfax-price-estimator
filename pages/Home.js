import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

// mui components
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { fetchMakes, fetchModels, fetchYears } from "../utils/Api";

const Home = () => {
  // state for make
  const [makeValue, setMakeValue] = useState("");
  const [makesData, setMakesData] = useState([{make: 'one'},{make: 'two'},]);

  // state for model
  const [modelValue, setmodelValue] = useState("");
  const [modelsData, setmodelsData] = useState([]);

  // state for year
  const [yearValue, setyearValue] = useState("");
  const [yearsData, setyearsData] = useState([]);

  // updating field selction
  const selectMake = (e) => {
    setMakeValue(e.target.value)
    setmodelValue("")
    setyearValue("")

    fetchModelsData(e.target.value)
  }

  const selectModel = (e) => {
    setmodelValue(e.target.value)

    fetchYearsData(e.target.value)
  }

  const selectYear = (e) => {
    setyearValue(e.target.value)
  }

  const fetchMakesData = () => {
    fetchMakes()
    .then((response) => {
      console.log(response)
      if(response.status === 200){
        setMakesData(response.data.data.getMakes);
      }
    })
    .catch((err) => {
      alert(err?.toString());
    });
  }

  const fetchModelsData = (make) => {
    fetchModels(make)
      .then(res => {
        setmodelsData(res.data.data.getMakeModels)
      })
      .catch((err) => {
        alert(err?.toString());
      });
  }

  const fetchYearsData = (model) => {
    fetchYears(makeValue, model)
      .then(res => {
        setyearsData(res.data.data.getYMMs)
      })
      .catch(err => {
        alert(err?.toString());
      })
  }

  useEffect(() => {
    fetchMakesData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <h1>Carfax Trade-In Demo</h1>

      <div className={styles.form}>
        {/* make select */}
        <span>Select Maker</span>
        <Select
          id="demo-simple-select"
          value={makeValue}
          onChange={selectMake}
        >
          {makesData?.map((item, i) => {
            return <MenuItem key={i?.toString()} value={item.make}>{item.make}</MenuItem>;
          })}
        </Select>

        {/* model select */}
        <span>Select Model</span>
        <Select
          id="demo-simple-select"
          value={modelValue}
          onChange={selectModel}
        >
          {modelsData?.map((item, i) => {
            return <MenuItem key={i?.toString()} value={item.model}>{item.model}</MenuItem>;
          })}
        </Select>

        {/* year select */}
        <span>Select Model</span>
        <Select
          id="demo-simple-select"
          value={yearValue}
          onChange={selectYear}
        >
          {yearsData?.map((item, i) => {
            return <MenuItem key={i?.toString()} value={item.year}>{item.year}</MenuItem>;
          })}
        </Select>
      </div>
    </div>
  );
};

export default Home;
