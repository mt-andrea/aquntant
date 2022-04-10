import colors from './colors'
const style = {
    content: {
        background: colors.vilagoskek,
        height: '100vh'
    },
    btnPrim: {
        background: colors.sotetkek,
        color: colors.vilagoskek
    },
    btnSec: {
        color: colors.sotetkek,
        border: 'solid 1px ' + colors.sotetkek
    },
    message: {
        color: colors.piros,
        fontWeight: "bolder"
    },
    strip_form:{
        width:'80%',
        border: 'solid 1px ' + colors.sotetkek,
        borderRadius:5,
        height:60,
        background:colors.feher
    },
    btnPlus:{
        background: colors.sotetkek,
        color: colors.vilagoskek,
        border: 'solid 1px ' + colors.sotetkek,
        borderRadius:'50%',
        width:60,
        fontWeight:'bolder',
        fontSize:30
    }
}
export default style