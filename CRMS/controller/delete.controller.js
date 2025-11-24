import userModel from "../model/userModel.js";
class deleteController{

    async handleDeleteById(req, res){
        try{
            const { id } = req.params;
            const existingId = await userModel.findByIdAndDelete(id);

            if( !existingId){
                return res.status(400).json({
                    message: "User not found",
                }
            )};

            return res.status(200).json({
                message: `User with ID deleted successfully`
            });
        }
        catch(err){
            return res.status(500).json({
                message: "Internal Server Error",
                error: err.message,
            })
        }
    }

    async handleDeleteByEmail(req, res){
        try{
            const { email } = req.params;

            const existingEmail = await userModel.findOneAndDelete(email);

            if(!existingEmail ){
                return res.status(400).json({
                    message: "User not found",
                }
            )};

            return res.status(200).json({
                message: `User with provided email deleted successfully`
            });
        }
        catch(err){
            return res.status(500).json({
                message: "Internal Server Error",
                error: err.message,
            })
        }
    }

    async handleDeleteAll(req, res){
        try{
            await userModel.deleteMany({});

            return res.status(200).json({
                message: `All users deleted successfully`
            });
        }
        catch(err){
            return res.status(500).json({
                message: "Internal Server Error",
                error: err.message,
            })
        }
    }
}
const deleteUser = new deleteController();
export default deleteUser;