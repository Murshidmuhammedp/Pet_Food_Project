import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    ProductId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }],
    purchaseDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    orderTime: {
        type: String,
        required: true,
        default: new Date().toTimeString()
    },
    orderId: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    Status:{
        type:String,
        required:true,
        default:"Delivered"
    }
});

const Orders = mongoose.model('Orders', orderSchema);
export default Orders;