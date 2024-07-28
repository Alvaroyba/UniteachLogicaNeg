const axios = require('axios');
const { DATA_ACCESS_API } = require('../../config/endpoints');
const { httpError } = require('../helpers/handleError');

const getUsers = async (req, res) => {
    try {
        const response = await axios.get(`${DATA_ACCESS_API}/users`);
        res.status(200).json(response.data);
    } catch (error) {
        httpError(res, error);
    }
};

const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await axios.get(`${DATA_ACCESS_API}/users/${userId}`);
        res.status(200).json(response.data);
    } catch (error) {
        httpError(res, error);
    }
};

const createUserController = async (req, res) => {
    try {
        const userData = req.body;
        const response = await axios.post(`${DATA_ACCESS_API}/users`, userData);
        res.status(201).json(response.data);
    } catch (error) {
        httpError(res, error);
    }
};

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const response = await axios.patch(`${DATA_ACCESS_API}/users/${userId}`, userData);
        res.status(200).json(response.data);
    } catch (error) {
        httpError(res, error);
    }
};

const deleteUserController = async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await axios.delete(`${DATA_ACCESS_API}/users/${userId}`);
        res.status(200).json(response.data);
    } catch (error) {
        httpError(res, error);
    }
};

module.exports = { getUsers, getUser, createUserController, updateUser, deleteUserController };
