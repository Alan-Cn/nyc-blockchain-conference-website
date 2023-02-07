import styles from "./index.module.scss";
import { Form, Input, Select } from 'antd';
import Image from 'next/image';
import logoLight from "@/public/logo.png"

const Speaker = () => {
  const [form] = Form.useForm();

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.speakerTitle}>
          <span>SPEAKER </span>APPLY
        </div>
        <div className={styles.formTitle}>
          <Image src={logoLight} alt="logo"/>
          PARTNER WITH #NFTNYC2023
        </div>
        <div className={styles.formContent} id='area'>
          <Form form={form} layout="vertical" autoComplete="off">
            <Form.Item name="name" label='FIRST NAME'>
              <Input />
            </Form.Item>
            <Form.Item name="age" label='LAST NAME'>
              <Input />
            </Form.Item>
            <Form.Item name="age1" label='TITLE'>
              <Input />
            </Form.Item>
            <Form.Item name="age2" label='SPONSOR COMPANY NAME'>
              <div className={styles.companyName}>
                <span>As it would be displayed on sponsored materials</span>
                <Input />
              </div>
            </Form.Item>
            <Form.Item name="age3" label='COMPANY OR PROJECT WEBSITE'>
              <Input />
            </Form.Item>
            <Form.Item name="age4" label='EMIAL'>
              <Input />
            </Form.Item>
            <Form.Item name="age5" label='PHONE NUMBER'>
              <Input />
            </Form.Item>
            <Form.Item name="age6" label='TARGET AUDIENCE(BY TRACK)'>
              <Select
                getPopupContainer={() => document.getElementById('area')}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            </Form.Item>
            <Form.Item name="age7" label='SECONDARY AUDIENCE(BY TRACK)'>
              <Select
                getPopupContainer={() => document.getElementById('area')}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            </Form.Item>
          </Form>
          <span className={styles.formTip}>
            Please complete all required fields.
          </span>
          <div className={styles.submit}>
            APPLY
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;