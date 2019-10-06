import {
  createMuiTheme
} from "@material-ui/core/styles";
export default createMuiTheme({
  '@global': {
    html: {},
    body: {},
    a: {
      textDecoration: 'none',
    },
  },
  appBarStyle: {
    background: 'rgba(255,255,255,0.3)',
    boxShadow: 'none'
  },
  ht: '20px'
})