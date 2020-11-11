import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart} from 'victory';
import "../css/Stack.css"

const CHART_WIDTH = 400;

function BarChart(props) {
    return (
        <div
            style={{
                width: CHART_WIDTH,
                position: 'relative',
                top: -20 * props.num
            }} >
            <VictoryChart height={80} width={CHART_WIDTH}>
                <VictoryAxis
                    dependentAxis
                    tickValues={[props.loc, 95]}
                    offsetY={30}
                    tickFormat={t => t === props.loc ? props.stack : props.percent}
                    style={{ axis: { stroke: 'black' } }}
                />

                <VictoryBar
                    barWidth={6}
                    data={[{ y: [props.percent], x: [1] }]}
                    domain={{ y: [0, 100], x: [0, 1] }}
                    style={{ label: { fill: 'black' } }}
                    horizontal
                />
            </VictoryChart>
        </div>
    );
}

function Stack() {
    return (
        <div className='techstack'>
            <div>
                <p className="stack-text">TECH STACKS</p>
            </div>
            <div className='chart'>
                <BarChart className='bar' stack='Python' percent='75' loc={8} num={1}/>
                <BarChart className='bar' stack='Flask' percent='60' loc={6} num={2}/>
                <BarChart className='bar' stack='Mysql' percent='65' loc={7} num={3}/>
                <BarChart className='bar' stack='Pytorch' percent='25' loc={9} num={4}/>
                <BarChart className='bar' stack='Java' percent='40' loc={5} num={5}/>
            </div>
        </div>


    )
}


export default Stack;