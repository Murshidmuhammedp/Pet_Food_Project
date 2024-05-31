import Orders from "../models/orderSchema.js"

// View Orders

export const adminOrders = async (req, res, next) => {
    try {
        const orders = await Orders.find()
        if (!orders || orders.length === 0) {
            res.status(404).json({ message: "not fetch data .try again" });
        }
        res.status(200).json({ message: "successfully fetched", data: orders });
    } catch (error) {
        next(error);
    }
};

// View total revenue

export const Revenue = async (req, res, next) => {
    try {
        const total = await Orders.aggregate([
            {
                $addFields: {
                    productId: { $ifNull: ["$productId", []] }

                }
            },
            {
                $group: {
                    _id: null,
                    totalProduct: { $sum: { $size: "$ProductId" } },
                    totalRevenue: { $sum: "$totalPrice" }
                }
            }
        ]);
        if (total.length > 0) {
            res.status(200).json({ message: "success", data: total[0] });
        } else {
            res.status(200).json({ message: "success", data: { totalProduct: 0, totalRevenue: 0 } });
        }
    } catch (error) {
        next(error);
    }
};
