import {useLocation, Link as RouterLink, NavLink} from 'react-router-dom'
import {Breadcrumbs, Typography, Link as MUILink} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function toTitleCase(str) {
    return str.replace(/\b\w+/g, function (s) {
        return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase()
    })
}


export default function CustomBreadcrumbs() {
    let location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x)
    function linkCompo(to, value) {
        return (
            <MUILink  underline="hover">
                <NavLink key={to} to={to} style={{textDecoration: "none"}} exact end>
                    { ({isActive}) => isActive ?
                        <Typography variant="h3" gutterBottom sx={{color: 'text.primary', fontWeight: 'bold'}}>
                            {toTitleCase(value)}
                        </Typography> :
                        <Typography variant="h3" gutterBottom sx={{color: 'text.primary'}}>
                            {toTitleCase(value)}
                        </Typography>
                    }
                </NavLink>
            </MUILink>
        )
    }

    return (
        <Breadcrumbs aria-label='Breadcrumb' separator={<NavigateNextIcon fontSize="small" />} gutterBottom>
            {linkCompo("/", "home")}
            {
                pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`
                    return (
                        linkCompo(to, value)
                    )
                })
            }
        </Breadcrumbs>
    )
}