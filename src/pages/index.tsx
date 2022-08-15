/**
 * @component
 */

const Homepage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Navbar */}
      <header className="flex justify-center px-4 w-full h-[79px] bg-white border-b border-gray-6 mobile:px-8 mobile:h-[69px] tablet:px-10">
        <div className="flex justify-start items-center w-full max-w-desktop">
          <svg
            width="130px"
            height="32px"
            viewBox="0 0 130 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fillRule="nonzero"
            className="fill-black"
          >
            <polygon points="5.47507 0 17.1413 0 17.1413 9.34367 0 9.34367" />
            <polygon points="5.4686 20.67547 0 11.33177 24.1314 11.33177 29.6 20.67547" />
            <polygon points="24.125 32.00737 12.459 32.00737 12.459 22.66367 29.6002 22.66367" />
            <path d="M54.5411,20.74887 C54.0672,20.94207 53.4933,21.11647 53.4307,21.13527 C53.0709,21.24247 52.6707,21.30797 52.1891,21.30797 C50.9949,21.30797 50.4422,20.70977 50.4422,19.46017 L50.4422,13.09067 L54.6219,13.09067 L54.6219,11.42777 L50.4422,11.42777 L50.4422,9.00367 L48.6509,9.00367 L48.6509,19.61237 C48.6509,21.76387 49.9996,23.00357 52.1009,23.00357 C52.9743,23.00357 53.7703,22.84017 54.5663,22.51397 C54.741,22.44347 54.976,22.32797 55.156,22.21017 L54.5411,20.74887 Z M96.3966,20.74887 C95.9227,20.94207 95.3488,21.11647 95.2862,21.13527 C94.9264,21.24247 94.5265,21.30797 94.0445,21.30797 C92.8507,21.30797 92.2977,20.70977 92.2977,19.46017 L92.2977,13.09067 L96.4774,13.09067 L96.4774,11.42777 L92.2977,11.42777 L92.2977,9.00367 L90.5064,9.00367 L90.5064,19.61237 C90.5064,21.76387 91.8551,23.00357 93.9564,23.00357 C94.8298,23.00357 95.6258,22.84017 96.4218,22.51397 C96.5965,22.44347 96.8318,22.32797 97.0119,22.21017 L96.3966,20.74887 Z M118.215,11.74527 C117.956,11.62517 117.645,11.52187 117.472,11.47097 C117.008,11.33007 116.333,11.23177 115.515,11.23177 C113.249,11.23177 111.911,12.54687 111.911,14.76457 L111.911,22.80757 L113.702,22.80757 L113.702,14.80757 C113.702,13.56857 114.332,12.96047 115.604,12.96047 C116.067,12.96047 116.479,13.00937 116.848,13.09447 C116.897,13.10567 117.286,13.19767 117.741,13.33727 L118.215,11.74527 Z M121.618,15.85157 C121.762,14.07987 122.989,12.87327 124.836,12.87327 C126.782,12.87327 128.076,14.13447 127.888,16.42757 L121.585,16.42757 L121.618,15.85157 Z M128.485,20.46937 C128.323,20.54177 128.133,20.61797 127.962,20.68657 C127.851,20.73097 127.748,20.77237 127.666,20.80747 C126.859,21.14467 126.018,21.35107 124.979,21.35107 C123.033,21.35107 121.761,20.20967 121.618,18.50347 C121.596,18.28637 121.585,18.06907 121.585,17.84077 L129.552,17.84077 C129.594,17.19927 129.601,16.55937 129.601,15.91687 C129.601,13.18867 127.832,11.26477 124.868,11.26477 C122.071,11.26477 120.136,13.10137 119.881,15.73157 C119.804,16.53617 119.815,17.80767 119.893,18.62317 C120.158,21.22067 122.093,23.00367 124.979,23.00367 C126.284,23.00367 127.423,22.68807 128.539,22.20967 C128.678,22.15177 128.888,22.04027 129.094,21.91617 L128.485,20.46937 Z M106.736,11.42787 L108.528,11.42787 L108.528,21.56117 C108.283,21.74877 108.085,21.86217 108.085,21.86217 C107.311,22.32937 105.708,23.00367 103.74,23.00367 C100.732,23.00367 98.9956,21.31897 98.9956,18.46007 L98.9956,11.42787 L100.787,11.42787 L100.787,18.31877 C100.787,20.27517 101.771,21.28587 103.751,21.28587 C104.912,21.28587 106.062,20.95997 106.736,20.52497 L106.736,11.42787 Z M78.3148,18.66667 C78.2707,18.23757 78.2485,17.67847 78.2485,17.11767 C78.2485,16.55687 78.2707,15.99767 78.3148,15.56857 C78.5582,13.00357 80.4269,11.23177 83.2357,11.23177 C85.5467,11.23177 87.0502,12.39477 87.6914,13.96037 C87.7779,14.16547 87.8927,14.57237 87.9627,14.85727 L86.3376,15.37307 C86.273,15.18577 86.2091,15.01047 86.1656,14.90587 C85.6904,13.64467 84.7395,12.96047 83.2576,12.96047 C81.3889,12.96047 80.261,14.07947 80.0954,15.75357 C80.0567,16.17207 80.0375,16.64387 80.0371,17.11767 C80.0375,17.59147 80.0567,18.06317 80.0954,18.48177 C80.261,20.15587 81.3889,21.27477 83.2576,21.27477 C84.7395,21.27477 85.6904,20.59057 86.1656,19.32937 C86.2091,19.22487 86.273,19.04947 86.3376,18.86217 L87.9627,19.37797 C87.8927,19.66287 87.7779,20.06977 87.6914,20.27497 C87.0502,21.84057 85.5467,23.00347 83.2357,23.00347 C80.4269,23.00347 78.5582,21.23177 78.3148,18.66667 Z M75.2884,11.42787 L73.4971,11.42787 L73.4971,20.52497 C72.8223,20.95997 71.6725,21.28587 70.5116,21.28587 C68.5322,21.28587 67.5477,20.27517 67.5477,18.31877 L67.5477,11.42787 L65.7564,11.42787 L65.7564,18.46007 C65.7564,21.31897 67.4928,23.00367 70.5005,23.00367 C72.4688,23.00367 74.0717,22.32937 74.8458,21.86227 C74.8458,21.86227 75.0437,21.74877 75.2884,21.56117 L75.2884,11.42787 Z M62.8591,11.47097 C63.0321,11.52187 63.3427,11.62517 63.6019,11.74527 L63.1273,13.33727 C62.6726,13.19767 62.2838,13.10567 62.235,13.09447 C61.8658,13.00937 61.4535,12.96047 60.9904,12.96047 C59.7187,12.96047 59.0887,13.56857 59.0887,14.80757 L59.0887,22.80757 L57.2974,22.80757 L57.2974,14.76457 C57.2974,12.54687 58.6353,11.23177 60.9022,11.23177 C61.7201,11.23177 62.3949,11.33007 62.8591,11.47097 Z M41.5751,16.03637 L43.2116,16.40597 C45.3456,16.89497 46.3186,17.96027 46.3186,19.53617 C46.3186,21.66647 44.671,23.00347 42.183,23.00347 C40.5136,23.00347 39.1645,22.57967 38.1252,21.76437 C38.0006,21.66977 37.7832,21.48947 37.6001,21.31577 L38.591,20.03077 C38.7694,20.16437 38.9491,20.29607 39.1295,20.42377 C39.3954,20.61207 39.6671,20.78577 39.9646,20.92237 C40.2722,21.06367 40.5974,21.16627 40.9299,21.23407 C41.3453,21.31907 41.7704,21.35147 42.1945,21.35147 C43.7865,21.35147 44.5495,20.62327 44.5495,19.60167 C44.5495,18.80797 44.0628,18.30797 42.8023,18.02547 L41.0773,17.61227 C39.2197,17.18837 38.0918,16.19917 38.0918,14.57997 C38.0918,12.52577 39.7616,11.23207 42.1389,11.23207 C43.6758,11.23207 44.8037,11.74327 45.5334,12.27567 C45.6687,12.37227 45.8807,12.55317 46.043,12.71567 L45.011,14.05357 C44.9077,13.97127 44.8023,13.89147 44.6956,13.81337 C44.3422,13.55437 43.978,13.31387 43.566,13.15407 C43.1271,12.98397 42.6552,12.89527 42.183,12.89527 C40.6795,12.89527 39.8391,13.48227 39.8391,14.53637 C39.8391,15.22117 40.248,15.73197 41.5751,16.03637 Z" />
          </svg>
        </div>
      </header>

      <div className="w-full max-w-desktop">
        {/* Breadcrumbs */}
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex gap-2 items-center my-6 desktop:mb-8">
            <li>All Assets</li>
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              className="shrink-0"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Chevron</title>
              <path d="M1 1L8 8L1 15" strokeLinecap="round" />
            </svg>{" "}
            <li>Bitcoin</li>
          </ol>
        </nav>

        {/* Title */}
        <div className="flex justify-between mb-4">
          <div className="flex flex-col mobile:flex-row mobile:gap-2 mobile:items-center">
            <div className="hidden w-8 h-8 mobile:inline">
              <div className="w-8 h-8 bg-white rounded-full border border-gray-6" />
            </div>
            <h3 className="text-header-3 font-medium tracking-tight leading-7 mobile:leading-[unset]">
              Bitcoin
            </h3>
            <p className="relative top-[2px] leading-7 mobile:leading-[unset]">
              BTC
            </p>
          </div>

          {/* Share Icons */}
          <div className="flex gap-4 items-center">
            <div className="flex justify-center items-center w-8 h-8 bg-gray-6 !rounded-full" />
            <div className="flex justify-center items-center w-8 h-8 bg-gray-6 !rounded-full" />
          </div>
        </div>

        <div className="flex justify-between mb-4">
          {/* Graph Placeholder */}
          <div className="w-[780px] h-[455px] bg-gray-6 rounded-xl" />

          {/* Trade Placeholder */}
          <div className="flex justify-center items-center w-[380px] h-[460px] text-gray-4 bg-white rounded-xl border border-gray-6">
            <div className="flex flex-col gap-2 items-start w-[330px] h-[410px]">
              <div className="flex flex-col justify-between w-[73px] h-[28px]">
                <ol className="flex flex-row justify-between w-[73px] h-[24px] text-body-2">
                  <li className="text-gray-1">Buy</li>
                  <li className="text-gray-4">Sell</li>
                </ol>
                <div className="flex w-[30px] h-[2px] bg-gray-1 rounded-sm" />
              </div>
              <div className="flex justify-around items-center w-[330px] h-[122px]">
                <ol className="flex flex-row justify-center items-center w-[46px] h-[42px] text-gray-9">
                  <li className="text-balance-display-1">$</li>
                  <li className="text-balance-display-2">0</li>
                </ol>
              </div>
              <div className="flex justify-between w-[330px] h-[32px]">
                <div className="flex flex-row items-center w-[154px] h-[32px]">
                  <p className="text-body-3 text-gray-4">
                    ETH Wallet: $29,778.36
                  </p>
                </div>
                <div className="flex justify-between w-[97px] h-[32px]">
                  <div className="flex justify-center items-center w-[32px] h-[32px] bg-gray-8 !rounded-full">
                    <p className="text-body-3 text-gray-1">C</p>
                  </div>
                  <div className="flex justify-center items-center w-[55px] h-[32px] bg-gray-8 !rounded-full">
                    <p className="text-body-3 text-gray-1">MAX</p>
                  </div>
                </div>
              </div>
              <div className="flex w-[330px] h-[131px]" />
              <div className="flex justify-center items-center w-[330px] h-[57px] bg-gray-9 rounded-lg">
                <div className="flex items-center w-[65px] h-[24px]">
                  <p className="text-body-2 text-white">Buy BTC</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          {/* Stats Placeholder */}
          <div className="flex basis-2/3 flex-col max-w-[780px]">
            <div className="mb-4 w-[120px] h-[32px] bg-gray-6 rounded-lg" />

            <div className="mb-4 w-[780px] h-[136px] bg-gray-6 rounded-xl" />

            <div className="mb-4 w-[120px] h-[32px] bg-gray-6 rounded-lg" />

            <div className="mb-4 w-[780px] h-[136px] bg-gray-6 rounded-xl" />

            <div className="mb-4 w-[780px] h-[136px] bg-gray-6 rounded-xl" />

            <div className="mb-4 w-[780px] h-[136px] bg-gray-6 rounded-xl" />
          </div>

          {/* Trending Placeholder */}
          <div className="w-[380px] h-[708px] bg-gray-6 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
