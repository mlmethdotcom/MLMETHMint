import React, { useEffect, useState, useRef } from "react";
import metamaskIcon from "./metamask.svg";
import Web3 from 'web3';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from the uuid library
// import { Entity, Scene } from "aframe-react";
import "./styles.css";

import axios from 'axios';
import * as d3 from 'd3';

const ConnectToMetamask = ({ connectToMetamask }) => {
  const [value, setValue] = useState('');



  return (
    <div className="container" >
      <div className="jumbotron custom-jumbotron">
        <h1 className="display-5 text-center">
          MLMETH
        </h1>
        <h3 className="display-5 p-4 text-center">
          Multi-Level Marketing Ethereum
        </h3>

        <img src="images/main.png" width="100%" alt="Herbalife Pepe" />

                    <p className="p-2">

                    <a href="https://github.com/#" ><i class="fab fa-github large-icon"></i></a>
                    &nbsp;&nbsp;
                    <a href="https://x.com/mlmeth_com" ><i class="fab fa-twitter large-icon"></i></a>
                    &nbsp;&nbsp;
                    <a href="https://t.me/mlmeth" ><i class="fab fa-telegram large-icon"></i></a>
                    &nbsp;&nbsp;
                    <a href="#" ><i class="fab fa-youtube large-icon"></i></a>
                    &nbsp;&nbsp;
                    <a href="#" ><i class="fab fa-tiktok large-icon"></i></a>

                    <hr className="my-4" />
                    <button
                      onClick={connectToMetamask}
                      className="btn btn-primary d-flex align-items-center"
                      style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
                    >
                      Connect Wallet
                    </button>
                    </p>


        <hr className="my-2" />
        MLMETH.com &copy; 2023 All rights reserved.
        <hr className="my-2" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
