const asyncHandler = require("express-async-handler")

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all contacts" })
})

//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createContacts = asyncHandler(async (req, res) => {
    res.status(201).json({ message: "Create contacts" })
})

module.exports = { getContacts, createContacts }
