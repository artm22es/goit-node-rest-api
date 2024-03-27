import HttpError from "../helpers/HttpError.js";
import * as contactsServices from "../services/contactsServices.js";

export const getAllContacts = async (req, res, next) => {
  //   try {
  //     const result = await contactsServices.listContacts();
  //     res.json(result);
  //   } catch (error) {
  //     next(error);
  //   }
};

export const getOneContact = async (req, res, next) => {
  //   try {
  //     const { id } = req.params;
  //     const result = await contactsServices.getContactById(id);
  //     if (!result) {
  //       throw HttpError(404);
  //     }
  //     res.json(result);
  //   } catch (error) {
  //     next(error);
  //   }
};

export const deleteContact = (req, res) => {};

export const createContact = (req, res) => {};

export const updateContact = (req, res) => {};
