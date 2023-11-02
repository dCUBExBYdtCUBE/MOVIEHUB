import React from "react";

// utils.js
export function removeFromFavorites(data, id) {
    return data.filter((item) => item.id !== id);
  }
  