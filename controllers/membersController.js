import Member from "../models/members.model.js";

//Add a Member
export async function addMember(req, res) {
  try {
    let member = await Member.create(req.body);
    if (member) {
      res.status(200).json({
        success: true,
        message: "Member created successfully",
        data: member,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Member could not be created at this time",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}

//View a member
export async function viewMember(req, res) {
  try {
    let member = await Member.findAll({ where: { member_id: req.params.id } });
    if (allmembers) {
      res.json({
        success: true,
        message: "Member records retrieved successfully",
        data: member,
      });
    } else {
      res.json({
        success: true,
        message: "No Member records found.",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}

//View all members
export async function viewAllMembers(req, res) {
  try {
    let allmembers = await Member.findAll();
    if (allmembers) {
      res.json({
        success: true,
        message: "Member records retrieved successfully",
        data: allmembers,
      });
    } else {
      res.json({
        success: true,
        message: "No Member records found.",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}

//Update member record
export function updateMember(req, res) {
  let updatedOps = {};
  const id = req.params.member_id;
  for (const ops of req.body) {
    updatedOps[ops.propName] = ops.value;
  }

  member
    .updateOne({ member_id: id }, { $set: updatedOps })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "Member record updated",
        data: member,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        err: err,
        message: "Oopss! Something is wrong...",
      });
    });
}

//Delete a member
export function deleteMember(req, res) {
  const updatedOps = {};
  const id = req.params.member_id;

  member
    .remove({ member_id: id })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "Member record deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        err: err,
        message: "Oopss! Something is wrong...",
      });
    });
}
