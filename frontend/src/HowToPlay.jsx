import React, { useState } from "react";

export default function HowToPlay({ onClose }) {
	const [currentStep, setCurrentStep] = useState(0);

	const steps = [
		{
			title: "Welcome to VoteRange!",
			content: (
				<div className="space-y-4">
					<p className="text-lg">
						This is a <strong>strategic voting game</strong> where you and other
						players vote on candidates, but here's the twist:{" "}
						<strong>everyone has different goals!</strong>
					</p>
					<div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
						<p className="font-semibold text-blue-900">The Goal:</p>
						<p className="text-blue-800">
							Vote strategically to maximize your coins by getting your
							preferred candidate to win!
						</p>
					</div>
				</div>
			),
		},
		{
			title: "Step 1: You Start With Coins",
			content: (
				<div className="space-y-4">
					<p className="text-lg">
						When you join an election, you receive <strong>200 coins</strong>{" "}
						(only once per election).
					</p>
					<div className="bg-green-50 p-4 rounded-lg border border-green-200">
						<p className="font-semibold mb-2">What can you do with coins?</p>
						<ul className="space-y-2">
							<li className="flex items-start">
								<span className="text-green-600 mr-2">✓</span>
								<span>
									<strong>Vote:</strong> Each vote costs 50 coins
								</span>
							</li>
							<li className="flex items-start">
								<span className="text-green-600 mr-2">✓</span>
								<span>
									<strong>Vote multiple times:</strong> You can vote as many
									times as you can afford
								</span>
							</li>
							<li className="flex items-start">
								<span className="text-green-600 mr-2">✓</span>
								<span>
									<strong>Vote for different candidates:</strong> Change your
									mind anytime
								</span>
							</li>
						</ul>
					</div>
					<p className="text-sm text-gray-600 italic">
						With 200 coins, you can vote up to 4 times (200 ÷ 50 = 4 votes)
					</p>
				</div>
			),
		},
		{
			title: "Step 2: Each Candidate is Worth Different Amounts to YOU 📊",
			content: (
				<div className="space-y-4">
					<p className="text-lg">
						Here's the game-changer:{" "}
						<strong>You have personalized payouts</strong> for each candidate.
					</p>
					<div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 space-y-3">
						<p className="font-semibold">Example: Your Personal Payouts</p>
						<div className="space-y-2 text-sm">
							<div className="flex justify-between items-center p-2 bg-green-100 rounded">
								<span>
									<strong>Candidate A wins:</strong>
								</span>
								<span className="text-green-700 font-bold">+150 coins</span>
							</div>
							<div className="flex justify-between items-center p-2 bg-green-50 rounded">
								<span>
									✓ <strong>Candidate B wins:</strong>
								</span>
								<span className="text-green-600 font-bold">+60 coins</span>
							</div>
							<div className="flex justify-between items-center p-2 bg-red-50 rounded">
								<span>
									✗ <strong>Candidate C wins:</strong>
								</span>
								<span className="text-red-600 font-bold">-30 coins</span>
							</div>
						</div>
					</div>
					<div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
						<p className="font-semibold text-purple-900 mb-2">The Twist:</p>
						<p className="text-purple-800">
							<strong>Other players have DIFFERENT payouts!</strong> What's good
							for you might be bad for them. That's what makes it strategic!
						</p>
					</div>
					<p className="text-sm text-gray-600 italic">
						Your payouts are private - other players can't see them unless you
						tell them
					</p>
				</div>
			),
		},
		{
			title: "Step 3: How to Win the Election",
			content: (
				<div className="space-y-4">
					<p className="text-lg">
						The election ends when{" "}
						<strong>any candidate reaches the vote threshold</strong> (usually
						10 votes).
					</p>
					<div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
						<p className="font-semibold mb-3">Election Progress:</p>
						<div className="space-y-2">
							<div>
								<div className="flex justify-between text-sm mb-1">
									<span>Candidate A</span>
									<span className="text-gray-600">7/10 votes</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-3">
									<div
										className="bg-blue-600 h-3 rounded-full"
										style={{ width: "70%" }}
									></div>
								</div>
							</div>
							<div>
								<div className="flex justify-between text-sm mb-1">
									<span>Candidate B</span>
									<span className="text-gray-600">4/10 votes</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-3">
									<div
										className="bg-blue-600 h-3 rounded-full"
										style={{ width: "40%" }}
									></div>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
						<p className="font-semibold text-yellow-900 mb-2">
							⚡ When Election Ends:
						</p>
						<p className="text-yellow-800">
							Everyone gets their payout based on who won. Some people gain
							coins, some might lose coins!
						</p>
					</div>
					<p className="text-sm text-gray-600 italic">
						You can see the progress bars to know how close each candidate is to
						winning
					</p>
				</div>
			),
		},
		{
			title: "Step 4: Strategy & Negotiation",
			content: (
				<div className="space-y-4">
					<p className="text-lg">
						Use the <strong>chat</strong> to negotiate with other players!
					</p>
					<div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200 space-y-3">
						<p className="font-semibold text-purple-900">Strategic Options:</p>
						<div className="space-y-2 text-sm">
							<div className="flex items-start">
								<span className="text-purple-600 mr-2"></span>
								<div>
									<strong>Vote for your favorite:</strong> Go all-in on your
									best candidate (+150 coins if they win!)
								</div>
							</div>
							<div className="flex items-start">
								<span className="text-blue-600 mr-2"></span>
								<div>
									<strong>Form coalitions:</strong> Team up with others who also
									benefit from the same candidate
								</div>
							</div>
							<div className="flex items-start">
								<span className="text-orange-600 mr-2"></span>
								<div>
									<strong>Block bad outcomes:</strong> Vote against candidates
									that would lose you coins
								</div>
							</div>
							<div className="flex items-start">
								<span className="text-green-600 mr-2"></span>
								<div>
									<strong>Compromise:</strong> Support a "safe" candidate that's
									okay for everyone
								</div>
							</div>
						</div>
					</div>
					<div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
						<p className="font-semibold text-red-900 mb-2">Watch Out:</p>
						<p className="text-red-800">
							If you run out of coins (balance ≤ 0), you can't vote anymore!
							Spend wisely.
						</p>
					</div>
				</div>
			),
		},
		{
			title: "Quick Example Game 🎮",
			content: (
				<div className="space-y-4">
					<p className="text-lg font-semibold mb-3">
						4 Players, 3 Candidates - Who Will Win?
					</p>

					<div className="bg-gray-50 p-4 rounded-lg space-y-3">
						<div className="border-b pb-2">
							<p className="font-semibold">Alice's Payouts:</p>
							<p className="text-sm">
								A: <span className="text-green-600 font-bold">+150</span> | B:{" "}
								<span className="text-green-600">+60</span> | C:{" "}
								<span className="text-orange-500">-30</span>
							</p>
						</div>
						<div className="border-b pb-2">
							<p className="font-semibold">Bob's Payouts:</p>
							<p className="text-sm">
								A: <span className="text-orange-500">-30</span> | B:{" "}
								<span className="text-green-600 font-bold">+150</span> | C:{" "}
								<span className="text-green-600">+20</span>
							</p>
						</div>
						<div className="border-b pb-2">
							<p className="font-semibold">Carol's Payouts:</p>
							<p className="text-sm">
								A: <span className="text-green-600">+20</span> | B:{" "}
								<span className="text-red-600">-70</span> | C:{" "}
								<span className="text-green-600 font-bold">+150</span>
							</p>
						</div>
						<div>
							<p className="font-semibold">Dave's Payouts:</p>
							<p className="text-sm">
								A: <span className="text-green-600 font-bold">+150</span> | B:{" "}
								<span className="text-green-600">+20</span> | C:{" "}
								<span className="text-green-600">+60</span>
							</p>
						</div>
					</div>

					<div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
						<p className="font-semibold mb-2">What might happen:</p>
						<div className="space-y-2 text-sm">
							<p>
								<strong>Alice:</strong> "I really want A! Who's with me?"
							</p>
							<p>
								<strong>Dave:</strong> "I also want A! Let's team up!"
							</p>
							<p>
								<strong>Bob:</strong> "Wait! If A wins, I lose 30 coins. Can we
								do B instead?"
							</p>
							<p>
								<strong>Carol:</strong> "I hate B! I'll vote for C. Bob, help me
								and we both win!"
							</p>
							<p>
								<strong>Bob:</strong> "But Alice and Dave might overpower us..."
							</p>
						</div>
					</div>

					<div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
						<p className="font-semibold text-green-900 mb-2">
							Possible Outcomes:
						</p>
						<ul className="text-sm space-y-1 text-green-800">
							<li>
								• <strong>A wins:</strong> Alice & Dave happy (+150 each), Bob
								loses (-30), Carol gets little (+20)
							</li>
							<li>
								• <strong>B wins:</strong> Bob happy (+150), Alice okay (+60),
								Carol very unhappy (-70)!
							</li>
							<li>
								• <strong>C wins:</strong> Carol wins big (+150), but Alice
								loses (-30)
							</li>
						</ul>
					</div>

					<p className="text-sm text-gray-600 italic text-center mt-4">
						Who will form alliances? Who will compromise? That's the game!
					</p>
				</div>
			),
		},
		{
			title: "Ready to Play?",
			content: (
				<div className="space-y-4">
					<div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-300">
						<p className="text-xl font-bold mb-4 text-center">
							Quick Reference:
						</p>
						<div className="grid grid-cols-2 gap-4 text-sm">
							<div className="bg-white p-3 rounded shadow-sm">
								<p className="font-semibold text-green-700">✓ Do This:</p>
								<ul className="mt-2 space-y-1 text-gray-700">
									<li>• Check your payouts first</li>
									<li>• Chat with other players</li>
									<li>• Form alliances</li>
									<li>• Vote strategically</li>
									<li>• Watch vote counts</li>
								</ul>
							</div>
							<div className="bg-white p-3 rounded shadow-sm">
								<p className="font-semibold text-red-700">✗ Avoid This:</p>
								<ul className="mt-2 space-y-1 text-gray-700">
									<li>• Voting randomly</li>
									<li>• Spending all coins early</li>
									<li>• Ignoring other players</li>
									<li>• Letting balance hit zero</li>
									<li>• Missing the chat</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
						<p className="font-semibold text-center text-lg mb-2">
							🎓 Remember:
						</p>
						<p className="text-center text-gray-700">
							This is a <strong>game theory experiment</strong>! There's no
							"perfect" strategy - it depends on what other players do.
							Negotiate, strategize, and have fun!
						</p>
					</div>

					<div className="text-center">
						<button
							onClick={onClose}
							className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:from-green-600 hover:to-blue-600 transition-all shadow-lg"
						>
							Got it! Let's Play!
						</button>
					</div>
				</div>
			),
		},
	];

	const nextStep = () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep(currentStep + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const goToStep = (index) => {
		setCurrentStep(index);
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
			<div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
				{/* Header */}
				<div className="sticky top-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-t-lg">
					<div className="flex justify-between items-center">
						<h2 className="text-2xl font-bold">{steps[currentStep].title}</h2>
						<button
							onClick={onClose}
							className="text-white hover:text-gray-200 text-3xl leading-none"
						>
							×
						</button>
					</div>
					<div className="flex items-center mt-4 space-x-2">
						{steps.map((_, index) => (
							<button
								key={index}
								onClick={() => goToStep(index)}
								className={`h-2 rounded-full transition-all ${
									index === currentStep
										? "bg-white w-8"
										: index < currentStep
											? "bg-green-300 w-2"
											: "bg-purple-300 w-2"
								}`}
							/>
						))}
					</div>
					<p className="text-sm mt-2 text-purple-100">
						Step {currentStep + 1} of {steps.length}
					</p>
				</div>

				{/* Content */}
				<div className="p-8">{steps[currentStep].content}</div>

				{/* Navigation */}
				<div className="sticky bottom-0 bg-gray-50 px-8 py-4 rounded-b-lg border-t flex justify-between items-center">
					<button
						onClick={prevStep}
						disabled={currentStep === 0}
						className={`px-4 py-2 rounded-lg font-semibold ${
							currentStep === 0
								? "bg-gray-200 text-gray-400 cursor-not-allowed"
								: "bg-gray-300 text-gray-700 hover:bg-gray-400"
						}`}
					>
						← Previous
					</button>

					<button
						onClick={currentStep === steps.length - 1 ? onClose : nextStep}
						className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700"
					>
						{currentStep === steps.length - 1 ? "Start Playing!" : "Next →"}
					</button>
				</div>
			</div>
		</div>
	);
}
