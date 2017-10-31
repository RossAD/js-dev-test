import React from 'react';
import PropTypes from 'prop-types';

const ReloadButton = ({ clickHandler }) => (
  <div className='buttonContainer'>
    <button onClick={clickHandler}>Refresh Manifest</button>
    <style jsx>{`
      .buttonContainer {
        display: flex;
        justify-content: center;
        margin: 20px auto;
      }

      button {
        display: inline-block;
        margin: 0 10px 0 0;
        padding: 15px 35px;
        font-size: 28px;
        line-height: 1.8;
        appearance: none;
        box-shadow: none;
        border-radius: 0;
        color: #fff;
        background-color: #6496c8;
        border: none;
        border-radius: 15px;
        box-shadow: 0 10px #27496d;
      }

      button :hover {
        background-color: #417cb8
      }

      button :active {
        background-color: #417cb8;
        box-shadow: 0 5px #27496d;
        transform: translateY(5px);
      }

      @media only screen and (max-width: 414px) {
        button {
          font-size: 18px
        }  
      }
    `}</style>
  </div>
);

ReloadButton.propTypes = {
  clickHandler: PropTypes.func.isRequired
};

export default ReloadButton;
