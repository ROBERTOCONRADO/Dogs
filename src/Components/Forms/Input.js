import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.erro}>{error}</p>}
    </div>
  );
};

export default Input;
