import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({

});




theme.props = {

  MuiButton: { // `MuiButton` is the global class name for the <Button /> component

    disableElevation: true, // this prop disables the drop shadow on all Buttons

  },

};
theme.overrides = {

  MuiButton: {

    root: {

      borderRadius: 0, // square corners

      textTransform: 'none', // removes uppercase transformation

    },

    containedPrimary: {

      '&:hover': { // changes colors for hover state

        backgroundColor: theme.palette.secondary.main,

        color: theme.palette.primary.dark,

      },

    },

    containedSecondary: {

      fontWeight: 700, // makes text bold

    },

  },

};

export default theme;