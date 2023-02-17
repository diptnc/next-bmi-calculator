import Head from 'next/head';
import { useState } from 'react';
import styles from './bmiCalculator.module.scss';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');
  
  const calculateBMI = () => {
    const calculatedBMI = (weight / ((height / 100) ** 2)).toFixed(2);
    setBMI(calculatedBMI);
  };
  
  return (
    <>
      <Head>
        <title>BMI Calculator</title>
        <meta name="description" content="Calculate your BMI with our easy to use BMI calculator." />
       
        <meta name='keywords' content='nextjs, react, bmi, calculator,diptanu chakraborty' />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>BMI Calculator</h1>
        <div className={styles.inputContainer}>
          <label htmlFor="weight">Weight (kg)</label>
          <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="height">Height (cm)</label>
          <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <button onClick={calculateBMI}>Calculate</button>
        {bmi && <div className={styles.bmiContainer}>Your BMI: {bmi}</div>}
      </div>
      <footer className={styles.footer}>
       Developed by &nbsp;<a
          href="https://diptanuchakraborty.in"
          target="_blank"
        >
          {' ' } diptanuchakraborty.in
        </a>
      </footer>
    </>
  );
}
