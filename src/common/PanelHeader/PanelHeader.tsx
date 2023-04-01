

const PanelHeader = (props: any) => {
    const { value } = props || ''
    return (
        <div className='font-semibold text-[19px]'>{value}</div>
    )
}

export default PanelHeader