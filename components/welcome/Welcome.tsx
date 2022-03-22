import { Typography } from "@mui/material"

const Welcome = () => {
    return <Typography>{process.env.NEXT_PUBLIC_WELCOME}</Typography>
}

export default Welcome;