import React, { Component } from 'react';


class Account extends Component {
  constructor(){
    super()
    this state = {
      balance: 0
    }
    handleDepositClick(e){
    const amount = ParseInt(this.inputBox.value);
    const updatedAmount = ParseInt(this.state.balance + amount);
    this.setState({
      balance: updatedAmount
    })
    }
    handleWithdrawClick(e){
    const updatedWithdraw = this.state.balance - amount;
    this.setState({
      balance: updatedWithdraw
    })
    }
  }
  render() {
        let balance = 'balance';
        if(this.state.balance === 0) {
          balance += 'zero';
        }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balance}>$0</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input}/>
        <input type="button" value="Deposit" />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
