import React from 'react'
import  {useForm,useStep } from 'react-hooks-helper'
import { Checkout } from './step/checkout'
import { Delivery } from './step/delivery'
import { Login } from './step/login'
import { Review } from './step/review'
import { Signup } from './step/signup'
import { Submit } from './step/submit'
import { Payment } from './step/payment'


const defaultData = {
    
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    firstNameDelivery: '',
    lastNameDelivery: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
    cardName: '',
    cardNumber: '',
    cardExpireDate: '',
    cardCVV: '',
};


const steps = [
    {id: 'checkout',},
    {id: 'login',},
    {id: 'signup',},
    {id: 'delivery',},
    {id: 'payment',},
    {id: 'review',},
    {id: 'submit',},
]

export const MulitStepForm = () => {
    
    const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
        steps,
        initialStep:1
    });

    const props = {formData, setForm, navigation, step};

    

    switch(step.id){
        case "checkout":
            return <Checkout {...props}/>;
        case "login":
            return <Login {...props} />;
        case "signup":
            return <Signup {...props} />;
        case "delivery":
            return <Delivery {...props} />;
        case "payment":
            return <Payment {...props} />;
        case "review":
            return <Review {...props} />;
        case "submit":
            return <Submit {...props} />
    }

    
   return (
    <div>
        <h1>Multi Step form</h1>
        </div>
  ) 
}
