import * as React from 'react';
import { Grid, Row, Col } from 'rsuite';
import CustomInput from '../../../common/CustomInput/CustomInput';
import { Panel } from 'rsuite';
import PanelHeader from '../../../common/PanelHeader/PanelHeader';
import { Slider, RangeSlider, InputGroup, InputNumber } from 'rsuite';


const EmiCalculatorForm = (props: any) => {
    const { setResults } = props || ''
    const [userValues, setUserValues] = React.useState({
        amount: 0,
        interest: 0,
        years: 0,
    });

    const handleInputChange = (name: any, value: any) => {
        setUserValues({ ...userValues, [name]: value })
    }

    React.useEffect(() => {
        const { amount, interest, years } = userValues || ''
        if (amount > 0 && interest > 0 && years > 0) {
            calculateResults(userValues)
        }
    }, [userValues])

    const calculateResults = (userValues: any) => {
        const { amount, interest, years } = userValues || ''
        const userAmount = Number(amount);
        const calculatedInterest = Number(interest) / 100 / 12;
        const calculatedPayments = Number(years) * 12;
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (userAmount * x * calculatedInterest) / (x - 1);

        if (isFinite(monthly)) {
            const monthlyPaymentCalculated = monthly.toFixed();
            const totalPaymentCalculated = (monthly * calculatedPayments).toFixed();
            const totalInterestCalculated = (monthly * calculatedPayments - userAmount).toFixed();

            // Set up results to the state to be displayed to the user
            setResults({
                monthlyPayment: monthlyPaymentCalculated,
                totalPayment: totalPaymentCalculated,
                totalInterest: totalInterestCalculated,
                principleAmount: amount,
                isResult: true,
            });
        }
        return;
    };

    return (
        <>
            <Panel header={<PanelHeader value='EMI Calculator' />} bordered className='mb-3'>
                <Grid fluid>
                    <Row>

                        <Col md={7} sm={12}>
                            <div className='flex flex-col'>
                                <label className='mb-2'>Loan Amount (Lakh)</label>
                                <Slider
                                    progress
                                    style={{ marginTop: 16 }}
                                    value={userValues.amount}
                                    renderTooltip={(val) => <div className='w-[50px]'>{val + ' Lakh'}</div>}
                                    onChange={(val: any) => handleInputChange('amount', val)}
                                    graduated
                                    renderMark={mark => {
                                        return <div className=''>{mark + ' Lakh'}</div>
                                    }}
                                    step={20}
                                />

                                <InputNumber
                                    min={0}
                                    max={100}
                                    placeholder="₹"
                                    className="mt-[30px]"
                                    value={userValues.amount}
                                    onChange={(val: any) => handleInputChange('amount', val)}
                                />
                            </div>
                        </Col>

                        <Col md={7} sm={12} className="ml-5">
                            <div className='flex flex-col'>
                                <label className='mb-2'>Rate of Interest (%)</label>

                                <Slider
                                    progress
                                    style={{ marginTop: 16 }}
                                    value={userValues.interest}
                                    renderTooltip={(val) => <div className='w-[50px]'>{val + ' %'}</div>}
                                    onChange={(val: any) => handleInputChange('interest', val)}
                                    graduated
                                    renderMark={mark => {
                                        return <div className=''>{mark + ' %'}</div>;
                                    }}
                                    step={20}
                                />
                                <InputNumber
                                    min={0}
                                    max={100}
                                    placeholder="%"
                                    className="mt-[30px]"
                                    value={userValues.interest}
                                    onChange={(val: any) => handleInputChange('interest', val)}
                                />
                            </div>
                        </Col>

                        <Col md={7} sm={12} className="ml-5">
                            <div className='flex flex-col'>
                                <label className=''>Tenure (years)</label>
                                <Slider
                                    progress
                                    style={{ marginTop: 16 }}
                                    value={userValues.years}
                                    renderTooltip={(val) => <div className='w-[50px]'>{val + ' Years'}</div>}
                                    onChange={(val: any) => handleInputChange('years', val)}
                                    graduated
                                    renderMark={mark => {
                                        return <div className=''>{mark + ' Yr'}</div>
                                    }}
                                    step={20}
                                />
                                <InputNumber
                                    min={0}
                                    max={100}
                                    className="mt-[30px]"
                                    placeholder="Years"
                                    value={userValues.years}
                                    onChange={(val: any) => handleInputChange('years', val)}
                                />
                            </div>
                        </Col>

                    </Row>
                </Grid>
            </Panel>
            <Panel header={<PanelHeader value='Optimized Loan and save your interest' />} bordered className='mb-3'>
                <Grid fluid>
                    <Row>
                        <Col md={6} sm={12}>
                            <label>Pay extra EMI every year</label>
                            <CustomInput size="lg" placeholder="₹"
                                type="number" className='mt-2' />
                        </Col>
                        <Col md={6} sm={12}>
                            <label>Hike EMI every year</label>
                            <CustomInput size="lg" placeholder="%"
                                type="number" className='mt-2' />
                        </Col>
                    </Row>
                </Grid>
            </Panel>
        </>
    );
}

export default EmiCalculatorForm;