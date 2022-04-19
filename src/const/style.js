import colors from './colors'


const style = {
    content: {
        background: colors.vilagoskek,
        minHeight: '100vh'
    },
    btnPrim: {
        background: colors.sotetkek,
        color: colors.vilagoskek,
        fontWeight:'bolder'
    },
    btnSec: {
        color: colors.sotetkek,
        border: 'solid 1px ' + colors.sotetkek
    },
    message: {
        color: colors.piros,
        fontWeight: "bolder",
        textAlign:'center'
    },
    strip_form:{
        border: 'solid 1px ' + colors.sotetkek,
        borderRadius:5,
        background:colors.feher
    },
    btnPlus:{
        background: colors.sotetkek,
        color: colors.vilagoskek,
        border: 'solid 1px ' + colors.sotetkek,
        borderRadius:'50%',
        width:60,
        height:60,
        fontWeight:'bolder',
        fontSize:30
    }
}
export {style}