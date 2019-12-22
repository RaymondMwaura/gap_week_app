/* eslint-disable react/prop-types */
import React from 'react';
import './Labels.css';

const Labels = ({ props }) => {
  const { updateExchangeRate, currenciesToUse } = props;

  return (
    <div className="firstLabelsDiv">
      <div>Country</div>
      <span />
      <div>
        <button
          type="button"
          className="convertBtn"
          onClick={() => updateExchangeRate(currenciesToUse)}
        >
        Convert
        </button>
      </div>
      <span />
      <div>Country</div>
    </div>
  );
};

export default Labels;
