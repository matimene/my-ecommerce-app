import React from "react";
import { useHistory } from "react-router-dom";
import {
  PanelItemContainer,
  PanelStoreFilter,
  PanelHeader,
  StorePanelContainer,
  PanelStoreFilterAll,
} from "./StoreElements";

const StorePanel = ({ categories, filters }) => {
  const history = useHistory();

  return (
    <StorePanelContainer>
      <PanelItemContainer>
        <PanelHeader>Menu</PanelHeader>
        {categories.map((c, i) => (
          <PanelStoreFilter onClick={() => history.push(`/store/${c}`)} key={i}>
            {c}
          </PanelStoreFilter>
        ))}
        <PanelStoreFilterAll onClick={() => history.push(`/store`)}>
          SHOW ALL
        </PanelStoreFilterAll>
      </PanelItemContainer>
      <PanelItemContainer>
        <PanelHeader>Filter by</PanelHeader>
        {filters.map((f, i) => (
          <PanelStoreFilter key={i} onClick={() => history.push(`/store/${f}`)}>
            {f}
          </PanelStoreFilter>
        ))}
        <PanelStoreFilterAll onClick={() => history.push(`/store`)}>
          SHOW ALL
        </PanelStoreFilterAll>
      </PanelItemContainer>
    </StorePanelContainer>
  );
};

export default StorePanel;
