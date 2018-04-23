import React from 'react';
import { Button } from 'reactstrap';
import './PrimaryButton.css';

export default ({ children, href, onClick }) => (
    <Button
      className="PrimaryButton d-flex justify-content-center align-items-center"
      href={href}
      onClick={onClick}
    >
        {children}
    </Button>
)
