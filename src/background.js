import React from "react";
import TabGroup from './tab-group';
import TabContent from "./tab-content";

function BackGroundView() {
    return (
        <div className="form">
            <TabGroup></TabGroup>
            <TabContent></TabContent>
        </div>
    );
}

export default BackGroundView;