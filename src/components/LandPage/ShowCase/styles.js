import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
    root: {
        textAlign: 'center',
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1.0',
        height: '80vh',
        marginTop: '25px',
        flexDirection: 'column'
    },
    pic: {
        maxHeight: '100%',
        boxShadow: '5px 5px 5px gray',
        borderRadius: 10
    },
    des: {
        maxHeight: '20%'
    }
}));