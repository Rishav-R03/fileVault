export const homePageController = (req,res)=>{
    res.status(200).json({
        message:"Welcome to home page!",
        success:true
    })
}

export default homePageController;