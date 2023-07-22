import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertMessage(props) {
  const {show, data, onhide, message} = props;

  if (show) {
    if (data === 'success') 
    return (
      <Alert variant="success" onClose={onhide} dismissible>
        <Alert.Heading>{message}</Alert.Heading>
        
      </Alert>
    );
    else{
        return (
            <Alert variant="danger" onClose={onhide} dismissible>
        <Alert.Heading>{message}</Alert.Heading>
        
      </Alert>
        )
    }
  }
}

export default AlertMessage;