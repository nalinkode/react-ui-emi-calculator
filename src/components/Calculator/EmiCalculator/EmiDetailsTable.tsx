import { Table } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;


const EmiDetailsTable = () => {
    const data = [{
        month: 1,
        emi: 0,
        towardsLoan: 0,
        towardInterest: 0,
        outstandingLoan: 0
    },
    {
        month: 1,
        emi: 0,
        towardsLoan: 0,
        towardInterest: 0,
        outstandingLoan: 0
    },{
        month: 1,
        emi: 0,
        towardsLoan: 0,
        towardInterest: 0,
        outstandingLoan: 0
    },{
        month: 1,
        emi: 0,
        towardsLoan: 0,
        towardInterest: 0,
        outstandingLoan: 0
    },{
        month: 1,
        emi: 0,
        towardsLoan: 0,
        towardInterest: 0,
        outstandingLoan: 0
    },{
        month: 1,
        emi: 0,
        towardsLoan: 0,
        towardInterest: 0,
        outstandingLoan: 0
    },{
        month: 1,
        emi: 0,
        towardsLoan: 0,
        towardInterest: 0,
        outstandingLoan: 0
    },{
        month: 1,
        emi: 0,
        towardsLoan: 0,
        towardInterest: 0,
        outstandingLoan: 0
    },{
        month: 1,
        emi: 0,
        towardsLoan: 0,
        towardInterest: 0,
        outstandingLoan: 0
    }]
    return (
        <>
            <Table
                height={400}
                bordered
                cellBordered
                data={data}
                onRowClick={rowData => {
                    console.log(rowData);
                }}
            >
                <Column flexGrow={1}>
                    <HeaderCell>Month</HeaderCell>
                    <Cell dataKey="month" />
                </Column>

                <Column flexGrow={1}>
                    <HeaderCell>EMI</HeaderCell>
                    <Cell dataKey="emi" />
                </Column>

                <Column flexGrow={1}>
                    <HeaderCell>Towards Loan</HeaderCell>
                    <Cell dataKey="towardsLoan" />
                </Column>

                <Column flexGrow={1}>
                    <HeaderCell>Towards Interest</HeaderCell>
                    <Cell dataKey="towardInterest" />
                </Column>

                <Column flexGrow={1}>
                    <HeaderCell>Outstanding Loan</HeaderCell>
                    <Cell dataKey="outstandingLoan" />
                </Column>
            </Table>
        </>
    );
}

export default EmiDetailsTable;