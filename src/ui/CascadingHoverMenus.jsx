import SingleCascadingHoverMenus from "./SingleCascadingHoverMenus";
import { cascadingHoverMenusData } from "../data/cascadingHoverMenus";

const CascadingHoverMenus = () => {
    return (
        <>
            {cascadingHoverMenusData.map((singleCascadingData) => (
                <SingleCascadingHoverMenus key={singleCascadingData.popupId} data={singleCascadingData} />
            ))}
        </>
    );
};

export default CascadingHoverMenus;
