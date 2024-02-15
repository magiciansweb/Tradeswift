"use client";
import Image from "next/image";
import { IoMdStopwatch } from "react-icons/io";
import { MdDetails } from "react-icons/md";

import React, { useEffect, useState } from "react";
import Link from "next/link";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // Assuming you have only 2 pages
  const [tournaments, setTournaments] = useState([]);
  const [completeTournament, setCompleteTournaments] = useState([]);

  useEffect(() => {
    async function fetchTournaments() {
      const response = await fetch("/tournaments.json");
      const data = await response.json();
      setTournaments(data);
    }

    fetchTournaments();
  }, []);

  useEffect(() => {
    async function fetchTournaments2() {
      const response = await fetch("/tournament_complete.json");
      const data = await response.json();
      setCompleteTournaments(data);
    }

    fetchTournaments2();
  }, []);

  const handlePreviousPage = () => {
    setCurrentPage(currentPage === 1 ? 1 : currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage === totalPages ? totalPages : currentPage + 1);
  };

  // Function to render content based on current page
  const renderContent = () => {
    if (currentPage === 1) {
      return (
        <div className="">
          <div className="divider divider-info font-extrabold text-white  mb-10 text-2xl">
            {" "}
            Available for participation{" "}
          </div>

          {/* 1st card */}

          <div className="grid grid-cols-1  md:grid-cols-2 gap-5 space-x-3">
            {tournaments.map((tournament) => (
              <div key={tournament.id} className="card  shadow-xl  image-full ">
                <figure>
                  <Image
                    src="https://i.ibb.co/bBLXjNK/bar-chart-1060710.png"
                    alt="icon"
                    width={400}
                    height={300}
                  />
                </figure>
                <div className="card-body ">
                  <div className="flex gap-2 ">
                    <IoMdStopwatch className="text-white font-extrabold text-2xl" />

                    <span className="card-title text-sm font-bold text-white  bg-pink-800 p-1 rounded-lg ">
                      {" "}
                      {tournament.start_date}{" "}
                    </span>
                  </div>

                  <p className="mt-10 text-white text-center text-2xl ">
                    <span className="bg-pink-800  p-1 rounded-lg">
                      {" "}
                      {tournament.title}{" "}
                    </span>{" "}
                  </p>

                  <div className="text-green-700 text-center rounded-full bg-slate-200 font-extrabold my-5 space-y-3 text-lg">
                    <p> Prize pool </p>
                    <p> {tournament.prize_money} </p>
                  </div>

                  <div className="flex w-full text-white font-extrabold bg-slate-800">
                    <div className="grid h-20 flex-grow card rounded-box place-items-center">
                      <span className="text-lg "> {tournament.entry_fee} </span>
                      <span> Entry Fee </span>
                    </div>

                    <div className="divider divider-horizontal"></div>

                    <div className="grid h-20 flex-grow card  rounded-box place-items-center">
                      <span className="text-lg "> {tournament.duration} </span>
                      <span> Duration </span>
                    </div>
                  </div>

                  <Link
                    className="text-center mt-4"
                    href={`/userdashboard/tournaments/${tournament.id}`}
                  >
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ">
                      {" "}
                      <span className="text-xl"> details </span>{" "}
                      <MdDetails className="text-2xl"></MdDetails>{" "}
                    </button>{" "}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2 className="text-center text-3xl font-bold text-white mb-5 mt-5 underline">
            {" "}
            This Tournament Has been Finished{" "}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5   space-x-3">
            {completeTournament.map((tournament) => (
              <div
                key={tournament.id}
                className="card bg-base-100 shadow-xl  image-full"
              >
                <figure>
                  <Image
                    src="https://i.ibb.co/bBLXjNK/bar-chart-1060710.png"
                    alt="icon"
                    width={400}
                    height={300}
                  />
                </figure>
                <div className="card-body ">
                  <div className="flex gap-2 ">
                    <IoMdStopwatch className="text-white font-extrabold text-2xl" />

                    <span className="card-title text-sm font-bold text-white  bg-pink-800 p-1 rounded-lg ">
                      {" "}
                      {tournament.finished}{" "}
                    </span>
                  </div>

                  <p className="mt-10 text-white text-center text-2xl ">
                    <span className="bg-pink-800  p-1 rounded-lg">
                      {" "}
                      {tournament.title}{" "}
                    </span>{" "}
                  </p>

                  <div className="text-green-700 text-center rounded-full bg-slate-200 font-extrabold my-5 space-y-3 text-lg">
                    <p> Prize pool </p>
                    <p> {tournament.prize_money} </p>
                  </div>

                  <div className="flex w-full text-white font-extrabold bg-slate-800">
                    <div className="grid h-20 flex-grow card rounded-box place-items-center">
                      <span className="text-lg "> {tournament.entry_fee} </span>
                      <span> Entry Fee </span>
                    </div>

                    <div className="divider divider-horizontal"></div>

                    <div className="grid h-20 flex-grow card  rounded-box place-items-center">
                      <span className="text-lg "> {tournament.duration} </span>
                      <span> Duration </span>
                    </div>
                  </div>

                  <Link
                    className="text-center mt-4"
                    href={`/userdashboard/tournaments/${tournament.id}`}
                  >
                    <button className="btn btn-xs  sm:btn-sm md:btn-md lg:btn-lg ">
                      {" "}
                      <span className="text-xl text-green-500 font-extrabold">
                        {" "}
                        details{" "}
                      </span>{" "}
                      <MdDetails className="text-2xl"></MdDetails>{" "}
                    </button>{" "}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="join grid grid-cols-2">
        <button
          className="join-item btn btn-outline"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Active
        </button>
        <button
          className="join-item btn btn-outline"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Completed
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
}

export default Pagination;
