import * as React from 'react';
import { Row, Col } from 'rsuite';
import CustomCard from '../../../common/CustomCard/CustomCard';
import { Panel } from 'rsuite';
import CurrencyFormat from 'react-currency-format';
import PanelHeader from '../../../common/PanelHeader/PanelHeader';

const EmiDetailsCard = (props: any) => {
    const { results } = props || ''

    return (
        <>
            <Panel header={<PanelHeader value='Details' />} bordered className='mb-3'>
                <Row>
                    <Col md={6} sm={12}>

                        <CustomCard header="Principle Amount" color='green'
                            style={{ background: 'rgb(4 151 237)', width: '350px' }}
                        >
                            <div className='text-[24px]'>
                                <CurrencyFormat value={results.principleAmount}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₹'}
                                    renderText={value =>
                                        <div>{value}</div>} />
                            </div>
                        </CustomCard>
                    </Col>
            
                    <Col md={6} sm={12} lg={6}>
                        <CustomCard header="Total Amount to be Paid"
                            style={{ background: 'rgb(253 232 21)', width: '350px' }}
                        >
                            <div className='text-[24px]'>
                                <CurrencyFormat value={results.totalPayment}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₹'}
                                    renderText={value =>
                                        <div>{value}</div>} />
                            </div>
                        </CustomCard>
                    </Col>
                    <Col md={6} sm={12}>
                        <CustomCard header="Total Interest Paid"
                            style={{ background: 'rgb(255 0 0)', width: '350px' }}
                        >
                            <div className='text-[24px]'>
                                <CurrencyFormat value={results.totalInterest}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₹'}
                                    renderText={value =>
                                        <div>{value}</div>} />
                            </div>
                        </CustomCard>
                    </Col>

                    <Col md={6} sm={12}>
                        <CustomCard header="Monthly EMI" color='green' 
                        style={{ background: '#73ed04', width: '350px' }}
                        >
                            <div className='text-[24px]'>
                                <CurrencyFormat value={results.monthlyPayment}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₹'}
                                    renderText={value =>
                                        <div>{value}</div>} />
                            </div>
                        </CustomCard>
                    </Col>
                </Row>
            </Panel>
        </>
    );
}

export default EmiDetailsCard;