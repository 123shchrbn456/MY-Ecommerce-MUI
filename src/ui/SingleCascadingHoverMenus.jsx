import React from "react";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@mui/material/MenuItem";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import { usePopupState, bindHover, bindFocus, bindMenu } from "material-ui-popup-state/hooks";
import { styled } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
function CascadingSubmenu({ title, titleLink, popupId, ...props }) {
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
                <BrandButton sx={classes.title} to={titleLink}>
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

const SingleCascadingHoverMenus = ({ data }) => {
    const popupState = usePopupState({
        popupId: data.popupId,
        variant: "popover",
    });
    return (
        <>
            <Button
                variant="contained"
                {...bindHover(popupState)}
                {...bindFocus(popupState)}
                to={`/devices?category=${data.linkCategory}&_page=1`}
                onClick={(e) => {
                    popupState.close(e);
                }}
                endIcon={<ArrowDropDownIcon fontSize="medium" />}
            >
                {data.categoryTitle}
            </Button>
            <CascadingMenu
                popupState={popupState}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
                {/* Submenus */}
                {data.submenuOptions.map((submenuOption, index) => (
                    <CascadingSubmenu
                        key={submenuOption.title}
                        popupId={`moreChoicesCascadingMenu${index}`}
                        title={submenuOption.title}
                        titleLink={submenuOption.titleLink}
                    >
                        {submenuOption.series.map((singleSeries) => (
                            <CascadingMenuItem key={singleSeries.seriesTitle}>
                                <SeriesButton to={singleSeries.seriesLink}>{singleSeries.seriesTitle}</SeriesButton>
                            </CascadingMenuItem>
                        ))}
                    </CascadingSubmenu>
                ))}
            </CascadingMenu>
        </>
    );
};

export default SingleCascadingHoverMenus;
