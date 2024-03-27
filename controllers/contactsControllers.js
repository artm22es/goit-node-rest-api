import HttpError from "../helpers/HttpError.js";
import * as contactsServices from "../services/contactsServices.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

export const getAllContacts = ctrlWrapper(async (req, res) => {
  const result = await contactsServices.listContacts();

  res.json(result);
});

export const getOneContact = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const result = await contactsServices.getContactById(id);
  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
});

export const createContact = ctrlWrapper(async (req, res) => {
  const result = await contactsServices.addContact(req.body);

  res.status(201).json(result);
});

export const updateContact = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const result = await contactsServices.updateContactById(id, req.body);
  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
});

export const deleteContact = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const result = await contactsServices.removeContact(id);
  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
});
