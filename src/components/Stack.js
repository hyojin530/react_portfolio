import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart} from 'victory';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import "../css/Stack.css";
import webimg from '../img/webfront.png';
import serverimg from '../img/server.png';
import aiimg from '../img/ai.png';
import androidimg from '../img/android.png';

const CHART_WIDTH = 400;

const imglist = [webimg, serverimg, aiimg, androidimg];

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

function Category(props){
    var sectionStyle = {
        width: "100%",
        height: "100px",
        backgroundImage: "url(" + props.img + ")",
        backgroundSize: '60px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };

    return(
        <div className="categorybox">
            <div className="cate-name">
                <p>{props.name}</p>
            </div>
            <div className="cate-img" style={sectionStyle}>
            </div>
            <div className="cate-detail">
                detail
            </div>
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
                        <Row>
                            <Col>
                                <Category name='Web' img={imglist[0]}/>
                                <Category name='Data/AI' img={imglist[1]}/>
                            </Col>
                            <Col>
                                <Category name='Server' img={imglist[2]}/>
                                <Category name='Android' img={imglist[3]}/>                               
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Stack;