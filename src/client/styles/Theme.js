import {
  createMuiTheme
} from "@material-ui/core/styles";
import LandingImg from 'media/landing_back.jpg';
export default createMuiTheme({
  global: {
    html: {},
    body: {},
    a: {
      textDecoration: 'none',
    },
  },
  globalHome: {
    body: {
      backgroundImage: 'url(' + LandingImg + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
  },
  appBarStyle: {
    background: 'rgba(255,255,255,0.3)',
    boxShadow: 'none'
  },
})