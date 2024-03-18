import * as React from "react";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@mui/material/MenuItem";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { usePopupState, bindHover, bindFocus, bindMenu } from "material-ui-popup-state/hooks";
import { Box, Paper, styled } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
                {/* <span sx={classes.title}>{title}</span> */}
                {/* My decision to choose to Button */}
                <Button sx={classes.title} size="small">
                    {title}
                </Button>

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
            {/* --- POPUP1 START --- */}
            <Button
                variant="contained"
                {...bindHover(popupState)}
                {...bindFocus(popupState)}
                to="/"
                onClick={(e) => {
                    popupState.close(e);
                }}
            >
                Smartphones
                <ArrowDropDownIcon fontSize="medium" />
            </Button>
            <CascadingMenu
                popupState={popupState}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
                {/* <CascadingMenuItem>Tea</CascadingMenuItem> */}
                {/* Submenus */}
                <CascadingSubmenu popupId="moreChoicesCascadingMenu" title="Apple">
                    <CascadingMenuItem>
                        <Button to="/smartphones?series=15pro" size="small" className="cascademenu-item">
                            15 Pro Series
                        </Button>
                    </CascadingMenuItem>

                    <CascadingMenuItem>
                        <Button to="/smartphones?series=15" size="small" className="cascademenu-item">
                            15 Series
                        </Button>
                    </CascadingMenuItem>

                    <CascadingMenuItem>
                        <Button to="/smartphones?series=14pro" size="small" className="cascademenu-item">
                            14 Pro Series
                        </Button>
                    </CascadingMenuItem>

                    {/* <Link color="inherit" underline="none" to="/contact">
                        <CascadingMenuItem>Cheesecake Contact</CascadingMenuItem>
                    </Link> */}

                    {/* <CascadingMenuItem>
                        <Link to="/smartphones?series=14pro" size="small">
                            14 Pro Series
                        </Link>
                    </CascadingMenuItem> */}
                </CascadingSubmenu>
                {/* CascadingSubmenu START */}
                <CascadingSubmenu popupId="moreChoicesCascadingMenu2" title="Samsung">
                    <CascadingMenuItem>
                        <Button to="/" size="small" className="cascademenu-item">
                            Galaxy S Series
                        </Button>
                    </CascadingMenuItem>

                    <CascadingMenuItem>
                        <Button to="/" size="small" className="cascademenu-item">
                            Galaxy A Series
                        </Button>
                    </CascadingMenuItem>

                    <CascadingMenuItem>
                        <Button to="/" size="small" className="cascademenu-item">
                            Galaxy Fold Series
                        </Button>
                    </CascadingMenuItem>
                </CascadingSubmenu>
                <CascadingSubmenu popupId="moreChoicesCascadingMenu3" title="Google">
                    <CascadingMenuItem>
                        <Button to="/" size="small" className="cascademenu-item">
                            Pixel 8 Series
                        </Button>
                    </CascadingMenuItem>

                    <CascadingMenuItem>
                        <Button to="/" size="small" className="cascademenu-item">
                            Pixel 7 Series
                        </Button>
                    </CascadingMenuItem>

                    <CascadingMenuItem>
                        <Button to="/" size="small" className="cascademenu-item">
                            Pixel 6 Series
                        </Button>
                    </CascadingMenuItem>
                </CascadingSubmenu>
            </CascadingMenu>
            {/* --- POPUP1 FINISH --- */}
            {/* --- POPUP1 FINISH --- */}
            {/* --- POPUP1 FINISH --- */}
            {/* ------------------------------------------------------------------------------ */}
            {/* --- POPUP2 START --- */}
            {/* --- POPUP2 START --- */}
            {/* --- POPUP2 START --- */}
            <Button
                variant="contained"
                {...bindHover(popupState2)}
                {...bindFocus(popupState2)}
                to="/about"
                onClick={(e) => {
                    popupState2.close(e);
                }}
            >
                Tablets
                <ArrowDropDownIcon fontSize="medium" />
            </Button>

            <CascadingMenu
                popupState={popupState2}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
                <CascadingMenuItem>Apple iPad</CascadingMenuItem>
                <CascadingMenuItem>Samsung</CascadingMenuItem>
                <CascadingMenuItem>Lenovo</CascadingMenuItem>
                <CascadingSubmenu popupId="moreChoicesCascadingMenu" title="Xiaomi">
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
            {/* --- POPUP2 FINISH --- */}
        </>
    );
};

export default CascadingHoverMenus;
