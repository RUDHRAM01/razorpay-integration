const Razorpay = require('razorpay');
require('dotenv').config();
const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY } = process.env;

const razorpay = new Razorpay({
    key_id: RAZORPAY_ID_KEY,
    key_secret: RAZORPAY_SECRET_KEY
});

const renderDashboard = (req, res) => {
    try {
        res.render('Dashboard');
    
    }catch(err) {
        console.log(err);
    }
}

const createOrder = async (req, res) => {
    try {
        const amount = 100;
        const options = {
            amount: amount,
            currency: 'INR',
            receipt: 'rudhram@gmail.com'
        }

        razorpay.orders.create(options, 
            (err, order)=>{
                if(!err){
                    res.status(200).send({
                        success:true,
                        msg:'Order Created',
                        order_id:order.id,
                        amount:amount,
                        key_id:RAZORPAY_ID_KEY,
                        product_name:"test",
                        description:"testing successful",
                        contact:"xxxxxxxxxx",
                        name: "rudhram",
                        email: "rudhram@gmail.com"
                    });
                }
                else{
                    res.status(400).send({success:false,msg:'Something went wrong!'});
                }
            }
        );

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    renderDashboard,
    createOrder,
}