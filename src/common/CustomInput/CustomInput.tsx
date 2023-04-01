import { Input } from 'rsuite';

const styles = {
    marginBottom: 10
};

const CustomInput = (props: any) => {
    return ( <><Input {...props} style={styles}/></> );
}
 
export default CustomInput;