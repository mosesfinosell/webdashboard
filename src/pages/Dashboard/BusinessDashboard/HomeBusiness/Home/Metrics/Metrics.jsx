import React from "react";
import { useQuery } from "react-query";
import { MetricsContainer } from "./metrics.styles";
import { getStoreMetrics } from "../../../../../../network/store";
import { Spinner } from "../../../../../../components/Spinner/style";

export const Metrics = () => {
  const { data, isLoading } = useQuery("storemetrics", () => getStoreMetrics());

  return (
    <MetricsContainer>
      <p>
        <span className="title">Total Products</span>
        <span className="info">
          {isLoading || !data ? (
            <Spinner size="3" border="0.3" margin="0" />
          ) : (
            data.noOfProducts
          )}
        </span>
      </p>
      <p>
        <span className="title">Total Sales</span>
        <span className="info">
          {isLoading || !data ? (
            <Spinner size="3" border="0.3" margin="0" />
          ) : (
            `₦${data.totalSales}`
          )}
        </span>
      </p>
      <p>
        <span className="title">Number of Sales</span>
        <span className="info">
          {isLoading || !data ? (
            <Spinner size="3" border="0.3" margin="0" />
          ) : (
            `${data.noOfSales}`
          )}
        </span>
      </p>
      <p>
        <span className="title">Number of Visitors</span>
        <span className="info">
          {isLoading || !data ? (
            <Spinner size="3" border="0.3" margin="0" />
          ) : (
            data.noOfVisitors
          )}
        </span>
      </p>
    </MetricsContainer>
  );
};
