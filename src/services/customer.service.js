import axios from "axios";

export const getCustomers = (callback) => {
  axios
    .get("http://localhost:45678/customers")
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCustomerById = (id, callback) => {
  axios
    .get(`http://localhost:45678/customers/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateCustomerById = (id, data, callback) => {
  axios
    .patch(`http://localhost:45678/customers/${id}`, data)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}