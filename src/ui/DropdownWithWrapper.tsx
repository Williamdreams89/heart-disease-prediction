import React, {FC, useState} from 'react'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import "./styles/inputFieldStyles.css"


interface Sex {
    male: number;
    female: number;
}

const SexDropdownWithWrapper= () => {
    const genderOptions = [
        { label: 'Male', value: 1 },
        { label: 'Female', value: 0 },
      ];
        
    

    return (
        <div className="container">
      <label htmlFor="">Sex</label>
      <Dropdown
        optionLabel="label"
        optionValue="value"
        placeholder="Category"
        options={genderOptions}
      />
    </div>
    )
}

export default SexDropdownWithWrapper