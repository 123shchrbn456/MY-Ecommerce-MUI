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

const SingleCascadingHoverMenus = () => {
    let popupId = "demoMenu";
    let linkCategory = "smartphones";
    let categoryTitle = "Smartphones";
    const submenuOptions = [
        {
            cascadingId: "moreChoicesCascadingMenu",
            title: "Apple",
            titleLink: `/devices?category=${linkCategory}&brand=Apple&_page=1`,
            series: [
                {
                    seriesTitle: "15 Pro Series",
                    seriesLink: `/devices?category=${linkCategory}&brand=Apple&series=iPhone%2015%20Pro%20Max&_page=1`,
                },
                { seriesTitle: "14 Series", seriesLink: `/devices?category=${linkCategory}&brand=Apple&series=iPhone+14&_page=1` },
                { seriesTitle: "13 Series", seriesLink: `/devices?category=${linkCategory}&brand=Apple&series=iPhone+13&_page=1` },
            ],
        },
        {
            cascadingId: "moreChoicesCascadingMenu2",
            title: "Samsung",
            titleLink: `/devices?category=${linkCategory}&brand=Samsung&_page=1`,
            series: [
                {
                    seriesTitle: "Galaxy A55",
                    seriesLink: `/devices?category=${linkCategory}&_page=1&brand=Samsung&series=Galaxy+A55`,
                },
                { seriesTitle: "Galaxy S23", seriesLink: `/devices?category=${linkCategory}&_page=1&brand=Samsung&series=Galaxy+S23` },
                {
                    seriesTitle: "Galaxy S24",
                    seriesLink: `http://localhost:5173/devices?category=${linkCategory}&_page=1&brand=Samsung&series=Galaxy+S24`,
                },
                {
                    seriesTitle: "Galaxy S24 Ultra",
                    seriesLink: `http://localhost:5173/devices?category=${linkCategory}&_page=1&brand=Samsung&series=Galaxy+S24+Ultra`,
                },
            ],
        },
    ];

    const popupState = usePopupState({
        popupId: popupId,
        variant: "popover",
    });
    return (
        <>
            <Button
                variant="contained"
                {...bindHover(popupState)}
                {...bindFocus(popupState)}
                to={`/devices?category=${linkCategory}&_page=1`}
                onClick={(e) => {
                    popupState.close(e);
                }}
                endIcon={<ArrowDropDownIcon fontSize="medium" />}
            >
                {categoryTitle}
            </Button>
            <CascadingMenu
                popupState={popupState}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
                {/* Submenus */}
                {submenuOptions.map((submenuOption, index) => (
                    <CascadingSubmenu
                        key={index}
                        popupId={`moreChoicesCascadingMenu${index}`}
                        title={submenuOption.title}
                        titleLink={submenuOption.titleLink}
                    >
                        {submenuOption.series.map((singleSeries) => (
                            <CascadingMenuItem>
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
