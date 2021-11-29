import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import styles from '../styles/Home.module.css';
import { fetchMakes, fetchModels, fetchYears } from '../utils/Api';

const Home = () => {
  console.log('Home.js');
  return (
    <div className={styles.mainContainer}>
      <h1>Carfax Trade-In Demo</h1>
    </div>
  );
};

export default Home;
