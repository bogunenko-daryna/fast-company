import React from "react";
import PropTypes from "prop-types";
const GroupList = ({
  items,
  valuePtoperty,
  contentProperty,
  onItemSelect,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {Object.keys(items).map((item) => (
        <li
          key={items[item][valuePtoperty]}
          onClick={() => onItemSelect(items[item])}
          className={
            "list-group-item" + (items[item] === selectedItem ? " active" : "")
          }
          role="button"
        >
          {items[item][contentProperty]}
        </li>
      ))}
    </ul>
  );
};

GroupList.defaultProps = {
  valuePtoperty: "_id",
  contentProperty: "name",
};

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valuePtoperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  selectedItem: PropTypes.object,
  onItemSelect: PropTypes.func,
};

export default GroupList;
