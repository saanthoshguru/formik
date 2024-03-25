import * as Yup from 'yup'

export const SignupValidation = Yup.object({
    name:Yup.string().min(3).required("Please Enter Name"),
    email:Yup.string().email("Please Enter Valid Email").required("please enter mailid"),
    password:Yup.string().min(5).required('please enter password'),
    confirmpass:Yup.string().oneOf([Yup.ref("password")],"Password not matched").required('Please enter confirmpass')
})
