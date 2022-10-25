import {
  Checkbox,
  Form,
  Input,
} from 'antd';
import React, { useState } from 'react';
import Button from './Button';
import Text, { getLocaleText } from './Text';

export const RegistryModalContent: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    const authenticateUser = () =>{
      const endpoint = `https://api.loginradius.com/identity/v2/auth/login?apikey=${123}`;

      fetch(endpoint,
        {
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(values),
        }).then(response=>response.json())
        .then(data=>{
          //API Success from LoginRadius Login API
        })
        .catch(error=>console.log(error));
    };

    authenticateUser();
  };
  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  return (
    <div className='w-full p-6'>
      <div className='w-full py-12 text-center font-bold text-4xl font-title'>
        <Text tid='registryTitle' />
      </div>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >

        <Form.Item
          name="firstName"
          tooltip="What do you want others to call you?"
          rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
        >
          <Input placeholder={getLocaleText('registryFirstName')} />
        </Form.Item>

        <Form.Item
          name="secondName"
          rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
        >
          <Input placeholder={getLocaleText('registrySecondName')} />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder={getLocaleText('registryEMail')} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder={getLocaleText('password')} />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (! value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder={getLocaleText('passwordConfirm')} />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
        >
          <Checkbox>
           <Text tid='registryNotice' /> <a href=""><Text tid='registryNoticeLink' /></a>
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button>
            <Text tid='registryButton' />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};