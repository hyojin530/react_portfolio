import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart} from 'victory';
import { Container, Row, Col } from 'reactstrap';
import "../css/Stack.css"

const CHART_WIDTH = 400;

function BarChart(props) {
    return (
        <div className='bars' style={{width:CHART_WIDTH, top: -20 * props.num, position:'relative', display:'inline-block'}}>
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

function Category(){
    return(
        <div className="categorybox">
            <p>
                cate
            </p>
        </div>
    )
}

function Stack() {
    return (
        <div className='techstack'>
            <div>
                <p className="stack-text">TECH STACKS</p>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <p className="sub-text">OVERVIEW</p>
                        </div>
                        <div className='chart'>
                            <BarChart stack='Python' percent='75' loc={8} num={1} />
                            <BarChart stack='Flask' percent='60' loc={6} num={2} />
                            <BarChart stack='Mysql' percent='65' loc={7} num={3} />
                            <BarChart stack='Pytorch' percent='25' loc={9} num={4} />
                            <BarChart stack='Java' percent='40' loc={5} num={5} />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p className="sub-text">EXPERIENCE</p>
                        </div>
                        <Row xs="2">
                            <Category />
                            <Category />
                            <Category />
                            <Category />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Stack;