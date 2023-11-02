import React, { Component } from "react";
import CryptoBoyNFTImage from "../CryptoBoyNFTImage/CryptoBoyNFTImage";
import queryString from 'query-string'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';



import db  from "../../database";

class FormAndPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoPunkIndex: "",
      cryptoBunkImageURL: "/images/punks/punk-0001x8.png",
      cryptoBoyPrice: "",
      maxForThisRun: 0,
      addressTo: "",
      gasScore: "",
      gasScoreLot: "",
      gasScoreHome: "",
      gasTotal: "",
      homeStyle: "",
    };
  }


  Load_New_URL= async (e)=>{
    var newUrl  = e.target.value;
    if(newUrl == "Undeveloped"){
      window.alert('Virtual Reality Undeveloped');
    }else{
      const newWindow = window.open(newUrl, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  }

  Load_New_URLOpensea= async (e)=>{
    var newUrl  = e.target.value;
    if(newUrl == "Unassigned"){
      window.alert('Home Owner Unassigned');
    }else{
      const newWindow = window.open('https://opensea.io/' + newUrl, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  }
  Load_New_URLOSM= async (e)=>{
    var newUrl  = e.target.value;
    if(newUrl == "Unassigned"){
      window.alert('Home Owner Unassigned');
    }else{
      const newWindow = window.open(newUrl, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  }
  Load_New_Image= async (e)=>{
      this.state.punkid =e.target.value;
      if (e.target.value ==undefined) {
        this.state.punkid =e.target.id;
      }
//      window.alert(this.state.punkid);
      if(this.state.punkid<1 || this.state.punkid>8000){
        this.state.punkid = 1
      }
      var developedLand = 1;
      const home = db[this.state.punkid];

      if (home.homeurl != "Undeveloped"){
          developedLand = 6;
      }
      var tmpLotSize = home.lotsize + "";
      this.state.gasScoreLot = tmpLotSize.substring(9,tmpLotSize.indexOf(" Square Feet"));
      this.state.gasScoreLot = this.state.gasScoreLot * 3;

      this.state.gasScoreHome = home.homesize.substring(9,home.homesize.indexOf(" Square Feet"));
      this.state.gasScoreHome = this.state.gasScoreHome * 2

      this.state.gasScore = (8001-this.state.punkid) * 18 * developedLand;

      this.state.homeStyle = home.homestyle;

      var s = this.state.punkid+"";
      while (s.length < 4) s = "0" + s;

      var newImageUrl = '/images/punks/punk-' + s + 'x8.png';
      this.setState({
        cryptoBunkImageURL : newImageUrl
      })

      this.state.gasTotal = this.state.gasScoreLot + this.state.gasScore  + this.state.gasScoreHome;
      //this.state.gasScore = this.props.lotSize.substring(9, this.props.lotSize.indexOf(" Square Feet"));
      //window.alert('Not Available: Home Owner ' + home.lotsize);

    }

  componentDidMount = async () => {

    window.scrollTo(0, 0);
    console.log(this.props);
    let punkid = new URLSearchParams(this.props.location.search).get( "punkid" );
    if(punkid === '' || punkid === null || punkid === undefined)punkid = "1";
    this.setState({ punkid });

  };

  callClaimPunkFromApp = (e) => {
    e.preventDefault();
      this.props.claimPunk(
        this.state.punkid
      );
  };





  render() {

    //const elements = this.props.cryptoBoys;

    const items = []
    const itemsHomes = []
    const itemsBottomHomes = []
    const itemsBottom = []

    let startHouse = Math.floor(this.state.punkid/20);

    if(this.state.punkid%20 >1){

    }


    return (
      <div>

        <div class="container">
        <div class="card col-md-12 text-center" >
                    <div class="card-body">
    <h6 class="card-subtitle mb-2">Mint Amount (Max 5 per Wallet)</h6>
    <div>
      <input
        required
        type="number"
        name="punkid"
        id="punkid"
        value={this.state.punkid}
        className="form-control"
        placeholder="Enter Home NO"
        onChange={(e) =>
          this.Load_New_Image(e)
        }
      />
    </div>


        <form onSubmit={this.callClaimPunkFromApp} className="pt-4 mt-1">
          <div className="row">
          <div className="col-md-12">
            FREE Mint 5000
            <div>
              <button
                id="mintBtn22"
                style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
                type="submit"
                className="btn mt-4 btn-block btn-outline-primary"
              >
                Mint
              </button>
              </div>
            </div>
          </div>
        </form>
                    </div>
        </div>
        </div>

          <hr className="my-4" />
              MLMETH.com &copy; 2023 All rights reserved.
          <hr className="my-4" />
      </div>
    );
  }
}

export default FormAndPreview;
