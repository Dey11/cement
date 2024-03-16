import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="text-4xl font-semibold mb-5">
        Cement Quality Predictor
      </div>
      <div className="text-2xl font-semibold mb-3 underline underline-offset-4">
        Problem Statement:
      </div>
      <div>
        <p className="leading-relaxed text-justify text-lg">
          The cement industry faces several challenges in ensuring consistent
          and high-quality cement production. Variability in raw materials,
          process parameters, and environmental conditions can lead to
          fluctuations in cement quality. The goal is to create and develop a
          reliable and accurate Cement quality prediction model into a website,
          providing manufacturers with the ability to assess the quality of
          cement based on their inputted data. The application should provide
          accurate predictions of cement quality parameters, enabling proactive
          measures to optimize production, reduce waste, and enhance overall
          operational efficiency. The prediction model should take into account
          various factors such as the main components of cement, blast furnace,
          fly ash, coarse aggregate, fine aggregate, water, superplasticizer,
          and age(day) to generate an individual quality assessment for each
          type of cement. The presence of fraudulent cement dealers and the
          varying expectations of customers pose significant challenges. This
          research aims to develop a predictive modeling system that not only
          assesses cement quality but also incorporates mechanisms to detect and
          mitigate fraud in the supply chain.
        </p>
        <div>
          <p className="text-2xl font-semibold my-3 underline underline-offset-4">
            Solution:
          </p>
          <p className="leading-relaxed text-justify text-lg">
            This research aims to develop a predictive modeling system that not
            only assesses cement quality but also incorporates mechanisms to
            detect and mitigate fraud in the supply chain. Additionally, the
            model will be designed to factor in customer satisfaction,
            recognizing the diverse preferences and expectations of end-users.
            Addressing these multifaceted challenges will contribute to
            enhancing the overall reliability and trustworthiness of cement
            products in the construction industry
          </p>
        </div>
        <div className="my-10">
          <p>
            For more information on our approach towards solving this problem,
            read our{" "}
            <Link to="/literature">
              <p className="underline underline-offset-4 font-semibold text-lg hover:text-[#aeb2b2] inline">
                Literature Review
              </p>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
