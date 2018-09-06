import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'kawax-js';
import VerifyData from '../components/VerifyData';
import TransactionFlow from '../components/TransactionFlow';
import SignTransaction from '../actions/SignTransaction';
import RecoverAddress from '../actions/RecoverAddress';
import CreateTransaction from '../actions/CreateTransaction';

class EthProtocol extends React.Component {

  static stateToProps = ({ select }) => ({
    signature: select('signature'),
    hexData: select('hexData'),
    recoveredAddress: select('address'),
    transactionHash: select('createTransaction.TransactionCreated.transactionHash'),
    transactionAddressCreation: select('createTransaction.TransactionCreated.returnValues.from'),
    transactionId: select('createTransaction.TransactionCreated.returnValues.transactionId'),
    hashedDataPassedIn: select('createTransaction.LogMyHash.returnValues.theHash')
  });

  static propTypes = {
    signTransaction: PropTypes.func.isRequired,
    signature: PropTypes.string,
    recoverAddress: PropTypes.func.isRequired,
    recoveredAddress: PropTypes.string,
    createTransaction: PropTypes.func.isRequired,
    transactionHash: PropTypes.string,
    transactionAddressCreation: PropTypes.string,
    transactionId: PropTypes.string,
    hashedDataPassedIn: PropTypes.string
  };

  static dispatchToProps = {
    signTransaction: SignTransaction.export(),
    recoverAddress: RecoverAddress.export(),
    createTransaction: CreateTransaction.export()
  };

  static defaultProps = {
    signature: String(),
    recoverAddress: String(),
    transactionHash: String(),
    transactionAddressCreation: String(),
    transactionId: String()
  }

  render() {
    return (
      <div>
      <VerifyData
        signTransaction={this.props.signTransaction}
        signature={this.props.signature}
        hexData={this.props.hexData}
        recoverAddress={this.props.recoverAddress}
        recoveredAddress={this.props.recoveredAddress}
      />
      <TransactionFlow
        createTransaction={this.props.createTransaction}
        transactionHash={this.props.transactionHash}
        transactionAddressCreation={this.props.transactionAddressCreation}
        transactionId={this.props.transactionId}
        hashedDataPassedIn={this.props.hashedDataPassedIn}
      />
      </div>
    );
  }

}

export default Container(EthProtocol);
