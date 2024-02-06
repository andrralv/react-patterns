import React from "react";
import './Form.css';

type Props = {
  isLogged: string,
  children: React.ReactElement
}

const Form: React.FC<Props> = (props) => {
  const { isLogged, children } = props;
  return <div>
    <div className={isLogged === 'Logged In!' ? 'logged' : 'not-logged'}>{isLogged}</div>
    <div className={'form-content'}>{children}</div>
  </div>;
};

export default Form;