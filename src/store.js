import React from 'react';
import logo from './logo.svg';
import './App.css';
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import "toastr/build/toastr.min.js";


class Store extends React.Component{
    state = {
      textBookChkd: false,
      textAuditShirtChkd: false,
      textAuditBraceletChkd: false,
      textBookQty: "",
      textAuditShirtQty: "",
      textAuditBraceletQty: "",
      textBookPrice: 20,
      textAuditShirtPrice: 20,
      textAuditBraceletPrice: 10,
      total: 0,
      discount: false
    }                        

    toggleTextAuditBraceletChk = () => {
      this.setState({
        textAuditBraceletChkd: !this.state.textAuditBraceletChkd
      });
    }
    toggleTextAuditShirtChk = () => {
      this.setState({
        textAuditShirtChkd: !this.state.textAuditShirtChkd
      });
    }
    toggleTextBookChk = () => {
      this.setState({
        textBookChkd: !this.state.textBookChkd
      });
    }
    toggleTextBookQty = e => {
      this.setState({
        textBookQty: e.target.value
      });
    }
    toggleTextAuditShirtQty = e => {
      this.setState({
        textAuditShirtQty: e.target.value
      });
    }
    toggleTextAuditBraceletQty = e => {
      this.setState({
        textAuditBraceletQty: e.target.value
      });
    }
   

    submit= () => {
      let total = 0;
      if(this.state.textBookChkd == true){
        total += this.state.textBookQty * this.state.textBookPrice
      }
      if(this.state.textAuditShirtChkd == true){
        total += this.state.textAuditShirtQty * this.state.textAuditShirtPrice
      }                            
      if(this.state.textAuditBraceletChkd == true){
        total += this.state.textAuditBraceletQty * this.state.textAuditBraceletPrice
      }                                
      if(total > 500){
        total -= (total/100)*30
        this.setState({
          total: total,
          discount: true
        });
      } else {
        this.setState({
          total: total
        });
      }
    }
    
    
    render() {
      return (
        <center>
        <table border="2"
        width="700"
        height="0">
        <p>Check all the items you want to order:
        </p>
        <tr style={{ width:200, height:"50px"}}>
            <td style={{paddingRight: "21em"}}>Item</td>
            <td style={{paddingRight: "4em"}}>Qty</td>
            <td>Price</td>
        </tr>

        <tr style={{ width:200, height:"50px", background:"lightgray"}}>
          <td style={{paddingRight: "20em"}}>
          {
              this.state.textBookChkd
                ?
                  <input onChange={this.toggleTextBookChk} checked type="checkbox" />
                :
                  <input onChange={this.toggleTextBookChk} type="checkbox" />
            }
          Text Book
          </td>
          <td style={{paddingRight: "2em"}}>
            <input
            value={this.state.textBookQty}
            onChange={event =>this.toggleTextBookQty(event)} type="number"  name="qty" min="1" max="10000" placeholder="Qty" />
          </td>
          <td>${this.state.textBookPrice}</td>
        </tr>
        <tr style={{ width:200, height:"50px"}}>
          <td style={{paddingRight: "17em"}}>
          {
              this.state.textAuditShirtChkd
                ?
                  <input onChange={this.toggleTextAuditShirtChk} checked type="checkbox" />
                :
                  <input onChange={this.toggleTextAuditShirtChk} type="checkbox" />
            }
          Text Audit Shirt
          </td>
          <td style={{paddingRight: "2em"}}>
            <input
            value={this.state.textAuditShirtQty}
            onChange={this.toggleTextAuditShirtQty} type="number" name="qty" min="1" max="10000" placeholder="Qty" />
          </td>
          <td>${this.state.textAuditShirtPrice}</td>
        </tr>
        <tr style={{ width:200, height:"50px", background: "lightgray"}}>
          <td style={{paddingRight: "17em"}}>
            {
              this.state.textAuditBraceletChkd
                ?
                  <input onChange={this.toggleTextAuditBraceletChk} checked type="checkbox" />
                :
                  <input onChange={this.toggleTextAuditBraceletChk} type="checkbox" />
            }
            Text Audit Brecelet
          </td>
          <td style={{paddingRight: "2em"}}>
            <input 
             value={this.state.textAuditBraceletQty}
            onChange={this.toggleTextAuditBraceletQty} type="number" name="qty" min="1" max="10000" placeholder="Qty" />
            </td>
          <td>${this.state.textAuditBraceletPrice}</td>
        </tr>
        </table>
        <table>
        <tr>
          <td style={{paddingRight: "20em"}}>
            <h4>Total order amount: {this.state.total}</h4>
            {
              this.state.discount
                &&
                  <h4>Congratulations, You got 30% discount!</h4>
            }
          </td>
          <td style={{paddingLeft: "11em"}}>
          <button  
          onClick={this.submit}
          >Submit
          </button></td>
        </tr>
        </table>
        </center>
        );
      }
    }
      
                    
export default Store;