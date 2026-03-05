import React, { useEffect, useState } from "react";
import ElectionRoom from "./ElectionRoom";
import HowToPlay from "./HowToPlay";

export default function App() {
	const [username, setUsername] = useState(() => {
		return localStorage.getItem("username") || "";
	});

	const [loggedIn, setLoggedIn] = useState(() => {
		return localStorage.getItem("username") ? true : false;
	});

	const [elections, setElections] = useState([]);
	const [selectedElection, setSelectedElection] = useState(null);
	const [showHowToPlay, setShowHowToPlay] = useState(false);

	useEffect(() => {
		fetch("https://vote-backend-jofd.onrender.com/elections")
			.then((res) => res.json())
			.then((data) => setElections(data))
			.catch((err) => console.error("Error loading elections:", err));
	}, []);

	const handleLogin = () => {
		if (username.trim()) {
			localStorage.setItem("username", username);
			setLoggedIn(true);
		}
	};

	if (showHowToPlay) {
		return <HowToPlay onClose={() => setShowHowToPlay(false)} />;
	}

	if (!loggedIn) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
				<div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
					<div className="text-center mb-8">
						<h1 className="text-4xl font-bold text-gray-800 mb-2">VoteRange</h1>
						<p className="text-gray-600">Strategic Voting Game</p>
					</div>

					<div className="space-y-4">
						<input
							type="text"
							placeholder="Enter your username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							onKeyDown={(e) => e.key === "Enter" && handleLogin()}
							className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 text-lg"
						/>
						<button
							onClick={handleLogin}
							className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
						>
							Join Game
						</button>

						<button
							onClick={() => setShowHowToPlay(true)}
							className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold text-lg border-2 border-purple-600 hover:bg-purple-50 transition-all"
						>
							How to Play
						</button>
					</div>

					<div className="mt-6 text-center text-sm text-gray-500">
						<p>New to VoteRange? Click "How to Play" to learn the rules!</p>
					</div>
				</div>
			</div>
		);
	}

	if (selectedElection) {
		return (
			<ElectionRoom
				username={username}
				election={selectedElection}
				onExit={() => setSelectedElection(null)}
			/>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 p-6">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="bg-white rounded-lg shadow-xl p-6 mb-6">
					<div className="flex justify-between items-center">
						<div>
							<h1 className="text-3xl font-bold text-gray-800">VoteRange</h1>
							<p className="text-gray-600 mt-1">
								Welcome,{" "}
								<span className="font-semibold text-purple-600">
									{username}
								</span>
								!
							</p>
						</div>
						<button
							onClick={() => setShowHowToPlay(true)}
							className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-purple-200 transition-all"
						>
							How to Play
						</button>
					</div>
				</div>

				{/* Elections List */}
				<div className="bg-white rounded-lg shadow-xl p-6">
					<h2 className="text-2xl font-bold text-gray-800 mb-4">
						Available Elections
					</h2>

					{elections.length === 0 ? (
						<p className="text-gray-500 text-center py-8">
							No elections available
						</p>
					) : (
						<div className="space-y-4">
							{elections.map((election) => (
								<div
									key={election._id}
									className="border-2 border-gray-200 rounded-lg p-4 hover:border-purple-400 hover:shadow-md transition-all cursor-pointer"
									onClick={() => setSelectedElection(election)}
								>
									<div className="flex justify-between items-start mb-2">
										<h3 className="text-xl font-semibold text-gray-800">
											{election.title}
										</h3>
										<span
											className={`px-3 py-1 rounded-full text-sm font-semibold ${
												election.status === "open"
													? "bg-green-100 text-green-700"
													: "bg-red-100 text-red-700"
											}`}
										>
											{election.status === "open" ? "Open" : "Closed"}
										</span>
									</div>

									{election.description && (
										<p className="text-gray-600 text-sm mb-3">
											{election.description}
										</p>
									)}

									<div className="flex flex-wrap gap-2 mb-3">
										{election.candidates.map((candidate) => (
											<span
												key={candidate}
												className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
											>
												{candidate}
											</span>
										))}
									</div>

									<div className="flex justify-between items-center text-sm text-gray-500">
										<div className="space-x-4">
											<span>
												Win at: <strong>{election.voteThreshold}</strong> votes
											</span>
											<span>
												Entry bonus: <strong>{election.entryBonus}</strong>{" "}
												coins
											</span>
											<span>
												Vote cost: <strong>{election.voteCost}</strong> coins
											</span>
										</div>
									</div>

									{election.winner && (
										<div className="mt-3 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
											<p className="text-yellow-800 font-semibold">
												Winner: {election.winner}
											</p>
										</div>
									)}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
