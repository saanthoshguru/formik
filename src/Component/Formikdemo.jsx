import React from 'react'
import { Formik,Form,Field} from 'formik';
import { SignupValidation } from './SignupValidation';

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmpass: ''
}

const Formikdemo = () => {

    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}>
            <Formik initialValues={initialValues} validationSchema={SignupValidation}>
                {({errors})=>(
                    <Form >
                        <label htmlFor='name'>Name</label><br />
                        <Field type="text" name="name"></Field>
                    <br />
                    {errors.name && <small>{errors.name}</small> }
                    <br />
                        <label htmlFor='email'>Email</label><br />
                        <Field type="email" name="email"></Field>
                    <br />
                    {errors.email && <small>{errors.email}</small> }
                    <br />
                        <label htmlFor='password'>Password</label><br />
                        <Field type="password" name="password"></Field>
                    <br />
                    {errors.password && <small>{errors.password}</small> }
                    <br />
                        <label htmlFor='confirmpass'>Confirm Password</label><br />
                        <Field type="password" name="confirmpass"></Field>
                    <br />
                    {errors.confirmpass && <small>{errors.confirmpass}</small> }
                    <br />
                        <button type='submit'>Submit</button>
                    </Form>
                )}   
            </Formik>
        </div>
    )
}


export default Formikdemo;
