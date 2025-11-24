import userModel from "../model/userModel.js";

class updateController {
  async updateById(req, res) {
    try {
      const { id } = req.params;
      const updateUser = await userModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!updateUser) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      return res.status(200).json({
        message: "User updated successfully",
        data: updateUser,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  }

  async updateByEmail(req, res) {
    try {
      const { email } = req.params;
      
      const updateUser = await userModel.findOneAndUpdate({ email }, req.body, {
        new: true,
      });

      if (!updateUser) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      return res.status(200).json({
        message: "User updated successfully",
        data: updateUser,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  }
}
const updateUser = new updateController();
export default updateUser;
