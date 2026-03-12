
import { Status, Info, Progress, Percentage } from "./styles";



function AnalyticsCard({ title, value, percent }) {
    return (
        <Status className="Status">
            <Info>
                <h3>{title}</h3>
                <h1>{value}</h1>
            </Info>
            <Progress>
                <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <Percentage>
                    <p>{percent}</p>
                </Percentage>
            </Progress>
        </Status>
    );
}
export default AnalyticsCard;