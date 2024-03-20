import React from "react";
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Link } from '@mui/material';
import { ListItem } from '@mui/material';
import { List } from '@mui/material';
import { Box } from '@mui/material';
const FooterG = () => {
  return (
    <Box
      sx={{
        fontFamily: 'TT Commons, Roboto, sans-serif',
        backgroundColor: 'grey',
        color: 'black',
        width: '100%',
        maxWidth: '1600px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        ' @media(max-width:479px)': { fontSize: '14px' },
      }}>
      <Grid
        container
        rowSpacing={'10px'}
        columnSpacing={'10px'}
        sx={{ padding: '30px 20px' }}>
        <Grid item xs={12.0} sm={6.0} md={4.0} lg={2.0} xl={2.0}>
          <Stack
            sx={{
              alignItems: 'flex-start',
              width: '100%',
              paddingTop: '10px',
              paddingLeft: '14px',
              ' @media(max-width:991px)': {
                paddingLeft: '0px',
                paddingTop: '0px',
                alignItems: 'center',
                gap: '0px',
              },
              ' @media(max-width:479px)': {
                alignItems: 'center',
                paddingLeft: '0px',
                gap: '0px',
              },
            }}
            spacing="0px">
            <Typography  > Gharaana</Typography>
              
            
            <Stack sx={{ alignItems: 'center' }} spacing="10px" direction="row">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgIGhlaWdodD0iMjQiID4KCQkJCQkJCQkJCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNywyVjJIMTdWNkgxNUMxNC4zMSw2IDE0LDYuODEgMTQsNy41VjEwSDE0TDE3LDEwVjE0SDE0VjIySDEwVjE0SDdWMTBIMTBWNkE0LDQgMCAwLDEgMTQsMkgxN1oiPjwvcGF0aD4KCQkJCQkJCQkJCQkJPC9zdmc+"
                style={{
                  ' @media(max-width:479px)': { width: '19px', height: '19px' },
                }}
                width="28px"
                height="28px"
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTUxMiA5Ny4yNDhjLTE5LjA0IDguMzUyLTM5LjMyOCAxMy44ODgtNjAuNDggMTYuNTc2IDIxLjc2LTEyLjk5MiAzOC4zNjgtMzMuNDA4IDQ2LjE3Ni01OC4wMTYtMjAuMjg4IDEyLjA5Ni00Mi42ODggMjAuNjQtNjYuNTYgMjUuNDA4QzQxMS44NzIgNjAuNzA0IDM4NC40MTYgNDggMzU0LjQ2NCA0OGMtNTguMTEyIDAtMTA0Ljg5NiA0Ny4xNjgtMTA0Ljg5NiAxMDQuOTkyIDAgOC4zMi43MDQgMTYuMzIgMi40MzIgMjMuOTM2LTg3LjI2NC00LjI1Ni0xNjQuNDgtNDYuMDgtMjE2LjM1Mi0xMDkuNzkyLTkuMDU2IDE1LjcxMi0xNC4zNjggMzMuNjk2LTE0LjM2OCA1My4wNTYgMCAzNi4zNTIgMTguNzIgNjguNTc2IDQ2LjYyNCA4Ny4yMzItMTYuODY0LS4zMi0zMy40MDgtNS4yMTYtNDcuNDI0LTEyLjkyOHYxLjE1MmMwIDUxLjAwOCAzNi4zODQgOTMuMzc2IDg0LjA5NiAxMDMuMTM2LTguNTQ0IDIuMzM2LTE3Ljg1NiAzLjQ1Ni0yNy41MiAzLjQ1Ni02LjcyIDAtMTMuNTA0LS4zODQtMTkuODcyLTEuNzkyIDEzLjYgNDEuNTY4IDUyLjE5MiA3Mi4xMjggOTguMDggNzMuMTItMzUuNzEyIDI3LjkzNi04MS4wNTYgNDQuNzY4LTEzMC4xNDQgNDQuNzY4LTguNjA4IDAtMTYuODY0LS4zODQtMjUuMTItMS40NEM0Ni40OTYgNDQ2Ljg4IDEwMS42IDQ2NCAxNjEuMDI0IDQ2NGMxOTMuMTUyIDAgMjk4Ljc1Mi0xNjAgMjk4Ljc1Mi0yOTguNjg4IDAtNC42NC0uMTYtOS4xMi0uMzg0LTEzLjU2OCAyMC44MzItMTQuNzg0IDM4LjMzNi0zMy4yNDggNTIuNjA4LTU0LjQ5NnoiIHN0eWxlPSIiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwM2E5ZjQiIG9wYWNpdHk9IjEiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                style={{
                  ' @media(max-width:479px)': { width: '19px', height: '19px' },
                }}
                width="23px"
                height="23px"
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgIGhlaWdodD0iMjQiID4KCQkJCQkJCQkJCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMSwyMUgxN1YxNC4yNUMxNywxMy4xOSAxNS44MSwxMi4zMSAxNC43NSwxMi4zMUMxMy42OSwxMi4zMSAxMywxMy4xOSAxMywxNC4yNVYyMUg5VjlIMTNWMTFDMTMuNjYsOS45MyAxNS4zNiw5LjI0IDE2LjUsOS4yNEMxOSw5LjI0IDIxLDExLjI4IDIxLDEzLjc1VjIxTTcsMjFIM1Y5SDdWMjFNNSwzQTIsMiAwIDAsMSA3LDVBMiwyIDAgMCwxIDUsN0EyLDIgMCAwLDEgMyw1QTIsMiAwIDAsMSA1LDNaIj48L3BhdGg+CgkJCQkJCQkJCQkJCTwvc3ZnPg=="
                style={{
                  ' @media(max-width:479px)': { width: '19px', height: '19px' },
                }}
                width="32px"
                height="32px"
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJNMzczLjQwNiAwSDEzOC41OTRDNjIuMTcyIDAgMCA2Mi4xNzIgMCAxMzguNTk0VjM3My40MUMwIDQ0OS44MjggNjIuMTcyIDUxMiAxMzguNTk0IDUxMkgzNzMuNDFDNDQ5LjgyOCA1MTIgNTEyIDQ0OS44MjggNTEyIDM3My40MVYxMzguNTk0QzUxMiA2Mi4xNzIgNDQ5LjgyOCAwIDM3My40MDYgMHptMTA4LjU3OCAzNzMuNDFjMCA1OS44NjctNDguNzA3IDEwOC41NzQtMTA4LjU3OCAxMDguNTc0SDEzOC41OTRjLTU5Ljg3MSAwLTEwOC41NzgtNDguNzA3LTEwOC41NzgtMTA4LjU3NFYxMzguNTk0YzAtNTkuODcxIDQ4LjcwNy0xMDguNTc4IDEwOC41NzgtMTA4LjU3OEgzNzMuNDFjNTkuODY3IDAgMTA4LjU3NCA0OC43MDcgMTA4LjU3NCAxMDguNTc4em0wIDAiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMjU2IDExNi4wMDRjLTc3LjE5NSAwLTEzOS45OTYgNjIuOC0xMzkuOTk2IDEzOS45OTZTMTc4LjgwNCAzOTUuOTk2IDI1NiAzOTUuOTk2IDM5NS45OTYgMzMzLjE5NiAzOTUuOTk2IDI1NiAzMzMuMTk2IDExNi4wMDQgMjU2IDExNi4wMDR6bTAgMjQ5Ljk3NmMtNjAuNjQgMC0xMDkuOTgtNDkuMzM1LTEwOS45OC0xMDkuOTggMC02MC42NCA0OS4zNC0xMDkuOTggMTA5Ljk4LTEwOS45OCA2MC42NDUgMCAxMDkuOTggNDkuMzQgMTA5Ljk4IDEwOS45OCAwIDYwLjY0NS00OS4zMzUgMTA5Ljk4LTEwOS45OCAxMDkuOTh6TTM5OS4zNDQgNjYuMjg1Yy0yMi44MTMgMC00MS4zNjcgMTguNTU5LTQxLjM2NyA0MS4zNjcgMCAyMi44MTMgMTguNTU0IDQxLjM3MSA0MS4zNjcgNDEuMzcxczQxLjM3LTE4LjU1OCA0MS4zNy00MS4zNy0xOC41NTgtNDEuMzY4LTQxLjM3LTQxLjM2OHptMCA1Mi43MTljLTYuMjU4IDAtMTEuMzUyLTUuMDk0LTExLjM1Mi0xMS4zNTIgMC02LjI2MSA1LjA5NC0xMS4zNTEgMTEuMzUyLTExLjM1MSA2LjI2MSAwIDExLjM1NSA1LjA5IDExLjM1NSAxMS4zNTEgMCA2LjI1OC01LjA5NCAxMS4zNTItMTEuMzU1IDExLjM1MnptMCAwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                style={{
                  ' @media(max-width:479px)': { width: '19px', height: '19px' },
                }}
                width="23px"
                height="23px"
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12.0} sm={6.0} md={4.0} lg={2.0} xl={2.0}>
          <Stack
            sx={{
              alignItems: 'flex-start',
              width: '100%',
              ' @media(max-width:991px)': { alignItems: 'center', gap: '0px' },
              ' @media(max-width:479px)': { alignItems: 'center', gap: '0px' },
            }}
            spacing="24px">
            <Typography
              variant="subtitle1"
              sx={{ color: 'rgb(253, 215, 22)', fontSize: '18px' }}>
              Company
            </Typography>
            <List
              sx={{
                width: '100%',
                ' @media(max-width:991px)': { textAlign: 'center' },
                ' @media(max-width:479px)': { textAlign: 'center' },
              }}>
              <ListItem
                disablePadding={true}
                sx={{ marginBottom: '5px', padding: '3px', display: 'block' }}>
                <Link
                  sx={{ textDecoration: 'none', color: 'rgb(255, 255, 255)' }}>
                  Team
                </Link>
              </ListItem>
              <ListItem
                disablePadding={true}
                sx={{ marginBottom: '5px', padding: '3px', display: 'block' }}>
                <Link
                  sx={{ textDecoration: 'none', color: 'rgb(255, 255, 255)' }}>
                  How it works
                </Link>
              </ListItem>
              <ListItem
                disablePadding={true}
                sx={{ marginBottom: '5px', padding: '3px', display: 'block' }}>
                <Link
                  sx={{ textDecoration: 'none', color: 'rgb(255, 255, 255)' }}>
                  Careers
                </Link>
              </ListItem>
              <ListItem
                disablePadding={true}
                sx={{ marginBottom: '5px', padding: '3px', display: 'block' }}>
                <Link
                  sx={{ textDecoration: 'none', color: 'rgb(255, 255, 255)' }}>
                  Customer Stories
                </Link>
              </ListItem>
              <ListItem
                disablePadding={true}
                sx={{ marginBottom: '5px', padding: '3px', display: 'block' }}>
                <Link
                  sx={{ textDecoration: 'none', color: 'rgb(255, 255, 255)' }}>
                  Locations
                </Link>
              </ListItem>
            </List>
          </Stack>
        </Grid>
        <Grid item xs={12.0} sm={6.0} md={4.0} lg={3.0} xl={3.0}>
          <Stack
            sx={{
              alignItems: 'flex-start',
              width: '100%',
              ' @media(max-width:991px)': { alignItems: 'center', gap: '0px' },
              ' @media(max-width:479px)': { alignItems: 'center', gap: '0px' },
            }}
            spacing="24px">
            <Typography
              variant="subtitle1"
              sx={{ color: 'rgb(253, 215, 22)', fontSize: '18px' }}>
              For Customers
            </Typography>
            <List
              sx={{
                width: '100%',
                ' @media(max-width:991px)': { textAlign: 'center' },
                ' @media(max-width:479px)': { textAlign: 'center' },
              }}>
              <ListItem
                disablePadding={true}
                sx={{ marginBottom: '5px', padding: '3px', display: 'block' }}>
                <Link
                  sx={{ textDecoration: 'none', color: 'rgb(255, 255, 255)' }}>
                  How it works
                </Link>
              </ListItem>
              <ListItem
                disablePadding={true}
                sx={{ marginBottom: '5px', padding: '3px', display: 'block' }}>
                <Link
                  sx={{ textDecoration: 'none', color: 'rgb(255, 255, 255)' }}>
                  FAQs
                </Link>
              </ListItem>
              <ListItem
                disablePadding={true}
                sx={{ marginBottom: '5px', padding: '3px', display: 'block' }}>
                <Link
                  sx={{ textDecoration: 'none', color: 'rgb(255, 255, 255)' }}>
                 Best experts around you
                </Link>
              </ListItem>       
            </List>
          </Stack>
        </Grid>
        <Grid item xs={12.0} sm={6.0} md={4.0} lg={2.0} xl={2.0}>
          <Stack
            sx={{
              alignItems: 'flex-start',
              width: '100%',
              ' @media(max-width:991px)': { alignItems: 'center', gap: '0px' },
              ' @media(max-width:479px)': { alignItems: 'center', gap: '0px' },
            }}
            spacing="24px">
            <Typography
              variant="subtitle1"
              sx={{ color: 'rgb(253, 215, 22)', fontSize: '18px' }}>
              For Experts
            </Typography>
            <List
              sx={{
                width: '100%',
                ' @media(max-width:991px)': { textAlign: 'center' },
                ' @media(max-width:479px)': { textAlign: 'center' },
              }}>
              <ListItem
                disablePadding={true}
                sx={{ marginBottom: '5px', padding: '3px', display: 'block' }}>
                <Link
                  sx={{ textDecoration: 'none', color: 'rgb(255, 255, 255)' }}>
                  Join Gharaana
                </Link>
              </ListItem>
              <ListItem
                disablePadding={true}
                sx={{ marginBottom: '5px', padding: '3px', display: 'block' }}>
                <Link
                  sx={{ textDecoration: 'none', color: 'rgb(255, 255, 255)' }}>
                  Gharaana reviews for Experts
                </Link>
              </ListItem>
              <ListItem
                disablePadding={true}
                sx={{ marginBottom: '5px', padding: '3px', display: 'block' }}>
                <Link
                  sx={{ textDecoration: 'none', color: 'rgb(255, 255, 255)' }}>
                  Resources
                </Link>
              </ListItem>
              <ListItem
                disablePadding={true}
                sx={{ marginBottom: '5px', padding: '3px', display: 'block' }}>
                <Link
                  sx={{ textDecoration: 'none', color: 'rgb(255, 255, 255)' }}>
                  Workshop
                </Link>
              </ListItem>

            </List>
          </Stack>
        </Grid>
        <Grid item xs={12.0} sm={6.0} md={4.0} lg={3.0} xl={3.0}>
          <Stack
            sx={{
              alignItems: 'flex-start',
              width: '100%',
              ' @media(max-width:991px)': { alignItems: 'center', gap: '10px' },
              ' @media(max-width:479px)': { alignItems: 'center', gap: '10px' },
            }}
            spacing="24px">
            <Link
              sx={{
                color: 'rgb(253, 215, 22)',
                fontSize: '18px',
                textDecoration: 'none',
                cursor: 'pointer',
              }}>
              Contact Us
              Gharaana@ind.com
            </Link>
            <Stack
              sx={{
                alignItems: 'flex-start',
                width: '100%',
                ' @media(max-width:991px)': { alignItems: 'center' },
                ' @media(max-width:479px)': { alignItems: 'center' },
              }}
              spacing="2px">
              <Typography
                variant="subtitle2"
                sx={{ color: '#b2b2b2', fontSize: '20px' }}>
                Coming Soon
              </Typography>
              <Stack
                sx={{ alignItems: 'center' }}
                spacing="16px"
                direction="row">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjIuNzczIDIyLjc3MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTE1Ljc2OSAwaC4xNjJjLjEzIDEuNjA2LS40ODMgMi44MDYtMS4yMjggMy42NzUtLjczMS44NjMtMS43MzIgMS43LTMuMzUxIDEuNTczLS4xMDgtMS41ODMuNTA2LTIuNjk0IDEuMjUtMy41NjFDMTMuMjkyLjg3OSAxNC41NTcuMTYgMTUuNzY5IDB6TTIwLjY3IDE2LjcxNnYuMDQ1Yy0uNDU1IDEuMzc4LTEuMTA0IDIuNTU5LTEuODk2IDMuNjU1LS43MjMuOTk1LTEuNjA5IDIuMzM0LTMuMTkxIDIuMzM0LTEuMzY3IDAtMi4yNzUtLjg3OS0zLjY3Ni0uOTAzLTEuNDgyLS4wMjQtMi4yOTcuNzM1LTMuNjUyLjkyNmgtLjQ2MmMtLjk5NS0uMTQ0LTEuNzk4LS45MzItMi4zODMtMS42NDItMS43MjUtMi4wOTgtMy4wNTgtNC44MDgtMy4zMDYtOC4yNzZ2LTEuMDE5Yy4xMDUtMi40ODIgMS4zMTEtNC41IDIuOTE0LTUuNDc4Ljg0Ni0uNTIgMi4wMDktLjk2MyAzLjMwNC0uNzY1LjU1NS4wODYgMS4xMjIuMjc2IDEuNjE5LjQ2NC40NzEuMTgxIDEuMDYuNTAyIDEuNjE4LjQ4NS4zNzgtLjAxMS43NTQtLjIwOCAxLjEzNS0uMzQ3IDEuMTE2LS40MDMgMi4yMS0uODY1IDMuNjUyLS42NDggMS43MzMuMjYyIDIuOTYzIDEuMDMyIDMuNzIzIDIuMjItMS40NjYuOTMzLTIuNjI1IDIuMzM5LTIuNDI3IDQuNzQuMTc2IDIuMTgxIDEuNDQ0IDMuNDU3IDMuMDI4IDQuMjA5eiIgZmlsbD0iI2IyYjJiMiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
                  style={{
                    ' @media(max-width:479px)': {
                      width: '35px',
                      height: '35px',
                    },
                  }}
                  width="40px"
                  height="40px"
                />
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk5OSA1MTEuOTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJNMzgyLjM2OSAxNzUuNjIzQTc3NTk1MS40NDYgNzc1OTUxLjQ0NiAwIDAgMSA3OS4zNTUgNi4wMjhDNjkuMzcyLS41NjUgNTcuODg2LTEuNDI5IDQ3Ljk2MiAxLjkzbDI1NC4wNSAyNTQuMDUgODAuMzU3LTgwLjM1N3oiIHN0eWxlPSIiIGZpbGw9IiNiMmIyYjIiIGRhdGEtb3JpZ2luYWw9IiMzMmJiZmYiIG9wYWNpdHk9IjEiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNNDcuOTYyIDEuOTNjLTEuODYuNjMtMy42NyAxLjM5LTUuNDAxIDIuMzA4QzMxLjYwMiAxMC4xNjYgMjMuNTQ5IDIxLjU3MyAyMy41NDkgMzZ2NDM5Ljk2YzAgMTQuNDI3IDguMDUyIDI1LjgzNCAxOS4wMTIgMzEuNzYxYTM2Ljk1NCAzNi45NTQgMCAwIDAgNS4zOTUgMi4zMTRMMzAyLjAxMiAyNTUuOTggNDcuOTYyIDEuOTN6IiBzdHlsZT0iIiBmaWxsPSIjYjJiMmIyIiBkYXRhLW9yaWdpbmFsPSIjMzJiYmZmIiBvcGFjaXR5PSIxIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTMwMi4wMTIgMjU1Ljk4IDQ3Ljk1NiA1MTAuMDM1YzkuOTI3IDMuMzg0IDIxLjQxMyAyLjU4NiAzMS4zOTktNC4xMDMgMTQzLjU5OC04MC40MSAyMzcuOTg2LTEzMy4xOTYgMjk4LjE1Mi0xNjYuNzQ2bDQuOTM4LTIuNzcyLTgwLjQzMy04MC40MzR6IiBzdHlsZT0iIiBmaWxsPSIjYjJiMmIyIiBkYXRhLW9yaWdpbmFsPSIjMzJiYmZmIiBvcGFjaXR5PSIxIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTIzLjU0OSAyNTUuOTh2MjE5Ljk4YzAgMTQuNDI3IDguMDUyIDI1LjgzNCAxOS4wMTIgMzEuNzYxYTM2Ljk1NCAzNi45NTQgMCAwIDAgNS4zOTUgMi4zMTRMMzAyLjAxMiAyNTUuOThIMjMuNTQ5eiIgc3R5bGU9IiIgZmlsbD0iI2IyYjJiMiIgZGF0YS1vcmlnaW5hbD0iIzJjOWZkOSIgY2xhc3M9IiIgb3BhY2l0eT0iMSI+PC9wYXRoPjxwYXRoIGQ9Ik03OS4zNTUgNi4wMjhDNjcuNS0xLjggNTMuNTItMS41NzcgNDIuNTYxIDQuMjM5bDI1NS41OTUgMjU1LjU5NiA4NC4yMTItODQuMjEyQTc4NjAwOS4zNjYgNzg2MDA5LjM2NiAwIDAgMSA3OS4zNTUgNi4wMjh6IiBzdHlsZT0iIiBmaWxsPSIjYjJiMmIyIiBkYXRhLW9yaWdpbmFsPSIjMjljYzVlIiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L3BhdGg+PHBhdGggZD0iTTI5OC4xNTggMjUyLjEyNiA0Mi41NjEgNTA3LjcyMWMxMC45NiA1LjgxNSAyNC45MzkgNi4xNTEgMzYuNzk0LTEuNzg5IDE0My41OTgtODAuNDEgMjM3Ljk4Ni0xMzMuMTk2IDI5OC4xNTItMTY2Ljc0Nmw0LjkzOC0yLjc3Mi04NC4yODctODQuMjg4eiIgc3R5bGU9IiIgZmlsbD0iI2IyYjJiMiIgZGF0YS1vcmlnaW5hbD0iI2Q5M2YyMSIgY2xhc3M9IiIgb3BhY2l0eT0iMSI+PC9wYXRoPjxwYXRoIGQ9Ik00ODguNDUgMjU1Ljk4YzAtMTIuMTktNi4xNTEtMjQuNDkyLTE4LjM0Mi0zMS4zMTQgMCAwLTIyLjc5OS0xMi43MjEtOTIuNjgyLTUxLjgwOWwtODMuMTIzIDgzLjEyMyA4My4yMDQgODMuMjA1YzY5LjExNi0zOC44MDcgOTIuNi01MS44OTIgOTIuNi01MS44OTIgMTIuMTkyLTYuODIxIDE4LjM0My0xOS4xMjMgMTguMzQzLTMxLjMxM3oiIHN0eWxlPSIiIGZpbGw9IiNiMmIyYjIiIGRhdGEtb3JpZ2luYWw9IiNmZmQ1MDAiIGNsYXNzPSIiIG9wYWNpdHk9IjEiPjwvcGF0aD48cGF0aCBkPSJNNDcwLjEwOCAyODcuMjk0YzEyLjE5MS02LjgyMiAxOC4zNDItMTkuMTI0IDE4LjM0Mi0zMS4zMTRIMjk0LjMwM2w4My4yMDQgODMuMjA1YzY5LjExNy0zOC44MDYgOTIuNjAxLTUxLjg5MSA5Mi42MDEtNTEuODkxeiIgc3R5bGU9IiIgZmlsbD0iI2IyYjJiMiIgZGF0YS1vcmlnaW5hbD0iI2ZmYWEwMCIgY2xhc3M9IiIgb3BhY2l0eT0iMSI+PC9wYXRoPjwvZz48L3N2Zz4="
                  style={{
                    marginTop: '3px',
                    ' @media(max-width:479px)': {
                      width: '30px',
                      height: '30px',
                    },
                  }}
                  width="35px"
                  height="35px"
                />
              </Stack>
            </Stack>
            <Stack
              sx={{
                alignItems: 'flex-start',
                width: '100%',
                ' @media(max-width:991px)': {
                  marginTop: '14px',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                ' @media(max-width:479px)': {
                  marginTop: '14px',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              }}
              spacing="6px">
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Box
        sx={{
          backgroundColor: '#333333',
          padding: '10px',
          width: '100%',
          textAlign: 'center',
          display: 'inline-block',
        }}>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNjgyLjY2NyA2ODIuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48ZGVmcz48Y2xpcFBhdGggaWQ9ImIiIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMCA1MTJoNTEyVjBIMFoiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiPjwvcGF0aD48L2NsaXBQYXRoPjwvZGVmcz48bWFzayBpZD0iYSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iI2ZmZmZmZiI+PC9yZWN0PjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2EpIj48ZyBjbGlwLXBhdGg9InVybCgjYikiIHRyYW5zZm9ybT0ibWF0cml4KDEuMzMzMzMgMCAwIC0xLjMzMzMzIDAgNjgyLjY2NykiPjxwYXRoIGQ9Ik0wIDBjMCAxMzAuMzM5IDEwNS42NjEgMjM2IDIzNiAyMzZTNDcyIDEzMC4zMzkgNDcyIDAgMzY2LjMzOS0yMzYgMjM2LTIzNiAwLTEzMC4zMzkgMCAwWiIgc3R5bGU9InN0cm9rZS13aWR0aDo0MDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAgMjU2KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSJub25lIiBzdHJva2Utb3BhY2l0eT0iIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIiBvcGFjaXR5PSIxIj48L3BhdGg+PHBhdGggZD0iTTAgMGMtNTAuMzc4LTUwLjM3OC0xMzIuMDU2LTUwLjM3OC0xODIuNDM0IDAtNTAuMzc4IDUwLjM3OC01MC4zNzggMTMyLjA1NiAwIDE4Mi40MzQgNTAuMzc4IDUwLjM3OCAxMzIuMDU2IDUwLjM3OCAxODIuNDM0IDAiIHN0eWxlPSJzdHJva2Utd2lkdGg6NDA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0Ny4yMTcgMTY0Ljc4MykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0MCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiIgb3BhY2l0eT0iMSI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg=="
          style={{ display: 'inline-block' }}
          width="14px"
          height="14px"
        />
        <Typography
          variant="p"
          sx={{
            color: 'rgb(255, 255, 255)',
            display: 'inline',
            marginLeft: '3px',
            ' @media(max-width:479px)': { fontSize: '12px' },
            '&&': { marginLeft: '3px' },
          }}>
          2024 Gharaana
           - All Rights Reserved
        </Typography>
        <Link
          sx={{
            color: 'rgb(253, 215, 22)',
            textDecoration: 'none',
            cursor: 'pointer',
            display: 'inline',
            padding: '0px 5px',
            ' @media(max-width:479px)': { fontSize: '12px' },
          }}>
          Terms of Use
        </Link>
        <Typography
          variant="subtitle1"
          sx={{
            color: 'rgb(255, 255, 255)',
            display: 'inline',
            ' @media(max-width:479px)': { fontSize: '12px' },
          }}>
          and
        </Typography>
        <Link
          sx={{
            color: 'rgb(253, 215, 22)',
            textDecoration: 'none',
            cursor: 'pointer',
            display: 'inline',
            padding: '0px 5px',
            ' @media(max-width:479px)': { fontSize: '12px' },
          }}>
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
};

export default FooterG;
