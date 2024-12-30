import React from "react";

const Roadmap = () => {
  return (
    <div id="roadmap" className="bg-[#8A5B45] flex flex-col justify-center items-center pb-20">
      <h1
        style={{ fontFamily: "Irish Grover" }}
        className="my-9 text-6xl text-white"
      >
        Roadmap
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-10">
        <div className="flex flex-col justify-center border-r-2 border-white ">
          <div className="bg-[#77AD4B] w-40 p-3 rounded-2xl ml-12">
            <h1>
              <strong>April </strong>{" "}
            </h1>
            <p>Eclipse, quest for artifact, volcano disaster</p>
          </div>
          <div className="mt-5">
            <h1 className="mb-1">
              <strong>Eclipse</strong>
            </h1>
            <p>Rare event causes unpredictable magic</p>
          </div>
          <div className="mt-3">
            <h1>
              <strong>Quest</strong>
            </h1>
            <p>Adventurer seek immortal artifact</p>
          </div>
          <div className="mt-3">
            <h1>
              <strong>Disaster</strong>
            </h1>
            <p>Volcano destroys city refugees flee</p>
          </div>
        </div>

        <div className="flex flex-col justify-center border-r-2 border-white px-3">
          <div className="bg-[#77AD4B] w-40 p-3 rounded-2xl ml-12">
            <h1>
              <strong>May </strong>{" "}
            </h1>
            <p>Shimmering City, conquest Unicorn Crsytal</p>
          </div>
          <div className="mt-5">
            <h1 className="mb-1">
              <strong>Obtain</strong>
            </h1>
            <p>Human acquire crstal</p>
          </div>
          <div className="mt-3">
            <h1>
              <strong>Foundation</strong>
            </h1>
            <p>Shimmering City established</p>
          </div>
          <div className="mt-3">
            <h1>
              <strong>Rise</strong>
            </h1>
            <p>City expands, conquers neighbors</p>
          </div>
        </div>

        <div className="flex flex-col justify-center border-r-2 border-white px-3">
          <div className="bg-[#77AD4B] w-40 p-3 rounded-2xl ml-12">
            <h1>
              <strong>June</strong>{" "}
            </h1>
            <p>War,curse from artifact, magic discovery</p>
          </div>
          <div className="mt-5">
            <h1 className="mb-1">
              <strong>War</strong>
            </h1>
            <p>Kingdoms clash in conflict. </p>
          </div>
          <div className="mt-3">
            <h1>
              <strong>Transformation</strong>
            </h1>
            <p>Peasant discovers magical powers.</p>
          </div>
          <div className="mt-3">
            <h1>
              <strong>Intrigue</strong>
            </h1>
            <p>Plot to assasinate leader uncovered</p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-3">
          <div className="bg-[#77AD4B] w-40 p-3 rounded-2xl text-center ml-10">
            <h1>
              <strong>July</strong>{" "}
            </h1>
            <p>Kingdom invaded, betrayal, hero's fetival</p>
          </div>
          <div className="mt-5">
            <h1 className="mb-1">
              <strong>Invasion</strong>
            </h1>
            <p>Kingdom attacked by monsters.</p>
          </div>
          <div className="mt-3">
            <h1>
              <strong>Betrayal</strong>
            </h1>
            <p>Queen's advisor revealed as spy</p>
          </div>
          <div className="mt-3">
            <h1>
              <strong>Festival</strong>
            </h1>
            <p>Grant celebration in hero's honor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
