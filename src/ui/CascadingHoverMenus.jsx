import * as React from "react";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@mui/material/MenuItem";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { usePopupState, bindHover, bindFocus, bindMenu } from "material-ui-popup-state/hooks";
import { Box, Paper, Typography, styled } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SingleCascadingHoverMenus from "./SingleCascadingHoverMenus";

const BrandButton = styled(Button)(() => ({
    "&:hover": {
        backgroundColor: "transparent",
    },
}));

BrandButton.defaultProps = {
    size: "small",
};

const SeriesButton = styled(BrandButton)({
    textTransform: "none",
});

const classes = {
    submenu: {
        marginTop: -1,
    },
    title: {
        flexGrow: 1,
    },
    moreArrow: {
        marginRight: -1,
    },
};

const CascadingContext = React.createContext({
    parentPopupState: null,
    rootPopupState: null,
});

// --- CascadingMenuItem
function CascadingMenuItem({ onClick, ...props }) {
    const { rootPopupState } = React.useContext(CascadingContext);
    if (!rootPopupState) throw new Error("must be used inside a CascadingMenu");

    const handleClick = React.useCallback(
        (event) => {
            rootPopupState.close(event);
            if (onClick) onClick(event);
        },
        [rootPopupState, onClick]
    );

    return <MenuItem {...props} onClick={handleClick} />;
}

// --- CascadingSubmenu
function CascadingSubmenu({ title, popupId, ...props }) {
    const { parentPopupState } = React.useContext(CascadingContext);
    const popupState = usePopupState({
        popupId,
        variant: "popover",
        parentPopupState,
    });
    return (
        <React.Fragment>
            <MenuItem {...bindHover(popupState)} {...bindFocus(popupState)}>
                {/* <span sx={classes.title}>{title}</span> */}
                {/* My decision to switch to Button */}
                <BrandButton sx={classes.title} to="/devices?category=tablets&_page=1">
                    {title}
                </BrandButton>
                <ChevronRight sx={classes.moreArrow} />
            </MenuItem>
            <CascadingMenu
                {...props}
                classes={{ ...props.classes, paper: classes.submenu }}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                popupState={popupState}
            />
        </React.Fragment>
    );
}

// --- CascadingMenu
function CascadingMenu({ popupState, ...props }) {
    const { rootPopupState } = React.useContext(CascadingContext);
    const context = React.useMemo(
        () => ({
            rootPopupState: rootPopupState || popupState,
            parentPopupState: popupState,
        }),
        [rootPopupState, popupState]
    );

    return (
        <CascadingContext.Provider value={context}>
            <HoverMenu {...props} {...bindMenu(popupState)} />
        </CascadingContext.Provider>
    );
}

// --- CascadingHoverMenus
const CascadingHoverMenus = () => {
    const popupState = usePopupState({
        popupId: "demoMenu",
        variant: "popover",
    });

    const popupState2 = usePopupState({
        popupId: "demoMenu2",
        variant: "popover",
    });

    const popupState3 = usePopupState({
        popupId: "demoMenu3",
        variant: "popover",
    });

    return (
        <>
            {/* --- POPUP1 START --- */}
            <SingleCascadingHoverMenus />
            {/* --- POPUP1 FINISH --- */}

            {/* ------------------------------------------------------------------------------ */}
            {/* --- POPUP2 START --- */}
            {/* --- POPUP2 START --- */}
            {/* --- POPUP2 START --- */}
            <Button
                variant="contained"
                {...bindHover(popupState2)}
                {...bindFocus(popupState2)}
                to="/devices?category=tablets&_page=1"
                onClick={(e) => {
                    popupState2.close(e);
                }}
                endIcon={<ArrowDropDownIcon fontSize="medium" />}
            >
                Tablets
            </Button>

            <CascadingMenu
                popupState={popupState2}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
                <CascadingSubmenu popupId="moreChoicesCascadingMenu" title="Lenovo">
                    <CascadingMenuItem>
                        <SeriesButton to="/smartphones?series=15pro">Tab M</SeriesButton>
                    </CascadingMenuItem>
                    <CascadingMenuItem>
                        <SeriesButton to="/smartphones?series=15pro">Tab P</SeriesButton>
                    </CascadingMenuItem>
                    <CascadingMenuItem>
                        <SeriesButton to="/smartphones?series=15pro">Yoga</SeriesButton>
                    </CascadingMenuItem>
                </CascadingSubmenu>
                <CascadingSubmenu popupId="moreChoicesCascadingMenu2" title="Xiaomi">
                    <CascadingMenuItem>
                        <SeriesButton to="/smartphones?series=15pro">Mi Pad 6</SeriesButton>
                    </CascadingMenuItem>
                    <CascadingMenuItem>
                        <SeriesButton to="/smartphones?series=15pro">Mi Pad 6</SeriesButton>
                    </CascadingMenuItem>
                    <CascadingMenuItem>
                        <SeriesButton to="/smartphones?series=15pro">Mi Pad 5</SeriesButton>
                    </CascadingMenuItem>
                </CascadingSubmenu>
            </CascadingMenu>
            {/* --- POPUP2 FINISH --- */}

            {/* --- POPUP3 START --- */}
            <Button
                variant="contained"
                {...bindHover(popupState3)}
                {...bindFocus(popupState3)}
                to="/devices?category=laptops&_page=1"
                onClick={(e) => {
                    popupState3.close(e);
                }}
                endIcon={<ArrowDropDownIcon fontSize="medium" />}
            >
                Laptops
            </Button>

            <CascadingMenu
                popupState={popupState3}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
                <CascadingSubmenu popupId="moreChoicesCascadingMenu" title="Lenovo">
                    <CascadingMenuItem>
                        <SeriesButton to="/smartphones?series=15pro">Tab M</SeriesButton>
                    </CascadingMenuItem>
                    <CascadingMenuItem>
                        <SeriesButton to="/smartphones?series=15pro">Tab P</SeriesButton>
                    </CascadingMenuItem>
                    <CascadingMenuItem>
                        <SeriesButton to="/smartphones?series=15pro">Yoga</SeriesButton>
                    </CascadingMenuItem>
                </CascadingSubmenu>
                <CascadingSubmenu popupId="moreChoicesCascadingMenu2" title="Xiaomi">
                    <CascadingMenuItem>
                        <SeriesButton to="/smartphones?series=15pro">
                            M<Typography sx={{ textTransform: "lowercase" }}>i</Typography> Pad 6
                        </SeriesButton>
                    </CascadingMenuItem>
                    <CascadingMenuItem>
                        <SeriesButton to="/smartphones?series=15pro">Mi Pad 5</SeriesButton>
                    </CascadingMenuItem>
                </CascadingSubmenu>
            </CascadingMenu>
            {/* --- POPUP3 FINISH --- */}
        </>
    );
};

export default CascadingHoverMenus;
