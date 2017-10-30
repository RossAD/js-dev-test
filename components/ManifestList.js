import React from 'react';
import PropTypes from 'prop-types';

const ManifestList = ({manifest}) => (
  <div className="container">
    <ul>
      {manifest.map(item => (
        <li key={item.id}>
          <span>
            <strong>Make:</strong> {item.make}<br />
            <strong>Model:</strong> {item.model}<br />
            <strong>Color:</strong> {item.color}<br />
            <strong>Time Entered:</strong> {item.enteredAt}
          </span>
        </li>
      ))}
    </ul>
    <style jsx >{`
      .container {
        width: 400px;
        height: 800px;
        overflow: auto;
        border: 1px solid black;
        border-radius: 5px;
      }
       
      h2 {
        font: 400 40px/1.5 Helvetica, Verdana, sans-serif;
        margin: 0;
        padding: 0;
      }
       
      ul {
        list-style-type: none;
        margin: 0;
        padding: 5px;
      }
       
      li {
        font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
        border-bottom: 1px solid #ccc;
      }
       
      li:last-child {
        border: none;
      }
       
      li a {
        text-decoration: none;
        color: #000;
        display: block;
        width: 200px;
       
        -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
        -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
        -o-transition: font-size 0.3s ease, background-color 0.3s ease;
        -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
        transition: font-size 0.3s ease, background-color 0.3s ease;
      }
       
      li a:hover {
        font-size: 30px;
        background: #f6f6f6;
      }
    `}
    </style>
  </div>
);

ManifestList.propTypes = {
  manifest: PropTypes.array.isRequired,
};

export default ManifestList;
