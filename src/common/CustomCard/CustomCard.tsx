import { Panel } from 'rsuite';
import * as React from 'react';

const CustomCard = (props: any) => {
    const { children } = props || ''

    return (
        <Panel {...props} bordered>
            {children}
        </Panel>
    )
};

export default CustomCard