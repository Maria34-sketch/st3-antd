import React from "react";
import { Button, Form, Input, Typography } from "antd";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
function SignIn() {

 const navigate = useNavigate();
 function handleClick(){
    navigate("/home")
 }

 
  return (
    <div className="appBg">
      <Form className="loginForm">
        <Typography.Title><center>Welcome Back!</center> </Typography.Title>
        <Form.Item
          label="Email"
          name={"myEmail"}
          rules={[
            {
              required: true,
              message: "Please input your username!", 
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name={"password"}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            variant="contained"
            type="primary"
            style={{ background: "grey", border: "1px solid" }}
            size="large" onClick={handleClick} 
          >
            Add
          </Button>
        </Form.Item>
      </Form>
      <loginForm />
    </div>
  );
}

export default SignIn;
