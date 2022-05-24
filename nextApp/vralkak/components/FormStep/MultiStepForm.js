import React from 'react'
import  {useForm,useStep } from 'react-hooks-helper'
import { Checkout } from './step/checkout'
import { Leverans } from './step/leverans'
import { Login } from './step/login'
import { Review } from './step/review'
import { Signup } from './step/signup'
import { Submit } from './step/submit'
import { Betalning } from './step/betalning'


const defaultData = {
    
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword :'',
    firstNameDelivery: '',
    lastNameDelivery: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
    deliveryWay: '',
    infoToDriver: '',
    cardName: '',
    cardNumber: '',
    cardExpireDate: '',
    cardCVV: '',
};


const steps = [
    
    {id: 'checkout',},
    {id: 'login',},
    {id: 'signup',},
    {id: 'leverans',},
    {id: 'betalning',},
    {id: 'review',},
    {id: 'submit',},
]

export const MulitStepForm = () => {
    
    const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
        steps,
        initialStep:0
    });

    const props = {formData, setForm, navigation, step};

    

    switch(step.id){
        case "checkout":
            return <Checkout {...props}/>;
        case "login":
            return <Login {...props} />;
        case "signup":
            return <Signup {...props} />;
        case "leverans":
            return <Leverans {...props} />;
        case "betalning":
            return <Betalning {...props} />;
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
