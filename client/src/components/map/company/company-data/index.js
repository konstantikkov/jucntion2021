import React from 'react'
import Chart from "react-google-charts"
import "./index.css"

export default function Graphics(props) {
    return (
        <div>
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="300px"

                legend="none"
                data={[
                    ["", "Data", { role: "value" }],

                    ["Total Sum", props.total_sum, "#FFC909"],
                    ["Total CO₂", props.total_sum / props.per_euro, "#F13F3F"],
                ]}
            />
        </div>
    )
}
