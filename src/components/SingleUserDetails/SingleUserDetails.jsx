import React from "react";

function SingleUserDetails({ setFeaturedUser }) {
  return (
    <div>
      SingleUserDetails
      <button onClick={() => setFeaturedUser(null)}>Go back to list</button>
    </div>
  );
}

export default SingleUserDetails;
