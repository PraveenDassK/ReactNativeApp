import client from "./client";

const endpoint = "/regmodule/SaveCustomerAccountDetails"

const saveCustomerAccountDetails = ( customerDetails ) => client.post(endpoint, customerDetails)

export default {
    saveCustomerAccountDetails,
}