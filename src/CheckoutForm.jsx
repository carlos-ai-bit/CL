// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const cardElement = elements.getElement(CardElement);
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });
//     if (error) {
//       console.log(error);
//       // Handle payment error
//     } else {
//       console.log(paymentMethod);
//       // Handle successful payment
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit">Pay Now</button>
//     </form>
//   );
// };

// export default CheckoutForm;
