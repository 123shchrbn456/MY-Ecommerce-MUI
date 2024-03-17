import * as React from "react";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@mui/material/MenuItem";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { usePopupState, bindHover, bindFocus, bindMenu } from "material-ui-popup-state/hooks";
import { styled } from "@mui/material";

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

const CustomizedButton = styled(Button)(() => ({
    width: 250,
}));

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
                <span sx={classes.title}>{title}</span>
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
        variant: "popover2",
    });

    return (
        <>
            <Button
                variant="contained"
                {...bindHover(popupState)}
                {...bindFocus(popupState)}
                to="/"
                onClick={(e) => {
                    popupState.close(e);
                }}
            >
                Hover to open Menu
            </Button>

            <CascadingMenu
                popupState={popupState}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
                {/* <CascadingMenuItem>Tea</CascadingMenuItem> */}
                <CascadingMenuItem>
                    <Button to="/tea">Tea</Button>
                </CascadingMenuItem>
                {/* <CascadingMenuItem>Cake</CascadingMenuItem> */}
                <CascadingMenuItem>
                    <Button to="/cake">Cake</Button>
                </CascadingMenuItem>
                <CascadingMenuItem>Death</CascadingMenuItem>
                <CascadingSubmenu popupId="moreChoicesCascadingMenu" title="More Choices">
                    <Link color="inherit" underline="none" to="/contact">
                        <CascadingMenuItem>Cheesecake Contact</CascadingMenuItem>
                    </Link>

                    <CascadingMenuItem>Cheesedeath</CascadingMenuItem>
                    <CascadingSubmenu popupId="evenMoreChoicesCascadingMenu" title="Even More Choices">
                        <CascadingMenuItem>Cake (the band)</CascadingMenuItem>
                        <CascadingMenuItem>Death Metal</CascadingMenuItem>
                    </CascadingSubmenu>
                    <CascadingSubmenu popupId="moreBenignChoices" title="More Benign Choices">
                        <CascadingMenuItem>Salad</CascadingMenuItem>
                        <CascadingMenuItem>Lobotomy</CascadingMenuItem>
                    </CascadingSubmenu>
                </CascadingSubmenu>
            </CascadingMenu>

            {/* -------------------- POPUP 2 --------------------------------- */}

            <Button
                variant="contained"
                {...bindHover(popupState2)}
                {...bindFocus(popupState2)}
                to="/about"
                onClick={(e) => {
                    popupState2.close(e);
                }}
            >
                Hover to open Menu2
            </Button>

            <CascadingMenu
                popupState={popupState2}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
                <CascadingMenuItem>Tea2</CascadingMenuItem>
                <CascadingMenuItem>Cake2</CascadingMenuItem>
                <CascadingMenuItem>Death2</CascadingMenuItem>
                <CascadingSubmenu popupId="moreChoicesCascadingMenu" title="More Choices2">
                    <CascadingMenuItem>Cheesecake2</CascadingMenuItem>
                    <CascadingMenuItem>Cheesedeath2</CascadingMenuItem>
                    <CascadingSubmenu popupId="evenMoreChoicesCascadingMenu" title="Even More Choices2">
                        <CascadingMenuItem>Cake (the band)2</CascadingMenuItem>
                        <CascadingMenuItem>Death Metal2</CascadingMenuItem>
                    </CascadingSubmenu>
                    <CascadingSubmenu popupId="moreBenignChoices" title="More Benign Choices2">
                        <CascadingMenuItem>Salad2</CascadingMenuItem>
                        <CascadingMenuItem>Lobotomy2</CascadingMenuItem>
                    </CascadingSubmenu>
                </CascadingSubmenu>
            </CascadingMenu>
        </>
    );
};

export default CascadingHoverMenus;
