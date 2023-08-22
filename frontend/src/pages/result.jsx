import React, {useEffect, useState} from "react";
import axios from "axios";
import { ResultImages } from "../components/ResultImages";
import { Header } from "./Header";
import PercentageLoader from "../components/Loader";

const imgUrl = process.env.REACT_APP_BACKEND_URL+'imgUrl';

export const Result = (props) => {

  const [imgUrls, setImgUrl] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(async () => {
    const promise = axios.get(imgUrl);
    setLoading(true);
    promise
      .then(response => {
        setLoading(false);
        setImgUrl(response.data);
      })
      .catch(error => {
        setLoading(false);
        console.error('Rejected:', error);
      });
  }, []);
  return (
    <>
      <Header/>
      <div id="loader"/>
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Results</h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ResultImages itemData={imgUrls}/>
            </div>

            {/* <div className="col-md-12"></div> */}
          </div>
          {
            isLoading &&
            <PercentageLoader/>
          }
        </div>
      </div>
    </>
  );
};

