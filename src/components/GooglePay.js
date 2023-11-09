import React from "react";
import GooglePayButton from "@google-pay/button-react";
import "../style/Payment.scss";

const GooglePay = ({ cart }) => {
    const price = cart.reduce((total, item) => total + item.price * item.amount, 0);

    const paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
        {
            type: "CARD",
            parameters: {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: ["MASTERCARD", "VISA"],
            },
            tokenizationSpecification: {
            type: "PAYMENT_GATEWAY",
            parameters: {
                gateway: "example",
                gatewayMerchantId: "exampleGatewayMerchantId",
            },
            },
        },
        ],
        merchantInfo: {
        merchantId: "132123-12323-1223-0232",
        merchantName: "Abdelaziz Sleem",
        },
        transactionInfo: {
        totalPriceStatus: "FINAL",
        totalPriceLabel: "Total",
        totalPrice: price.toString(),
        currencyCode: "USD",
        countryCode: "EG",
        },
        shippingAddressRequired: true,
        callbackIntents: ["PAYMENT_AUTHORIZATION"],
    };

    const onLoadPaymentData = (paymentRequest) => {
        console.log(paymentRequest);
    };

    const onPaymentAuthorized = (paymentData) => {
        console.log("paymentData", paymentData);
        return { transactionState: "SUCCESS" };
    };

    return (
        <div className="Google_pay">
        <GooglePayButton
            className="Google_btn"
            environment="TEST"
            paymentRequest={paymentRequest}
            onLoadPaymentData={onLoadPaymentData}
            onPaymentAuthorized={onPaymentAuthorized}
            existingPaymentMethodRequired={false}
            buttonColor="black"
            buttonType="Buy"
        />
        </div>
    );
    };

export default GooglePay;