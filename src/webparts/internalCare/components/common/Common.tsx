import { Checkbox, Radio, TextField, Button, Select } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { CheckboxProps } from "@material-ui/core/Checkbox";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import { RadioProps } from "@material-ui/core/Radio";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { IPivotStyles } from "office-ui-fabric-react";
import * as React from "react";
import { ITheme } from 'spfx-js-theme';
const theme: ITheme = window.__themeState__.theme;
//themeLighter
//themeSecondary

export const shareholderInputTheam = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        zIndex: 1
      }
    },
    MuiInput: {
      root: {
        "&$disabled": {
          "color": "#B2B2B4"
        }
      },
      underline: {
        //borderBottom: "1px solid #275458",
        "&:after": {
          borderBottom: "1px solid #275458!important"
        }
        // "&:before": {
        //   borderBottom: "1px solid #275458!important"
        // }
      },
      // disabled:{
      //   color: "#B2B2B4"
      // }
    },
    MuiInputLabel: {
      root: {
        "&$after": {
          zIndex: 1
        },
        "&$before": {
          zIndex: -1
        },
        cursor: "auto",
        color: "#275458",
        "&$focused": {
          color: "#275458"
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#275458"
        }
      }
    }
  }
});

export const CustomSelect = withStyles({
  root: {
    "& label": {
      color: "#275458"
    },
    "& label.Mui-focused": {
      color: "#275458"
    },
    "& .MuiInput-underline": {
      color: "#000"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#275458"
    },
    "& .MuiInput-underline:hover": {
      borderBottomColor: "#275458"
    },
    "&:before": {
      borderColor: "#275458"
    },
    "&:after": {
      borderColor: "#275458"
    }
  }
})(Select);

export const outerTheme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        zIndex: 1
      }
    },
    MuiInputBase: {
      input: {
        zIndex: -1
      }
    },
    MuiInput: {
      underline: {
        "&:after": {
          borderBottom: "1px solid #275458!important"
        },
        "&:before": {
          borderBottom: "1px solid #275458!important"
        }
      },
      root: {
        color: "black",
        borderColor: "#275458",
        "& after": {
          color: "black",
          borderColor: "#275458"
        },
        "& fieldset": {
          color: "black",
          borderColor: "#275458"
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#275458"
        }
      }
    },
    MuiInputLabel: {
      root: {
        cursor: "auto",
        color: "#275458",
        "&$focused": {
          color: "#275458"
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#275458"
        }
      }
    }
  },
  palette: {
    primary: {
      light: "#ab8266",
      main: "#275458",
      dark: "#69452c",
      contrastText: "#fff"
    },
    secondary: {
      main: "#cb2030"
    }
  }
});

export const CustomTextField = withStyles({
  root: {
    "& .MuiInputBase-input": {
      zIndex: -1,
      color: "black",
      borderColor: theme.themeSecondary
    },
    "& .MuiInputBase-input:after": {
      color: "black",
      borderColor: theme.themeSecondary
    },
    "& .MuiInputBase-input:focus": {
      color: theme.themeSecondary,
      borderColor: theme.themeSecondary
    },
    "& .MuiInputLabel-animated": {
      color: theme.themeSecondary
    },
    "& .MuiInputLabel-animated:after": {
      color: theme.themeSecondary,
      zIndex: -1
    },
    "& .MuiInputLabel-animated:before": {
      color: theme.themeSecondary,
      zIndex: 1
    },
    "& .MuiInputBase-input:hover": {
      color: theme.themeSecondary,
      borderColor: theme.themeSecondary
    },
    "& .MuiTextField-root": {
      color: theme.themeSecondary
    },
    "& label.MuiTextField-root": {
      color: theme.themeSecondary
    },
    "& label.MuiTextField-root:before": {
      color: theme.themeSecondary,
      zIndex: 1
    },
    "& label.MuiTextField-root:after": {
      color: theme.themeSecondary,
      zIndex: -1
    },
    "& label.Mui-focused": {
      color: theme.themeSecondary
    },
    "& .MuiInput-underline:after": {
      zIndex: 1,
      borderBottomColor: theme.themeSecondary
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.themeSecondary
      },
      "&:hover fieldset": {
        borderColor: theme.themeSecondary
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.themeSecondary
      }
    },
    focused: { color: theme.themeSecondary }
  }
})(TextField);

export const DisbaleTextField = withStyles({
  root: {
    "& .MuiInputBase-input": {
      zIndex: -1,
      borderColor: "#bdbdbf"
    },
    "& .MuiInputBase-input:after": {
      borderColor: "#bdbdbf"
    },
    "& .MuiInputBase-input:focus": {
      color: "#bdbdbf",
      borderColor: "#bdbdbf"
    },
    "& .MuiInputLabel-animated": {
      color: "#bdbdbf"
    },
    "& .MuiInputLabel-animated:after": {
      color: "#bdbdbf",
      zIndex: -1
    },
    "& .MuiInputLabel-animated:before": {
      color: "#bdbdbf",
      zIndex: 1
    },
    "& .MuiInputBase-input:hover": {
      color: "#bdbdbf",
      borderColor: "#bdbdbf"
    },
    "& .MuiTextField-root": {
      color: "#bdbdbf"
    },
    "& label.MuiTextField-root": {
      color: "#bdbdbf"
    },
    "& label.MuiTextField-root:before": {
      color: "#bdbdbf",
      zIndex: 1
    },
    "& label.MuiTextField-root:after": {
      color: "#bdbdbf",
      zIndex: -1
    },
    "& label.Mui-focused": {
      color: "#bdbdbf"
    },
    "& .MuiInput-underline:after": {
      zIndex: 1,
      borderBottomColor: "#bdbdbf"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#bdbdbf"
      },
      "&:hover fieldset": {
        borderColor: "#bdbdbf"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#bdbdbf"
      }
    },
    focused: { color: "#bdbdbf" }
  }
})(TextField);

export const CustomCheckbox = withStyles({
  root: {
    color: "#275458",
    "&$checked": {
      color: "#275458"
    },
    "&$disabled": {
      color: "#d8c1b1"
    },
    disabled: {}
  },
  checked: {}
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export const CustomRadio = withStyles({
  root: {
    color: theme.themeSecondary,
    "&$checked": {
      color: theme.themeSecondary
    }
  },
  disabled: {
    color: "#B2B2B4",
    "&$checked": {
      color: "#B2B2B4"
    }
  },
  checked: {}
})((props: RadioProps) => <Radio color="default" {...props} />);

export const SucessButton = withStyles({
  root: {
    color: "white",
    backgroundColor: "#4caf50",
    "&:hover": {
      backgroundColor: "#4caf50"
    },
    "&$disabled": {
      background: "rgba(0, 0, 0, 0.12)",
      color: "black",
      boxShadow: "none"
    }
  },
  disabled: {
    background: "#B2B2B4",
    color: "#777777",
    boxShadow: "none"
  }
})(Button);

export const NextButton = withStyles({
  root: {
    color: "white",
    backgroundColor: theme.themeSecondary,
    "&:hover": {
      backgroundColor: theme.themeSecondary
    },
    "&$disabled": {
      background: "rgba(0, 0, 0, 0.12)",
      color: "black",
      boxShadow: "none"
    }
  },
  disabled: {
    background: "#B2B2B4",
    color: "#777777",
    boxShadow: "none"
  }
})(Button);

export const BackButton = withStyles({
  root: {
    color: "white",
    backgroundColor: "#888EA8",
    "&:hover": {
      backgroundColor: "#888EA8"
    },
    "&$disabled": {
      background: "rgba(0, 0, 0, 0.12)",
      color: "black",
      boxShadow: "none"
    }
  },
  disabled: {
    background: "#B2B2B4",
    color: "#777777",
    boxShadow: "none"
  }
})(Button);

export const ErrorButton = withStyles({
  root: {
    color: "white",
    backgroundColor: "#dc3545",
    "&:hover": {
      backgroundColor: "#dc3545"
    }
  }
})(Button);

// export const SucessButton = withStyles({
//   root: {
//     color: "white",
//     backgroundColor: "#28a745",
//     "&:hover": {
//       backgroundColor: "#28a745"
//     }
//   }
// })(Button);


export const state_DD = [
  { key: "NA", text: "-- Please Select State --" },
  { key: "AL", text: "Alabama" },
  { key: "Ak", text: "Alaska" },
  { key: "AZ", text: "Arizona" },
  { key: "AR", text: "Arkansas" },
  { key: "CA", text: "California" },
  { key: "CO", text: "Colorado" },
  { key: "CT", text: "Connecticut" },
  { key: "DE", text: "Delaware" },
  { key: "DC", text: "District Of Columbia" },
  { key: "FL", text: "Florida" },
  { key: "GA", text: "Georgia" },
  { key: "HI", text: "Hawaii" },
  { key: "ID", text: "Idaho" },
  { key: "IL", text: "Illinois" },
  { key: "IN", text: "Indiana" },
  { key: "IA", text: "Iowa" },
  { key: "KS", text: "Kansas" },
  { key: "KY", text: "Kentucky" },
  { key: "LA", text: "Louisiana" },
  { key: "MA", text: "Maine" },
  { key: "MD", text: "Maryland" },
  { key: "MA", text: "Massachusetts" },
  { key: "MI", text: "Michigan" },
  { key: "MN", text: "Minnesota" },
  { key: "MS", text: "Mississippi" },
  { key: "MO", text: "Missouri" },
  { key: "MT", text: "Montana" },
  { key: "NE", text: "Nebraska" },
  { key: "NV", text: "Nevada" },
  { key: "NH", text: "New Hampshire" },
  { key: "NJ", text: "New Jersey" },
  { key: "NM", text: "New Mexico" },
  { key: "NY", text: "New York" },
  { key: "NC", text: "North Carolina" },
  { key: "ND", text: "North Dakota" },
  { key: "OH", text: "Ohio" },
  { key: "OK", text: "Oklahoma" },
  { key: "OR", text: "Oregon" },
  { key: "PA", text: "Pennsylvania" },
  { key: "RI", text: "Rhode Island" },
  { key: "SC", text: "South Carolina" },
  { key: "SD", text: "South Dakota" },
  { key: "TN", text: "Tennessee" },
  { key: "TX", text: "Texas" },
  { key: "UT", text: "Utah" },
  { key: "VT", text: "Vermont" },
  { key: "VA", text: "Virginia" },
  { key: "WA", text: "Washington" },
  { key: "WV", text: "West Virginia" },
  { key: "WI", text: "Wisconsin" },
  { key: "WY", text: "Wyoming" },
  { key: "Other", text: "Other" }
]

export const UnRestrictedButton = withStyles({
  root: {
    color: "black",
    backgroundColor: "#C5D9F1",
    "&:hover": {
      backgroundColor: "#C5D9F1"
    },
    "&$disabled": {
      background: "rgba(0, 0, 0, 0.12)",
      color: "black",
      boxShadow: "none"
    }
  },
  disabled: {
    background: "#B2B2B4",
    color: "#777777",
    boxShadow: "none"
  }
})(Button);

export const RestrictedButton = withStyles({
  root: {
    color: "black",
    backgroundColor: "#f2dcdb",
    "&:hover": {
      backgroundColor: "#f2dcdb"
    },
    "&$disabled": {
      background: "rgba(0, 0, 0, 0.12)",
      color: "black",
      boxShadow: "none"
    }
  },
  disabled: {
    background: "#B2B2B4",
    color: "#777777",
    boxShadow: "none"
  }
})(Button);

export const VestedButton = withStyles({
  root: {
    color: "black",
    backgroundColor: "#D8E4BC",
    "&:hover": {
      backgroundColor: "#D8E4BC"
    },
    "&$disabled": {
      background: "rgba(0, 0, 0, 0.12)",
      color: "black",
      boxShadow: "none"
    }
  },
  disabled: {
    background: "#B2B2B4",
    color: "#777777",
    boxShadow: "none"
  }
})(Button);

export const UnvestedButton = withStyles({
  root: {
    color: "black",
    backgroundColor: "#E4DFEC",
    "&:hover": {
      backgroundColor: "#E4DFEC"
    },
    "&$disabled": {
      background: "rgba(0, 0, 0, 0.12)",
      color: "black",
      boxShadow: "none"
    }
  },
  disabled: {
    background: "#B2B2B4",
    color: "#777777",
    boxShadow: "none"
  }
})(Button);


