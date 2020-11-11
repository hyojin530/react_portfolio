import React from 'react';
import '../css/Stack.css';
import '../App.css';
import { Container, Row, Col } from "reactstrap";
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLabel, VictoryStack } from 'victory';

const data = [
    {stack: 'react.js', percent: 30},
    {stack: 'python', percent: 70},
    {stack: 'java', percent: 50},
    {stack: 'flask', percent: 60}
];

const data100 = [
    { stack: 'react.js', percent: 70 },
    { stack: 'python', percent: 30 },
    { stack: 'java', percent: 50 },
    { stack: 'flask', percent: 40 }
]

function StackBar(props) {
    return (
        <div class="stackbar">
            <VictoryChart domainPadding={30}>
                <VictoryAxis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["recat.js", "python", "java", "flask"]}
                />
                <VictoryStack>
                    <VictoryBar
                        horizontal
                        data={data}
                        labels={({ datum }) => datum.percent}
                        labelComponent={<VictoryLabel dy={0} />}
                        style={{
                            labels: { fill: 'black' },
                            data: { fill: 'green' }
                        }}
                        x='stack'
                        y='percent'
                    />
                    <VictoryBar
                        horizontal
                        data={data100}
                        x='stack'
                        y='percent'
                    />
                </VictoryStack>
            </VictoryChart>
        </div>
    )
}

function Stack2() {
    return (
        <div id="stack">
            <StackBar />
            <p>test</p>
        </div>
    )
}

export default Stack2;