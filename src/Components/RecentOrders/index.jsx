
import { SectionOrders, OrdersCard, ShowAll } from "./styles"



function RecentOrders() {
    const orders = [
        {
            course: "JavaScript Tutorial",
            number: "85743",
            payment: "Due",
            status: "Pending",
        },
        {
            course: "CSS Full Course",
            number: "97245",
            payment: "Refunded",
            status: "Declined",
        },
        {
            course: "Flex-Box Tutorial",
            number: "36452",
            payment: "Paid",
            status: "Active",
        },
    ];

    return (
        <SectionOrders>
            <h2>Recent Orders</h2>

            <OrdersCard>
                <table>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Course Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((item, index) => (
                            <tr key={index}>
                                <td>{item.course}</td>
                                <td>{item.number}</td>
                                <td>{item.payment}</td>
                                <td className={item.status.toLowerCase()}>{item.status}</td>
                                <td className="details">Details</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </OrdersCard>

            <ShowAll>Show All</ShowAll>
        </SectionOrders>
    );
}
export default RecentOrders;