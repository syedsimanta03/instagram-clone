import React from "react";
import Layout from "../components/shared/Layout";
import ExploreSuggestions from "../components/explore/ExploreSuggestions";
import ExploreGrid from "../components/explore/ExploreGrid";

function ExplorePage() {
  return (
    <Layout>
      <ExploreSuggestions />
      <ExploreGrid />
    </Layout>
  );
}

export default ExplorePage;
