import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
    useSystemColorTheme: true,
    fonts: {
        ...theme.fonts,
        body: "Circular Std"
    },
    colors: {
      ...theme.colors
    }
})


export default  customTheme;